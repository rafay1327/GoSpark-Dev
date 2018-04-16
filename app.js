var express = require('express');
var	morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');
var app = express();

var index = require('./routes/index');
var users = require('./routes/users');
var Router = require('./routes/router');
var categoriesRouter = require('./routes/categoriesRouter');
var membershipsRouter = require('./routes/membershipRouter');
var tagsRouter = require('./routes/tagsRouter');
var locationsRouter = require('./routes/locationsRouter');
var badgesRouter = require('./routes/badgesRouter');
var dealsRouter= require('./routes/dealsRouter');

// require('./config/passport')(passport); // pass passport for configuration
var models = require('./models');


// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
require('./config/passport.js')(passport, models.User);

app.use(session({
  secret: 'secret',
  saveUnitialized : true,
  resave : true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));




app.use(flash());

app.use(function(req ,res ,next){
    res.locals.success_msg= req.flash('success_msg');
    res.locals.error_msg= req.flash('error_msg');
    res.locals.error= req.flash('error');
    next();
})


app.use('/', index);
app.use('/users', users);
app.use('/businesses', Router);
app.use('/categories', categoriesRouter);
app.use('/memberships', membershipsRouter);
app.use('/tags', tagsRouter);
app.use('/locations', locationsRouter);
app.use('/badges', badgesRouter);
app.use('/deals', dealsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
