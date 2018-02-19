var express = require('express');
var	morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./routes/index');
var users = require('./routes/users');
var Router = require('./routes/Router');
var categoriesRouter = require('./routes/categoriesRouter');
var membershipsRouter = require('./routes/membershipRouter');
var tagsRouter = require('./routes/tagsRouter');
var locationsRouter = require('./routes/locationsRouter');
var badgesRouter = require('./routes/badgesRouter');

var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/', index);
app.use('/users', users);
app.use('/businesses', Router);
app.use('/categories', categoriesRouter);
app.use('/memberships', membershipsRouter);
app.use('/tags', tagsRouter);
app.use('/locations', locationsRouter);
app.use('/badges', badgesRouter)




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
