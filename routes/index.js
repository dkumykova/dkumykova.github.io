var express = require('express');
var router = express.Router();
var gameInfo = require('../public/js/gameInfoText');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/resume', function(req, res, next) {
  res.render('resume');
});

router.get('/karen', function(req, res, next) {
  res.render('game', {title: 'Call Of Karen', synopsis: gameInfo.description.karen,
      role:'Lead Gameplay and Audio Programmer', tools:'Unreal Engine 4, Reaper', images: ["../../images/karen_breakfast.jpg", "../../images/karen_cleaning.jpg", "../../images/karen_dinner.jpg", "../../images/karen_spook.jpg", "../../images/books.gif"],
  trailer: 'https://www.youtube.com/embed/BB3jwdJzrFQ', isTrailer: 'y', contrib: gameInfo.contributions.karen, steam: 'y', canPlay: 'n'});
});

router.get('/fighters', function(req, res, next) {
  res.render('game', {title: 'Forest Fighters', synopsis: gameInfo.description.fighters,
      role:'Audio and Programmer', tools:'Gamemaker, Reaper', images: ["../../images/ff_title_screen.jpg","../../images/forest_fighters.png", "../../images/ff_kick.png", "../../images/ff_end.jpg"],
    trailer: '', isTrailer:'n', contrib: gameInfo.contributions.fighters, steam: 'n', canPlay: 'n'});
});

router.get('/website', function(req, res, next) {
  res.render('game', {title: 'Personal Website', synopsis: gameInfo.description.website,
      role:' Programmer', tools:'EJS, Bootstrap, HTML/CSS, Javascript', images: ["../../images/old_website.png", "../../images/new_website.png"],
    trailer: '', isTrailer:'n', contrib: gameInfo.contributions.website, steam: 'n', canPlay: 'n'});
});

router.get('/fatal', function(req, res, next) {
  res.render('game', {title: 'Fatal Error', synopsis:  gameInfo.description.fatal,
      role:' Programmer and Audio', tools:'Dragonfly Engine, C++', images: ["../../images/fatal_error_title.png", "../../images/fatal_error_menu.png", "../../images/fatal_error_fight.png"],
    trailer: 'https://www.youtube.com/embed/tGfXXczZ4Js', isTrailer:'y', contrib: gameInfo.contributions.fatal, steam: 'n', canPlay: 'n'});
});

router.get('/boids', function(req, res, next) {
  res.render('game', {title: 'Birds and Boids', synopsis: gameInfo.description.boids,
      role:' Programmer and Audio', tools:'Unity, Leap Motion', images: [],
    trailer: 'https://www.youtube.com/embed/4rx7Z99PztU', isTrailer:'y', contrib: gameInfo.contributions.boids, steam: 'n', canPlay: 'n'});
});

router.get('/dragonfly', function(req, res, next) {
  res.render('game', {title: 'Dragonfly Engine', synopsis: gameInfo.description.dragonfly,
      role:' Programmer', tools:'C++', images: ["../../images/dragonfly_title.png", "../../images/saucer_shoot_play.png", "../../images/state_machine_sample.png"],
    trailer: '', isTrailer:'n', contrib: gameInfo.contributions.dragonfly, steam: 'n', canPlay: 'n'});
});

router.get('/coronagotchi', function(req, res, next) {
  res.render('game', {title: 'Coronagotchi', synopsis: gameInfo.description.coronagotchi,
      role:' Programmer and Audio', tools:'Perlenspiel Engine (Javascript)', images : ["../../images/corona_stats.png", "../../images/corona_breaker.png", "../../images/corona_mem_game.png","../../images/corona_dress.png"],
    trailer: '', isTrailer:'n', contrib: gameInfo.contributions.coronagotchi, steam: 'n', canPlay: 'y'});
});
    

module.exports = router;
