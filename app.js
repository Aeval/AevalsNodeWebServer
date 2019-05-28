var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Database
var mongo = require('mongodb');
var monk = require('monk');
//Add your mongoDB connection string here ↓
var db = monk('mongodb://fisher:Basch1!!@ds159563.mlab.com:59563/heroku_9hntkkzz');

//This is where you'll add aditional routes. It is best to make these modular in nature. Break things up by category.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Make db accessible to routers
app.use(function (req, res, next) {
  req.db = db;
  next();
})

//This is where you'll add routers to direct posts to your controllers from the front end.
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;