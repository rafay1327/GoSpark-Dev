var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Business = require('../models/Business');
var Deal = require('../models/Deal');
var Gallery = require('../models/Gallery');
var path = require('path');
const { URL } = require('url');


//Businesses
router.route('/')
.get(function(req, res, next) {
  var business_all;
  Business.findAll().then(function(businesses){
    business_all = businesses;
  }); 
  res.render('businesses/index', { title: "GoSpark | Businesses" });
  
});

router.route('/create')
.get(function(req, res, next){

	res.render('businesses/create', {title: "GoSpark | Create Business"});

})
 .post(function(req, res, next){


	Business.sync()
  .then(() => Business.create({
    
    user_id: '2',
    category_id: '2',
    membership_id: '2',
    gallery_id: '2',
    name: 'Test Business 2',
    description: 'Test business desc',
    contact_no: '464652348',
    facebook_url: 'www.facebook.com',
    twitter_url: 'www.facebook.com',
    linkedin_url: 'www.facebook.com',
    website: 'www.facebook.com',
    opening_days: 'Mon, Tue , Thurs, Fri',
    timings: '9-9',

  
  })).then(business => {
   res.send(business.toJSON());
  });

  // res.redirect('/businesses');
 
  });
  
  // business id
 router.route('/:id').
 get(function(req, res, next){

  Business.findById(req.params.id).then(function(business){
    res.send(business);  //use this for api testing

  }); 
  // res.render('businesses/single', { _id : req.params.id}); uncomment this when done with api testing

 })
 .delete(function(req, res, next){

        Business.destroy({
          where: {
            id: req.params.id
          }

    });
        res.render('businesses/index');
 });



//Deals
router.route('/:id/deals')
.get(function(req, res, next) { 
   var business_found;
   Business.findById(req.params.id).then(function(business){
     //console.log(business);  //use this for api testing
     business_found = business;
  }); 
   
  //   Deal.findbyId({ 
  //     where: {
  //       id : business_found.id
  //     }
  //   }).then(function(deal){
  //   res.send(deal);  //use this for api testing

  // }); 

  //res.render('businesses/deals/index', { title: "GoSpark Deals" });

});

//create deal for a business
router.route('/:id/deals/create')
.get(function(req, res, next){

  res.render('businesses/deals/create');

})
.post(function(req, res, next){

  Deal.sync()
  .then(() => Deal.create({
    
    business_id: req.params.b_id,
    description: 'Test business desc',
    image: '/abc.png',
    name: 'Test Deal',
    start_date: '10-2-2016',
    expiry_date: '10-10-2017',
    unit_price: '550.00',
    in_currency: 'PKR',
    coupon_code: 'C2034',


  
  })).then(business => {
   res.send(business.toJSON());
  });

});



router.route('/:b_id/deals/:d_id')
.get(function(req, res, next){

     Deal.findbyId({ 
      where: {
        id : req.params.d_id
      }
    }).then(function(deal){
    res.send(deal);  //use this for api testing

  }); 

});

//Gallery
router.route('/:id/gallery')
.get(function(req, res, next){
   var business_found;
   Business.findById(req.params.id).then(function(business){
     //console.log(business);  //use this for api testing
     business_found = business;
    console.log(business_found);
    }); 

   Gallery.findById(2
    // {
    //   where : {

    //     id : business_found.id
    //   }
    // }
    ).then(function(gallery){
    console.log(gallery);
    //res.send(gallery);  //use this for api testing

  });
      

})
.post(function(req, res, next){
  Gallery.sync()
    .then(() => Gallery.create({
      
      
      banner_image: '/abc.png',
      photos: '/bcd.png, /cde.png',
      


    
    })).then(gallery => {
     res.send(gallery.toJSON());
    });

});


router.route('/:id/deals')


module.exports = router;
