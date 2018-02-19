var express = require('express');
var router = express.Router();
var Badge = require('../models/badge')

/* GET home page. */
router.get('/', function(req, res, next) {
	Badge.findAll()
	 .then(function(Badge){
    res.send(JSON.stringify(Badge));
  }); 
  //res.render('index', { title: 'GoSpark' });
});

router.route('/create')
.get( function(req, res, next){
	res.render('badges/create');
})
.post(function(req, res, next){
	Badge.create({

    name: 'Badge Name',
    

  }).then(Badge => {
   res.send(JSON.stringify(Badge));
 });

});
router.route('/:id')
.get(function(req, res, next){
	Badge.findById(req.params.id)
	.then(function(Badge){
  res.send(JSON.stringify(Badge));  //use this for api testing

}); ;
})
.put(function(req, res, next){
	Badge.update({

     name: 'Badge name EDITED',
   
    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(Badge){

      res.send(JSON.stringify(Badge));

  });
})
.delete(function(req, res, next){
	Badge.destroy({
      where: {
        id: req.params.id
      }

    })
    .then(function(Badge){
      res.send(JSON.stringify(Badge));
    })
});

module.exports = router;
