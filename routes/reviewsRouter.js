var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Review = require('../models/Review');
var Business = require('../models/Business')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	Review.findAll({
    where :{
      business_id: req.params.id
    }
  }).then(function(deal){
    res.send(JSON.stringify(deal));  //use this for api testing

  });
});
//reviews


module.exports = router;
