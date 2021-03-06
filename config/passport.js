// load all the things we need
// var LocalStrategy    = require('passport-local').Strategy;
// load up the user model
var db  = require('../models');
var User = db.User;

// load the auth variables

module.exports = function(passport, user) {
  //load bcrypt
  var bCrypt = require('bcrypt-nodejs');





      var User = user;

      var LocalStrategy = require('passport-local').Strategy;

            //serialize
      passport.serializeUser(function(user, done) {

          done(null, user.id);

      });

            // deserialize user
      passport.deserializeUser(function(id, done) {

          User.findById(id).then(function(user) {

              if (user) {

                  done(null, user.get());

              } else {

                  done(user.errors, null);

              }

          });

      });


      passport.use('local-signup', new LocalStrategy(

          {

              usernameField: 'email',

              passwordField: 'password',

              passReqToCallback: true // allows us to pass back the entire request to the callback

          },



          function(req, email, password, done) {

              var generateHash = function(password) {

                  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

              };



              User.findOne({
                  where: {
                      email: email
                  }
              }).then(function(user) {

                  if (user)

                  {

                      return done(null, false, {
                          message: 'That email is already taken'
                      });

                  } else

                  {

                      var userPassword = generateHash(password);

                      var data =

                          {

                              first_name: req.body.first_name,

                              last_name: req.body.last_name,

                              email: email,

                              password: userPassword,


                              gender : req.body.gender,

                              date_of_birth : req.body.date_of_birth

                          };

                      User.create(data).then(function(newUser, created) {

                          if (!newUser) {

                              return done(null, false);

                          }

                          if (newUser) {

                              return done(null, newUser);

                          }

                      });

                  }

              });

          }

      ));


      //LOCAL SIGNIN
passport.use('local-login', new LocalStrategy(

    {

        // by default, local strategy uses username and password, we will override with email

        usernameField: 'email',

        passwordField: 'password',

        passReqToCallback: true // allows us to pass back the entire request to the callback

    },


    function(req, email, password, done) {

        var User = user;

        var isValidPassword = function(userpass, password) {

            return bCrypt.compareSync(password, userpass);

        }

        User.findOne({
            where: {
                email: email
            }
        }).then(function(user) {

            if (!user) {

                return done(null, false, {
                    message: 'Email does not exist'
                });

            }

            if (!isValidPassword(user.password, password)) {

                return done(null, false, {
                    message: 'Incorrect password.'
                });

            }


            var userinfo = user.get();
            return done(null, userinfo);


        }).catch(function(err) {

            console.log("Error:", err);

            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });

        });


    }

));


}
