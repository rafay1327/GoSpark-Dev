var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');

var db = require('../models');
var User = db.User;

var path = require('path');
const { URL } = require('url');
var jsonDate = "2011-05-26";
var then = new Date(jsonDate);

//Users
router.route('/')
.get(function(req, res, next) {

  User.findAll()
  .then(function(users){
    res.send(JSON.stringify(users));
  });


});

router.route('/create')
.get(function(req, res, next){

	res.render('users/create', {title: "GoSpark | Create User"});

})
 .post(function(req, res, next){


User.create({

  wishlist_id: 578,
  first_name: 'Hamza',
  last_name: 'Usman',
  email: 'rafay@hotmail.com',
  password: 'hamza',
  gender: 'male',
  date_of_birth: then


  }).then(user => {
   res.send(user.toJSON());
  });


  });

  // wishlist_id
 router.route('/:email').
 get(function(req, res, next){

  User.findById(req.params.email).then(function(user){
    res.send(user);  //use this for api testing

  });

 })
 .delete(function(req, res, next){

        User.destroy({
          where: {
            email  : req.params.email
          }

    });
        res.render('users/index');
 });










module.exports = router;
