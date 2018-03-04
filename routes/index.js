var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('index', { title: 'GoSpark' });
});

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/users/login');

}

module.exports = router;
