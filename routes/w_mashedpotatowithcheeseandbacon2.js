var express = require('express');
var router = express.Router();

/* GET t_padbasil page. */
router.get('/', function(req, res, next) {
  res.render('w_mashedpotatowithcheeseandbacon2');
});

module.exports = router;