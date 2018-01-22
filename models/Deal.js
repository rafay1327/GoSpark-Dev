var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


var Deal = sequelize.define('Deal', {
 
    // deal_id:{
    //     type: Sequelize.INTEGER,
    //     autoIncrements: true,
    //     primaryKey: true,
    //     allowNull: false
    // },
    // business_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
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

    
    });
    

 sequelize.sync();

  module.exports = Deal;
