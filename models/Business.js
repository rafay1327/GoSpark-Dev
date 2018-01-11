var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Business = sequelize.define('Business', {
 
    // id: {
    // type: Sequelize.INTEGER,
    // autoIncrements: true,
    // primaryKey: true,
    // allowNull: false
    // },
    user_id: {
        type: Sequelize.INTEGER,
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    }

);

 sequelize.sync();
 module.exports = Business;
