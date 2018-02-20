'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_category = sequelize.define('product_category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
   timestamps:false
  });
  return product_category;
};