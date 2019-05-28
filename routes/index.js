var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth');

//Here is where you'll set up your page routing. The Vigridr stuff is just an example. Add or remove as needed.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Web Server Template' });
});

/* router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'My Profile | Vigridr Charity League' });
});

router.get('/voting', function(req, res, next) {
  res.render('voting', { title: 'Game Voting | Vigridr Charity League' });
});

router.get('/dashboard/games', function(req, res, next) {
  res.render('dashGames', { title: 'Games | Vigridr Charity League' });
});

router.get('/dashboard/teams', function(req, res, next) {
  res.render('dashTeams', { title: 'Teams | Vigridr Charity League' });
});

router.get('/dashboard/players', function(req, res, next) {
  res.render('dashPlayers', { title: 'Players | Vigridr Charity League' });
});

router.get('/dashboard/watch', function(req, res, next) {
  res.render('dashWatch', { title: 'Watch | Vigridr Charity League' });
}); */

module.exports = router;
