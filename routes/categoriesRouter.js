var express = require('express');
var router = express.Router();

var db = require('../models');
var Category = db.Category;

/* GET home page. */
router.get('/', function(req, res, next) {
	Category.findAll()
	 .then(function(category){
    res.send(JSON.stringify(category));
  }); 
  //res.render('index', { title: 'GoSpark' });
});

router.route('/create')
.get( function(req, res, next){
	res.render('categories/create');
})
.post(function(req, res, next){
	Category.create({

    name: 'Category name example',
    

  }).then(category => {
   res.send(JSON.stringify(category));
 });

});
router.route('/:id')
.get(function(req, res, next){
	Category.findById(req.params.id)
	.then(function(category){
  res.send(JSON.stringify(category));  //use this for api testing

}); ;
})
.put(function(req, res, next){
	Category.update({
     
    name: 'Test Category EDITED',
    
    },
    {
      where: {
          id : req.params.id
      }
    }).then(function(category){

      res.send(JSON.stringify(category));

  });
})
.delete(function(req, res, next){
	Category.destroy({
      where: {
        id: req.params.id
      }

    });
    res.render('categories/index');
});

module.exports = router;
