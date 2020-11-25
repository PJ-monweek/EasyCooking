var express = require('express');
var router = express.Router();

/* GET thaimenu. */
router.get('/', function(req, res, next) {
  res.render('thaimenu');
});

module.exports = router;