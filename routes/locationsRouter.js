var express = require('express');
var router = express.Router();

var db = require('../models');
var Location = db.Location;

/* GET home page. */
router.get('/', function(req, res, next) {
	Location.findAll()
	 .then(function(location){
    res.send(JSON.stringify(location));
  }); 
  //res.render('index', { title: 'GoSpark' });
});

router.route('/create')
.get( function(req, res, next){
	res.render('location/create');
})
.post(function(req, res, next){
	Location.create({

    region: 'Gulshan Iqbal 13D/1',
    city : 'Karachi',
    country: 'Pakistan'

  }).then(location => {
   res.send(JSON.stringify(location));
 });

});
router.route('/:id')
.get(function(req, res, next){
	Location.findById(req.params.id)
	.then(function(location){
  res.send(JSON.stringify(location));  //use this for api testing

}); ;
})
.put(function(req, res, next){
	Location.update({
     
    
    region: 'Gulistan e jauhar block 19',
    city : 'KHI',
    country: 'Pakistan'
    
    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(location){

      res.send(JSON.stringify(location));

  });
})
.delete(function(req, res, next){
	Location.destroy({
      where: {
        id: req.params.id
      }

    })
    .then(function(location){
      res.send(JSON.stringify(location));
    })
});

module.exports = router;
