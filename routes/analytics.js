var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var db = require('../models');
var Business = db.Business;

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('analytics/index', { title: 'GoSpark' });
});

router.route('/business_categories')
.get(function(req, res, next){

	var business_all;
	 Business.findAll().
	  then(function(businesses){
	  	business_all = businesses;
 	 	
 	 })
	  .then(function(){
	  	res.render('analytics/business_categories', {businesses : business_all});
	  });

	
	

});


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) console.log(req.user)

        return next();

    res.redirect('/users/login');

}


module.exports = router;
