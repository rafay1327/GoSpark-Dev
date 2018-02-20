var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');
var reviews = require('../models/Reviews');
var path = require('path');
const { URL } = require('url');
var jsonDate = "2017-05-06";
var then = new Date(jsonDate);


router.route('/')
.get(function(req, res, next) {
  var reviews_all;
  reviews.findAll().then(function(reviews){
    reviews_all = reviews;
    res.send(reviews);
  }); 
  
  
});

router.route('/create')
.get(function(req, res, next){

	res.render('reviews/create', {title: "GoSpark | Type a review"});

})
 .post(function(req, res, next){


	reviews.sync()
  .then(() => reviews.create({
   
   review_id: 13,
   email: 'hamzausman@outlook.com',
   business_id: 2,
   text: 'bad food quality',
   rating: 2,
   date: then
  

  
  })).then(review => {
   res.send(review.toJSON());
  });

 
  });
  
  // review_id
 router.route('/:id').
 get(function(req, res, next){

  reviews.findById(req.params.id).then(function(review){
    res.send(review);  //use this for api testing

  }); 
  
 })
 .delete(function(req, res, next){

        reviews.destroy({
          where: {
            id: req.params.id
          }

    });
        res.render('reviews/index');
 });








module.exports = router;
