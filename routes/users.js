var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var mysql = require('mysql2');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');
var User = db.User;

var path = require('path');
const { URL } = require('url');



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

router.post('/login', passport.authenticate('local-login', {
            successRedirect : '/', // redirect to the secure profile section
            failureRedirect : '/users/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages

          },
));

router.route('/logout')
.get(function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/users/login');

    });

});

router.route('/register')
.get(function(req, res, next){

	res.render('users/register', {title: "GoSpark | Create User",  message: req.flash('signupMessage')});

});
router.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/',

        failureRedirect: '/users/login'
    }

));



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

//route to middleware isLoggedin
 function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/users/login');

}
module.exports = router;
