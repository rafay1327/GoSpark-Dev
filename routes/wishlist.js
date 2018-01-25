var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');
var wishlist = require('../models/Wishlist');
var path = require('path');
const { URL } = require('url');


router.route('/')
.get(function(req, res, next) {
  var wishlist_u;
  reviews.findAll().then(function(wishlist){
    wishlist_u = wishlist;
    res.send(wishlist);
  }); 
  
  
});

router.route('/create')
.get(function(req, res, next){

	res.render('wishlist/create', {title: "GoSpark | Add to your wishlist"});

})
 .post(function(req, res, next){


	wishlist.sync()
  .then(() => wishlist.create({
   
   deal_id: 13,
   deal_name: 'McBox',
   deal_price: 550,
   deal_description: '2 chicken burgers and gourmet fries',
   
  

  
  })).then(wishlist => {
   res.send(wishlist.toJSON());
  });

 
  });
  
  
 router.route('/:id').
 get(function(req, res, next){

  wishlist.findById(req.params.id).then(function(wishlist){
    res.send(wishlist);  //use this for api testing

  }); 
  
 })
 .delete(function(req, res, next){

        wishlist.destroy({
          where: {
            id: req.params.id
          }

    });
        res.render('wishlist/index');
 });








module.exports = router;
