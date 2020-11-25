var express = require('express');
var router = express.Router();

/* GET koreanmenu. */
router.get('/', function(req, res, next) {
  res.render('koreanmenu');
});

module.exports = router;