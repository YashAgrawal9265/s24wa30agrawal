var express = require('express');
var router = express.Router();

/* All about my data */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Yash Jagdishkumar Agrawal' });
});

module.exports = router;
