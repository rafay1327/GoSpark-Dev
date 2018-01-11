var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Deal = sequelize.define('Deal', {
 
 
    business_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
    },
     name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date: Sequelize.DATE,
    expiry_date: Sequelize.DATE,
    unit_price: Sequelize.FLOAT,
    in_currency: Sequelize.STRING,
    coupon_code: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    }

);

 sequelize.sync();
 module.exports = Deal;
