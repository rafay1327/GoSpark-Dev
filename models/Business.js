var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

module.exports = function(application, req, res){

const Business = sequelize.define('Business', {
 
    business_id: {
    type: Sequelize.INTEGER,
    defaultValue: function() {
      return generateMyId()
    },
    primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    category_id: Sequelize.INTEGER,
    membership_id: Sequelize.INTEGER,
    gallery_id: Sequelize.INTEGER,
    name: Sequelize.String,
    description: Sequelize.String,
    contact_no: Sequelize.String,
    facebook_url: Sequelize.String,
    twitter_url: Sequelize.String,
    linkedin_url: Sequelize.String,
    website: Sequelize.String,
    opening_days: Sequelize.String,
    timings: Sequelize.DATE,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
},
    {
      freezeTableName: true
    }
);

// sequelize.sync()
//   .then(() => Business.create({
//     user_id: '1',
//     category_id: '1',
//     membership_id: '1',
//     gallery_id: '1',
//     name: 'Test Business',
//     description: 'Test business desc',
//     contact_no: '464652348',
//     facebook_url: 'www.facebook.com',
//     twitter_url: 'www.facebook.com',
//     linkedin_url: 'www.facebook.com',
//     website: 'www.facebook.com',
//     opening_days: 'Mon, Tue , Thurs, Fri',
//     timings: '9-5',
//     created_at:'',
//     updated_at: ''
  
//   }))
//   .then(obj => {
//     console.log(obj.toJSON() + 'object created');
//   });

};
//FIX THIS ERROR