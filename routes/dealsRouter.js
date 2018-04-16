var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var db = require('../models');
var Deal = db.Deal;

/* GET all deals page. */
router.get('/', function(req, res, next) {
  Deal.findAll()
	 .then(function(deals  ){
    res.send(JSON.stringify(deals));
  });
  // res.render('deals', { title: 'GoSpark' });

});




module.exports = router;
