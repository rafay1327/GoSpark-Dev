var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Business = require('../models/Business');
var Deal = require('../models/Deal');
var Gallery = require('../models/Gallery');
var Store = require('../models/Store');
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

	res.render(  'businesses/create', {title: "GoSpark | Create Business"});

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
    timings: '9-9'

  
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
router.route('/:id/store')
.get(function(req, res, next) { 
   var business_found;
   Business.findById(req.params.id).then(function(business){
     //console.log(business);  //use this for api testing
     business_found = business;
  }); 
   
    Store.findbyId({ 
      where: {
        id : business_found.id
      }
    }).then(function(store){
    res.send(store);  //use this for api testing

  }); 

  //res.render('businesses/deals/index', { title: "GoSpark Deals" });

});

//create store for a business
router.route('/:id/stores/create')
.get(function(req, res, next){

  res.render('businesses/stores/create');

})
.post(function(req, res, next){

  Store.sync()
  .then(() => Store.create({
    business_id: '2',
    location_id: '3',
    name: 'Test Deal',
    address: 'Gulshan Iqbal 13D/1'


  
  })).then(store => {
   res.send(store.toJSON());
  });

});



router.route('/:b_id/stores/:s_id')
.get(function(req, res, next){

  Store.findById(req.params.s_id).then(function(store){
    res.send(store);  //use this for api testing

  });

}).put(function(req, res, next){

 


})
 .delete(function(req, res, next){

        Store.destroy({
          where: {
            id: req.params.s_id
          }

    });
        res.render('businesses/index');
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
