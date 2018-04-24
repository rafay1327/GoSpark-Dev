var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var db = require('../models');
var Business = db.Business,
	Review = db.Review;

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'GoSpark' });
});

router.get('/similar_businesses', function(req, res, next){
var business, review;
Business.findAll()
.then(function(obj){
business = obj;

Review.findAll()
.then(function(obj){
	review = obj;

})
.then(function(){
	  res.send({business, review});

});
});
});


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/users/login');

}

module.exports = router;
