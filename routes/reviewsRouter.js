var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Review = require('../models/Review');
var Business = require('../models/Business');
var businessRouter = require('./businessRouter');


// //REVIEWS

// router.route('/:id/reviews')
// .get(function(req, res, next) {
  
//   Review.findAll({
//     where :{
//       business_id: req.params.id
//     }
//   }).then(function(reviews){	
//     res.send(JSON.stringify(reviews));  //use this for api testing

//   });
// });

// router.route('/:id/reviews/create')
// .get(function(req,res,next){
//   res.render('businesses/reviews/create');
// })
// .post(function(req,res,next){
  
//     Business.findById(req.params.id).then(function(business){
      
//    Review.create({

//    user_email : business.user_email,
//    business_id : req.params.id,
//    text:'this is a good business',
//    rating: 2,
//    date: new Date()
   


//    }).then(review => {
//      res.send(review.toJSON());
//    });

// });

   
// });

// router.route('/:bid/reviews/:id')
// .get(function(req, res, next){

//   Review.find({
//     where:{
//       business_id: req.params.bid,
//       id : req.params.id
//     }
//   }).then(function(review){
//     res.send(JSON.stringify(review));
//   })

// });



module.exports = router;
