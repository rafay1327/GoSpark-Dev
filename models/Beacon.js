var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

const Beacon = sequelize.define('beacon', {

  // beacon_id:{
  //   type: Sequelize.INTEGER,
  //   autoIncrements: true,
  //   primaryKey: true,
  //   allowNull: false
  // },

  // store_id: {
  //   type: Sequelize.INTEGER,
  //   allowNull : false
  // }



},
{
  timestamps: false
});

sequelize.sync();

module.exports = Beacon;



