var express = require('express');
var router = express.Router();

/* GET dessert. */
router.get('/', function(req, res, next) {
  res.render('dessert');
});

module.exports = router;