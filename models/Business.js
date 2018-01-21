var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Business = sequelize.define('business', {
 
    business_id: {
    type: Sequelize.INTEGER,
    autoIncrements: true,
    primaryKey: true,
    allowNull: false
    },
    user_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    membership_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    gallery_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    contact_no: {
        type: Sequelize.STRING,
        allowNull: false
    },
    facebook_url: Sequelize.STRING,
    twitter_url: Sequelize.STRING,
    linkedin_url: Sequelize.STRING,
    website: Sequelize.STRING,
    opening_days: Sequelize.STRING,
    timings: Sequelize.DATE,

    
    // associate: (models) => {
    
    //   Business.hasMany(models.Deal {
    //   foreignKey: 'deal_id',
    //   constraints: false,
    //   scope: {
    //     commentable: 'business'
    //   }
    
    //   });
    //   }
      
    }

    );
    
 sequelize.sync();
 module.exports = Business;
