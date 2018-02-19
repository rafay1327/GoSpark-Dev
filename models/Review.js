'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    text: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
   
  });
  return Review;
};