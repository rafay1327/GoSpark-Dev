var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');
var users = require('../models/User');
var path = require('path');
const { URL } = require('url');
var jsonDate = "2011-05-26";
var then = new Date(jsonDate);

//Users
router.route('/')
.get(function(req, res, next) {
  var users_all;
  users.findAll(
     /*    {
    include: [{model:reviews}]
  } */

    ).then(function(users){
    users_all = users;
    res.send(users);
  }); 
  
  
});
router.route('/login')
.get(function(req, res, next){
  res.render('users/login');
});

router.route('/register')
.get(function(req, res, next){

	res.render('users/register', {title: "GoSpark | Create User"});

})
 .post(function(req, res, next){


	users.sync()
  .then(() => users.create({
   

  first_name: 'Hamza',
  last_name: 'Usman',
  email: 'rafayck@yahoo.com',
  password: 'hamza',
  gender: 'male',
  date_of_birth: then

  
  })).then(user => {
   res.send(user.toJSON());
  });

 
  });
  
  // wishlist_id
 router.route('/:id').
 get(function(req, res, next){

  users.findById(req.params.id).then(function(user){
    res.send(user);  //use this for api testing

  }); 
  
 })
 .delete(function(req, res, next){

        users.destroy({
          where: {
            id: req.params.id
          }

    });
        res.render('users/index');
 });










module.exports = router;
