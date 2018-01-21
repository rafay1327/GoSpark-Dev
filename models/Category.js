var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

const Category = sequelize.define('category', {

 
  name: {
    type:  Sequelize.STRING, 
    allowNull: false
  }


},
{
  timestamps: false
}
);

sequelize.sync();

module.exports = Category;



