var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Business = require('../models/Business');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rafay",
  database: "gosparkdb"
});


//Businesses
router.route('/')
.get(function(req, res, next) {
  var business_all;
  Business.findAll().then(function(businesses){
    business_all = businesses;
  }); 
  res.render('businesses/index', { title: "GoSpark | Businesses" });
  
});

router.route('/create')
.get(function(req, res, next){

	res.render('businesses/create', {title: "GoSpark | Create Business"});

})
 .post(function(req, res, next){


	Business.sync()
  .then(() => Business.create({
    
    user_id: '2',
    category_id: '2',
    membership_id: '2',
    gallery_id: '2',
    name: 'Test Business 2',
    description: 'Test business desc',
    contact_no: '464652348',
    facebook_url: 'www.facebook.com',
    twitter_url: 'www.facebook.com',
    linkedin_url: 'www.facebook.com',
    website: 'www.facebook.com',
    opening_days: 'Mon, Tue , Thurs, Fri',
    timings: '9-9',

  
  })).then(business => {
   res.send(business.toJSON());
  });

  // res.redirect('/businesses');
 
  });
  
  // business id
 router.route('/:id').
 get(function(req, res, next){

  Business.findById(req.params.id).then(function(business){
    res.send(business);  //use this for api testing

  }); 
  // res.render('businesses/single', { _id : req.params.id}); uncomment this when done with api testing

 });



//Deals
router.route('/deals')
.get(function(req, res, next) { 

  res.render('businesses/deals/index', { title: "GoSpark Deals" });

});


module.exports = router;
