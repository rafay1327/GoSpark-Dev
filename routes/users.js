
var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authController = require('../controllers/authcontroller.js');
var db = require('../models');
var User = db.User;

var path = require('path');
const { URL } = require('url');

 module.exports  = function(router, passport) {

//Users
router.route('/')
.get(function(req, res, next) {

  User.findAll()
  .then(function(users){
    res.send(JSON.stringify(users));
  });


});


router.route('/login')
.get(function(req, res,next){
  res.render('users/login', { message: req.flash('loginMessage') });
});
// .post(passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true}),
//
//   function(req, res) {
//     console.log('successful')
//        res.redirect('/users/' + req.user.email);
//   });


router.post('/login', passport.authenticate('local-login', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/users/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages

          },
));

router.route('/logout')
.get(function(req, res, next){
  req.logout();
  res.redirect('/');
})

router.route('/register')
.get(function(req, res, next){

	res.render('users/register', {title: "GoSpark | Create User",  message: req.flash('signupMessage')});

});
router.post('/register', passport.authenticate('local-signup', {
            successRedirect : '/users/login', // redirect to the secure profile section
            failureRedirect : '/users/register', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
}));


 // .post(function(req, res, next){
 //
 //
 // var newUser = new User({
 //
 //  first_name: req.body.first_name,
 //  last_name: req.body.last_name,
 //  email: req.body.email,
 //  password : req.body.password,
 //  gender: req.body.gender,
 //  date_of_birth: req.body.date_of_birth
 //
 //  });
 //
 //  User.createUser(newUser, function(err, user){
 //    if (err) throw err;
 //    console.log(user);
 //  })
 //
 //  req.flash('success_msg', 'You are now registed. Login to you new Account!');
 //  res.redirect('/users/login');
 //
 //
 //  });

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

 // route middleware to ensure user is logged in
 function isLoggedIn(req, res, next) {
     if (req.isAuthenticated())
         return next();

     res.redirect('/');
 }

};
