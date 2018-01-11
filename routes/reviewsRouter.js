var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.render('reviews/index', { title : 'Go Spark Reviews'});
});

module.exports = router;
