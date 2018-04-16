var express = require('express');
var router = express.Router();
var multer = require('multer');
var crypto = require('crypto');


var path = require('path');

var db = require('../models');
var Business = db.Business,
Deal = db.Deal,
Gallery = db.Gallery,
Store = db.Store,
Category = db.Category,
Beacon = db.Beacon,
Badge = db.Badge,
Earning = db.Earning,
Review = db.Review,
Location = db.Location,
User = db.User,
Membership = db.Membership;

const { URL } = require('url');




//Businesses
router.route('/')
.get(function(req, res, next) {

  Business.findAll().
  then(function(businesses){
    res.send(JSON.stringify(businesses));
  });
  //res.render('businesses/index', { title: "GoSpark | Businesses" });

});

router.route('/create')
.get(function(req, res, next){

	res.render('businesses/create', {title: "GoSpark | Create Business"});

})
.post(function(req, res, next){

  Business.create({

    name: 'Test Business 2',
    description: 'Test business desc',
    contact_no: '464652348',
    facebook_url: 'www.facebook.com',
    twitter_url: 'www.facebook.com',
    linkedin_url: 'www.facebook.com',
    website: 'www.facebook.com',
    opening_days: 'Mon, Tue , Thurs, Fri',
    timings: '9-9',
    CategoryId : 1,
    MembershipId: 1,
    UserId : 2




  }).then(business => {
   res.send(JSON.stringify(business));
 });

  // res.redirect('/businesses');

});

  // business id
  router.route('/:id')
  .get(function(req, res, next){

    Business.findById(req.params.id)
    .then(function(business){
    res.send(JSON.stringify(business));  //use this for api testing

    });
  // res.render('businesses/single', { _id : req.params.id}); uncomment this when done with api testing
  })
  .put(function(req, res, next){

    Business.update({
    UserEmail: 'rafayck@hotmail',
    CategoryId : 1,
    MembershipId: 3,
    name: 'Test Business EDITED',
    description: 'Test business desc EDITED',
    contact_no: '464652348',
    facebook_url: 'www.facebook.com',
    twitter_url: 'www.facebook.com',
    linkedin_url: 'www.facebook.com',
    website: 'www.facebook.com',
    opening_days: 'Mon, Tue , Thurs, Fri, SUNDAY',
    timings: '9-9'

    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(business){

      res.send(JSON.stringify(business));

  });

  })
  .delete(function(req, res, next){

    Business.destroy({
      where: {
        id: req.params.id
      }

    });
    res.render('businesses/index');
  });



//Store
router.route('/:id/stores')
.get(function(req, res, next) {


 Store.findAll({
  where: {
    BusinessId : req.params.id
  }
}).then(function(store){
    res.send(JSON.stringify(store));  //use this for api testing

  });

  //res.render('businesses/deals/index', { title: "GoSpark Deals" });

});

//create store for a business
router.route('/:id/stores/create')
.get(function(req, res, next){

  res.render('stores/create');

})
.post(function(req, res, next){

 Store.create({

    name: 'Test Deal',
    address: 'Gulshan Iqbal 13D/1',
    BusinessId : req.params.id,
    LocationId: 1



  }).then(store => {
   res.send(JSON.stringify(store));
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
});




//Gallery
router.route('/:id/galleries')
.get(function(req, res, next){
 var business_found;
 Business.findById(req.params.id).then(function(business){
      //use this for api testing
      business_found = business;

      Gallery.findById(business.gallery_id)
      .then(function(gallery){
        if(gallery == null){
          res.send('no photos');
        }
       else res.send(JSON.stringify(gallery.photos));

     });
    });
});

router.route('/:id/galleries/create')
.get(function(req, res, next){
  res.render('galleries/create');
})
.post(function(req, res, next){

//   const storage = multer.diskStorage({
//   destination: '/images',
//   filename: function (req, file, callback) {
//     //..
//   }
// });


//   crypto.pseudoRandomBytes(16, function(err, raw) {
//   if (err) return callback(err);

//     callback(null, raw.toString('hex') + path.extname(file.originalname));
//   });

//     upload.single('avatar'), (req, res) => {
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });

//     } else {
//       console.log('file received');
//       return res.send({
//         success: true
//       })
//     }
//   };


  Gallery.create({


    banner_image: '/abc.png',
    BusinessId: req.params.id

  }).then(gallery => {
   res.send(gallery.toJSON());
 });

});
router.route('/:bid/galleries/:id')
.get(function(req, res, next){

  Gallery.findById(req.params.id)
  .then(function(gallery){

   res.send(JSON.stringify(gallery.banner_image));

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
.get(function(req, res, next){
  Deal.findAll({
    where :{
      BusinessId: req.params.id
    }
  }).then(function(deal){
    res.send(JSON.stringify(deal));  //use this for api testing

  });
});

router.route('/:id/deals/create')
.get(function(req, res, next){

  res.render('deals/create', { title : 'Create New Deal'});

})
.post(function(req, res, next){

  Deal.create({

   BusinessId : req.params.id,
   name: "Double whopper",
   description: "Buy one get one free",
   image: "abc.png",
   start_date: new Date(),
   expiry_date: new Date(),
   unit_price: 499.00,
   in_currency: "PKR",
   coupon_code: "C213"



 }).then(deal => {
   res.send(deal.toJSON());
 });

});

router.route('/:bid/deals/:id')
.get(function(req, res, next){

 Deal.findAll({
  where:{
    id:req.params.id,
    BusinessId: req.params.bid
  }

})
 .then(function(deal){
  res.send(JSON.stringify(deal));  //use this for api testing

});
})
.put(function(req, res, next){

  Deal.update({

   name: "Double whopper UPDATED",
   description: "Buy one get one free UPDATED",
   image: "abc.png",
   start_date: new Date(),
   expiry_date: new Date(),
   unit_price: 499.00,
   in_currency: "PKRsadsad",
   coupon_code: "C213"

 },
 {
  where: {
    id : req.params.id
  }
}).then(function(deal){

  res.send(JSON.stringify(deal));

});
})
.delete(function(req, res, next){
  Deal.destroy({
    where: {
      id: req.params.id
    }

  })
  .then(function(deal){
   res.send(JSON.stringify(deal));
 });
});

//REVIEWS

router.route('/:id/reviews')
.get(function(req, res, next) {

  Review.findAll({
    where :{
      BusinessId: req.params.id
    }
  }).then(function(reviews){
    res.send(JSON.stringify(reviews));  //use this for api testing

  });
});

router.route('/:id/reviews/create')
.get(function(req,res,next){
  res.render('reviews/create');
})
.post(function(req,res,next){


   Review.create({

   text:'this is a good business',
   rating: 2,
   UserId : 2,
   BusinessId : req.params.id



   }).then(review => {
     res.send(review.toJSON());
   });

});


router.route('/:bid/reviews/:id')
.get(function(req, res, next){
  Review.findAll({
    where :{
      BusinessId: req.params.bid,
      id : req.params.id
    }
  }).then(function(reviews){
    res.send(JSON.stringify(reviews));  //use this for api testing

  });
})
  .put(function(req, res, next){

    Review.update({
     UserId : 1,
     BusinessId : req.params.bid,
     text:'this is a good business EDITED',
     rating: 4,
     date: new Date()

    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(business){

      res.send(JSON.stringify(business));

  });

  })
  .delete(function(req ,res , next){

    Review.destroy({
      where:{
        id : req.params.id
      }
    }).then(review => {
   res.send(JSON.stringify(review));
  });

  });

module.exports = router;
