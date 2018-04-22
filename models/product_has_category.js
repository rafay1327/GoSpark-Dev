'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product_has_Category = sequelize.define('Product_has_Category', {}, {});
  Product_has_Category.associate = function(models) {
    // associations can be defined here
  };
  return Product_has_Category;
};