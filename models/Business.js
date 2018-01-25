var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Business = sequelize.define('Business', {
 
     // business_id: {
    // type: Sequelize.INTEGER,
    // autoIncrements: true,
    // primaryKey: true
    // },
    // user_email: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // category_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    // membership_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    
    // gallery_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type :Sequelize.STRING,  
    },
    contact_no: {
        type: Sequelize.STRING,
        allowNull: false
    },
    facebook_url: {
        type:  Sequelize.STRING,
    },
    twitter_url :{
        type:  Sequelize.STRING,
    },
    linkedin_url:{
        type:  Sequelize.STRING,
    },
    website: {
        type:  Sequelize.STRING,
    },
    opening_days: {
        type:  Sequelize.STRING,
    }
    ,
    timings: {
        type:  Sequelize.STRING,
    }
  
    
   
    });


 sequelize.sync();
 module.exports = Business;
