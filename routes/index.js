var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Card Form' });
});

router.get('/catalogue', function(req, res, next) {
  res.render('index', { title: 'Card Form' });
});

module.exports = router;
