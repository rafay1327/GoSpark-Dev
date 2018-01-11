var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Business = require('../models/Business');
var Sequelize = require('sequelize');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rafay",
  database: "mydb"
});


//Businesses
router.route('/')
.get(function(req, res, next) {

  res.render('businesses/index', { title: "GoSpark | Businesses" });
  con.query("SELECT * FROM mydb.businesses", function(error, rows, fields ){
  	//call back function
  	if (!!error){
  		console.log('error in the query');

  	}
  	else {
  		console.log('successful query!');
  		console.log(rows);
  	}
  })
});

router.route('/create')
.get(function(req, res, next){

	res.render('businesses/create', {title: "GoSpark | Create Business"});

})
.post(function(req, res, next){


	sequelize.sync()
  .then(() => Business.create({
    user_id: '1',
    category_id: '1',
    membership_id: '1',
    gallery_id: '1',
    name: 'Test Business',
    description: 'Test business desc',
    contact_no: '464652348',
    facebook_url: 'www.facebook.com',
    twitter_url: 'www.facebook.com',
    linkedin_url: 'www.facebook.com',
    website: 'www.facebook.com',
    opening_days: 'Mon, Tue , Thurs, Fri',
    timings: '9-5',
    created_at:'',
    updated_at: ''
  
  }))
  .then(obj => {
    console.log(obj.toJSON());
    console.log('created object');
  });

	// con.query("SELECT * FROM mydb.businesses", function(error, rows, fields ){
 //  	//call back function
 //  	if (!!error){
 //  		console.log('error in the query');

 //  	}
 //  	else {
 //  		console.log('successful  insert query!');
 //  		console.log(rows);
 //  	}
 //  })
	res.redirect('/businesses');
});


//Deals
router.route('/deals')
.get(function(req, res, next) { 

  res.render('businesses/deals/index', { title: "GoSpark Deals" });

});


module.exports = router;
