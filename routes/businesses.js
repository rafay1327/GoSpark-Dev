var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var Business = require('../models/Business');
var Deal = require('../models/Deal');
var Gallery = require('../models/Gallery');
var Store = require('../models/Store');
var Category = require('../models/Category');
var Beacon = require('../models/Beacon');
var Badge = require('../models/Badge');
var path = require('path');
const { URL } = require('url');


//Businesses
router.route('/')
.get(function(req, res, next) {
  var business_all;
  Business.findAll().then(function(businesses){
    business_all = businesses;
    res.send(json.stringify(business_all));
  }); 
  //res.render('businesses/index', { title: "GoSpark | Businesses" });
  
});

router.route('/create')
.get(function(req, res, next){

	res.render('businesses/create', {title: "GoSpark | Create Business"});

})
 .post(function(req, res, next){


	Business.sync()
  .then(() => Business.create({
    
    user_email: 'rafayck@hotmail.com',
    category_id: 4,
    membership_id: 7,
    gallery_id: 1,
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
router.route('/:id/stores')
.get(function(req, res, next) { 
   var business_found;
   Business.findById(req.params.id).then(function(business){
     //console.log(business);  //use this for api testing
     business_found = business;

  }); 
   
    Store.find({
      where: {
        id: 1
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
    business_id: 1,
    location_id: 3,
    name: 'Test Deal',
    address: 'Gulshan Iqbal 13D/1'


  
  })).then(store => {
   res.send(store.toJSON());
  });

});



router.route('/:b_id/stores/:id')
.get(function(req, res, next){

  Store.find({
    where :{
      id: req.params.id
    }
  }).then(function(store){
    res.send(store);  //use this for api testing

  });

}).put(function(req, res, next){

  Store.update({
    id : req.params.id,
    name: 'Test Deal Edited',
    address: 'Gulshan Iqbal 13D/1 edited'


  
  });


})
 .delete(function(req, res, next){

        Store.destroy({
          where: {
            id: req.params.s_id
          }

    })
    .then(function(store){
       res.send(JSON.stringify(store));
    });
       // res.render('businesses/index');
 });


//Gallery
router.route('/:id/galleries')
.get(function(req, res, next){
   var business_found;
   Business.findById(req.params.id).then(function(business){
     //console.log(business);  //use this for api testing
     business_found = business;
    }); 

   Gallery.find(
      {
        where : {

          id : 1
        }
      }
    ).then(function(gallery){
    console.log(json.stringify(gallery));
    //res.send(gallery);  //use this for api testing

  });
      

})
router.route('/:id/galleries/create')
.get(function(req, res, next){
  res.render('businesses/galleries/create');
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
router.route('/:bid/galleries/:id')
.get(function(req, res, next){
  Gallery.findById(req.params.id)
  .then(function(gallery){
     //console.log(business);  //use this for api testing
     //business_found = business;
     res.send(JSON.stringify(gallery));
    }); 
})
.delete(function(req, res, next){
  Gallery.destroy({
          where: {
            id: req.params.id
          }

    })
  .then(function(gallery){
      res.send(JSON.stringify(gallery));
  });
});

//Deals
router.route('/:id/deals')



module.exports = router;
