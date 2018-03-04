'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_pcategory = sequelize.define('product_pcategory', {}, {
   timestamps:false
  });
  return product_pcategory;
};