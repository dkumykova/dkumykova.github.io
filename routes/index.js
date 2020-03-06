var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/game', function(req, res, next) {
  res.render('game', {title: 'Call Of Karen', synopsis: ' Karen is a typical 1950s suburban housewife, trapped in an unhappy marriage and taking care of an '
   + 'ungrateful child. If that wasn’t bad enough, the stars are right and Cthulhu is descending upon the world,' +  
  'starting with her home. Play through minigames of what a suburban mom would do as her house slowly' + 
  ' descends into chaos.', 
      role:'Lead Gameplay and Audio Programmer', additional:'Built in Unreal Engine 4, 9 month development time'});
});

// router.get('/contact', function(req, res, next) {
//   res.render('contact');
// });

module.exports = router;
