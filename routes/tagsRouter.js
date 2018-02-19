var express = require('express');
var router = express.Router();
var db = require('../models');
var Tag = db.Tag;

/* GET home page. */
router.get('/', function(req, res, next) {
	Tag.findAll()
	 .then(function(tag){
    res.send(JSON.stringify(tag));
  }); 
  //res.render('index', { title: 'GoSpark' });
});

router.route('/create')
.get( function(req, res, next){
	res.render('tag/create');
})
.post(function(req, res, next){
	Tag.create({

    description: 'Tag desc example',
    

  }).then(tag => {
   res.send(JSON.stringify(tag));
 });

});
router.route('/:id')
.get(function(req, res, next){
	Tag.findById(req.params.id)
	.then(function(tag){
  res.send(JSON.stringify(tag));  //use this for api testing

}); ;
})
.put(function(req, res, next){
	Tag.update({
     
    description: 'Test desc EDITED',
    
    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(tag){

      res.send(JSON.stringify(tag));

  });
})
.delete(function(req, res, next){
	Tag.destroy({
      where: {
        id: req.params.id
      }

    })
    .then(function(tag){
      res.send(JSON.stringify(tag));
    })
});

module.exports = router;
