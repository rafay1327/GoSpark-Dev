var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

const Store = sequelize.define('store', {

  // store_id: {
  //   type: Sequelize.INTEGER,
  //       autoIncrements: true,
  //       primaryKey: true,


  // },
  business_id: {
    type:  Sequelize.INTEGER, 
    allowNull: false
  },

  location_id:{
    type: Sequelize.INTEGER,
    allowNull: false
  },

  name: Sequelize.STRING, 

  address: Sequelize.STRING,


});

sequelize.sync();

module.exports = Store;



