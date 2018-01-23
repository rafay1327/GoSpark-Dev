var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

var User = require('./User');
var Deal = require('./Deal');



var UserDeal = sequelize.define('wishlist',{},{timestamps : false});


    
    UserDeal.belongsTo(User);
    UserDeal.belongsTo(Deal);


   //  const seed = () =>{
   //  	return sync()
   //  	.then( () => {
   //  		return Promise.all([
   //  		User.create({ first_name:'Rafay' , last_name: 'Shahid', email: 'rafayck@hotmail.com', password: '123456', date_of_birth: new Date() })
   //  		Deal.create({ description: 'deal desc', image:'abc.png', name:'double whopper', start_date: new Date, expiry_date: new Date(), unit_price: 499.00, in_currency: 'PKR', coupon_code:'C123' })
   //  		console.log('inside');
   //  		])
   //  		.then( result 	=> {
   //  		const new_user = result[0];
   //  		const new_deal = result[1];
			// return Promise.all([
   //  			UserDeal.create({user_email: new_user.email, deal_id: new_deal.id }),
   //  		]);
   //  	});
   //   })
   //  }

    sequelize.sync()

 module.exports= UserDeal;