var express = require('express');
var router = express.Router();

var db = require('../models');
var Membership = db.Membership;

/* GET home page. */
router.get('/', function(req, res, next) {
	Membership.findAll()
	 .then(function(membership){
    res.send(JSON.stringify(membership));
  }); 
  //res.render('index', { title: 'GoSpark' });
});

router.route('/create')
.get( function(req, res, next){
	res.render('memberships/create');
})
.post(function(req, res, next){
	Membership.create({

    type: 'Membership type example',
    description:'description about package',
    price : 5000.00

  }).then(membership => {
   res.send(JSON.stringify(membership));
 });

});
router.route('/:id')
.get(function(req, res, next){
	Membership.findById(req.params.id)
	.then(function(membership){
  res.send(JSON.stringify(membership));  //use this for api testing

}); ;
})
.put(function(req, res, next){
	Membership.update({
     
    type: 'Membership type example edited',
    description:'description about package edited.',
    price : 7500.50

    
    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(membership){

      res.send(JSON.stringify(membership));

  });
})
.delete(function(req, res, next){
	Membership.destroy({
      where: {
        id: req.params.id
      }

    });
    res.render('memberships/index');
});

module.exports = router;
