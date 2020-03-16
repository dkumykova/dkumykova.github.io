var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/karen', function(req, res, next) {
  res.render('game', {title: 'Call Of Karen', synopsis: ' Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an '
   + 'ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world,' +  
  'starting with her home. Play through minigames of what a suburban mom would do as her house slowly' + 
  ' descends into chaos.', 
      role:'Lead Gameplay and Audio Programmer', tools:'Unreal Engine 4, Reaper',
    picture1: '../../images/meatloaf.gif',
    picture2: '../../images/books.gif',
    trailer: 'https://www.youtube.com/embed/TGbZYUslGhQ'});
});

router.get('/fighters', function(req, res, next) {
  res.render('game', {title: 'Forest Fighters', synopsis: ' Play as birch,'
  + 'oak, or any other of your favorite muscley trees and fight to the death! Forest Fighters was created as a local game jam project with a team of 4 people in 2018. ', 
      role:'Audio and Programmer', tools:'Gamemaker, Reaper',
    picture1: '../../images/meatloaf.gif',
    picture2: '../../images/books.gif',
    trailer: '#'});
});

router.get('/website', function(req, res, next) {
  res.render('game', {title: 'Personal Website', synopsis: ' My personal website and long-standing project, built and rebuilt from scratch over the course of 1.5 years.', 
      role:' Programmer', tools:'EJS, Bootstrap, HTML/CSS, Javascript',
    picture1: '../../images/meatloaf.gif',
    picture2: '../../images/books.gif',
    trailer: '../../images/books.gif'});
});

router.get('/fatal', function(req, res, next) {
  res.render('game', {title: 'Fatal Error', synopsis: 'In this game you and your opponent ' 
  + 'fight as one of the 5 most well-known programming languages, and are pitted against one another in order to show off your language’s most outstanding ' 
  + 'abilities. Set in the forbidden block of memory from which no language can allocate, players fight to death in a Tekken-like 1v1 arena, and take out '
 + 'aggression against their most hated language. You can play as Python, C, C++, Lisp, or Java, and prove once and for all which is the best programming language!', 
      role:' Programmer and Audio', tools:'Dragonfly Engine, C++', 
    picture1: '../../images/meatloaf.gif',
    picture2: '../../images/books.gif',
    trailer: 'https://www.youtube.com/embed/tGfXXczZ4Js'});
});

router.get('/boids', function(req, res, next) {
  res.render('game', {title: 'Birds and Boids', synopsis: ' Birds and Boids is designed to be a tranquil, relaxing experience that allows users to interact '
  + 'with boids as they float across the screen and bring music where they go. Uses the Leap Motion for more immersive boid-to-human interaction.', 
      role:' Programmer and Audio', tools:'Unity, Leap Motion',
    picture1: '../../images/meatloaf.gif',
    picture2: '../../images/books.gif',
    trailer: 'https://www.youtube.com/embed/4rx7Z99PztU'});
});

  router.get('/dragonfly', function(req, res, next) {
    res.render('game', {title: 'Dragonfly Engine', synopsis: ' Dragonfly is a fully functional ASCII-based game engine in made in C++, utilizing the SFML library for grahphics'
    + 'and audio. It supports game objects, 2D and 2.5D physics, user-uploaded ASCII styles and custom audio.', 
        role:' Programmer', tools:'C++',
      picture1: '../../images/meatloaf.gif',
      picture2: '../../images/books.gif',
      trailer: '#'});
  });

    router.get('/doll', function(req, res, next) {
      res.render('game', {title: 'PCG Doll Generator', synopsis: ' This nifty tool utilizes paramterized procedural '
      + 'generation to create a customizable Russian Doll set! It was completed during the last half of Procjam 2019.', 
          role:' Programmer', tools:'NodeJS, Javascript',
        picture1: '../../images/meatloaf.gif',
        picture2: '../../images/books.gif',
        trailer: '#'});
    });


module.exports = router;
