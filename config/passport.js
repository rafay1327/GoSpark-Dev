// load all the things we need
// var LocalStrategy    = require('passport-local').Strategy;

// load up the user model
var db  = require('../models');
var User = db.User;

// load the auth variables

module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(

    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback

    },function(req, email, password, done) {
      var generateHash = function(password) {

    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);


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
              email: email,
              password: userPassword,
              firstname: req.body.first_name,
              lastname: req.body.last_name,
              gender: req.body.gender,
              date_of_birth : req.body.date_of_birth,

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
  };
    }

));

//LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(

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


// module.exports = function(passport) {
//
//     // =========================================================================
//     // passport session setup ==================================================
//     // =========================================================================
//     // required for persistent login sessions
//     // passport needs ability to serialize and unserialize users out of session
//
//     // used to serialize the user for the session
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });
//
//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });
//
//     // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================
//     passport.use('local-login', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
//
//         // asynchronous
//         process.nextTick(function() {
//
//             User.findOne({where :{ 'email' :  email }}, function(err, user) {
//
//                 // if there are any errors, return the error
//                 if (err)
//                     return done(err);
//
//                 // if no user is found, return the message
//                 if (!user)
//                     return done(null, false, req.flash('loginMessage', 'No user found.'));
//
//                 if (!user.validPassword(password))
//                     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//
//                 // all is well, return user
//                 else{
//
//                     return done(null, user);
//                   }
//             });
//         });
//
//     }));
//
//     // =========================================================================
//     // LOCAL SIGNUP ============================================================
//     // =========================================================================
//     passport.use('local-signup', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
//
//         // asynchronous
//         process.nextTick(function() {
//
//             // if the user is not already logged in:
//             if (!req.user) {
//                 User.findOne({ 'local.email' :  email }, function(err, user) {
//                     // if there are any errors, return the error
//                     if (err)
//                         return done(err);
//
//                     // check to see if theres already a user with that email
//                     if (user) {
//                         return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//                     } else {
//
//                         // create the user
//                         var newUser            = new User();
//
//                         // newUser.local.first_name = newUser.first_name;
//                         // newUser.local.last_name = newUser.last_name;
//                         newUser.local.email    = email;
//                         newUser.local.password = newUser.generateHash(password);
//                         // newUser.local.gender = newUser.gender;
//                         // newUser.local.date_of_birth = newUser.date_of_birth;
//
//                         newUser.save(function(err) {
//                             if (err)
//                                 return done(err);
//
//                             return done(null, newUser);
//                         });
//                     }
//
//                 });
//             // if the user is logged in but has no local account...
//             } else if ( !req.user.local.email ) {
//                 // ...presumably they're trying to connect a local account
//                 // BUT let's check if the email used to connect a local account is being used by another user
//                 User.findOne({ 'local.email' :  email }, function(err, user) {
//                     if (err)
//                         return done(err);
//
//                     if (user) {
//                         return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
//                         // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
//                     } else {
//                         var user = req.user;
//                         user.local.email = email;
//                         user.local.password = user.generateHash(password);
//                         user.save(function (err) {
//                             if (err)
//                                 return done(err);
//
//                             return done(null,user);
//                         });
//                     }
//                 });
//             } else {
//                 // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
//                 return done(null, req.user);
//             }
//
//         });
//
//     }));
//
//
//
// };
