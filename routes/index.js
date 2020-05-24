var express = require('express');
var router = express.Router();

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
  res.render('game', {title: 'Call Of Karen', synopsis: ' Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an '
   + 'ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world,' +  
  'starting with her home. Play through minigames of what a suburban mom would do as her house slowly' + 
  ' descends into chaos.', 
      role:'Lead Gameplay and Audio Programmer', tools:'Unreal Engine 4, Reaper', images: ["../../images/karen_breakfast.jpg", "../../images/karen_cleaning.jpg", "../../images/karen_dinner.jpg", "../../images/karen_spook.jpg"],
  trailer: 'https://www.youtube.com/embed/BB3jwdJzrFQ', isTrailer: 'y', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/fighters', function(req, res, next) {
  res.render('game', {title: 'Forest Fighters', synopsis: ' Play as birch, '
  + 'oak, or any other of your favorite muscley trees and fight to the death! Forest Fighters was created as a local game jam project with a team of 4 people in 2018. ', 
      role:'Audio and Programmer', tools:'Gamemaker, Reaper', images: [],
    trailer: '../../images/ff_show.jpg', isTrailer:'n', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/website', function(req, res, next) {
  res.render('game', {title: 'Personal Website', synopsis: ' My personal website and long-standing project, built and rebuilt from scratch over the course of 1.5 years.', 
      role:' Programmer', tools:'EJS, Bootstrap, HTML/CSS, Javascript', images: [],
    trailer: '', isTrailer:'n', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/fatal', function(req, res, next) {
  res.render('game', {title: 'Fatal Error', synopsis: 'In this game you and your opponent ' 
  + 'fight as one of the 5 most well-known programming languages, and are pitted against one another in order to show off your language’s most outstanding ' 
  + 'abilities. Set in the forbidden block of memory from which no language can allocate, players fight to death in a Tekken-like 1v1 arena, and take out '
 + 'aggression against their most hated language. You can play as Python, C, C++, Lisp, or Java, and prove once and for all which is the best programming language!', 
      role:' Programmer and Audio', tools:'Dragonfly Engine, C++', images: [],
    trailer: 'https://www.youtube.com/embed/tGfXXczZ4Js', isTrailer:'y', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/boids', function(req, res, next) {
  res.render('game', {title: 'Birds and Boids', synopsis: ' Birds and Boids is designed to be a tranquil, relaxing experience that allows users to interact '
  + 'with boids as they float across the screen and bring music where they go. Uses the Leap Motion for more immersive boid-to-human interaction.', 
      role:' Programmer and Audio', tools:'Unity, Leap Motion', images: [],
    trailer: 'https://www.youtube.com/embed/4rx7Z99PztU', isTrailer:'y', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/dragonfly', function(req, res, next) {
  res.render('game', {title: 'Dragonfly Engine', synopsis: ' Dragonfly is a fully functional ASCII-based game engine in made in C++, utilizing the SFML library for grahphics '
  + 'and audio. It supports game objects, 2D and 2.5D physics, user-uploaded ASCII styles and custom audio.', 
      role:' Programmer', tools:'C++', images: ["../../images/saucer_shoot_play.png", "../../images/state_machine_smaple.png",],
    trailer: '', isTrailer:'n', contrib: 'I did lots of tjhings it was cool'});
});

router.get('/coronagotchi', function(req, res, next) {
  res.render('game', {title: 'Coronagotchi', synopsis: ' Coronagotchi allows players to live out the nostalgia of older handheld games while either helping '
  + 'or harming their little coronavirus pet in this dark humor twist on the classic Tamagotchi device.', 
      role:' Programmer and Audio', tools:'Perlenspiel Engine (Javascript)', images : ["../../images/dragonfly_show.jpg", "../../images/web_before_after.png", "../../images/ff_show.jpg"],
    trailer: '', isTrailer:'n', contrib: 'I did lots of tjhings it was cool'});
});
    

module.exports = router;
