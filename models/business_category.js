'use strict';
module.exports = (sequelize, DataTypes) => {
  var Business_Category = sequelize.define('Business_Category', {}, {});
  Business_Category.associate = function(models) {
    // associations can be defined here
  };
  return Business_Category;
};