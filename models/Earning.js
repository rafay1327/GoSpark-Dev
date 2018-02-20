'use strict';
module.exports = (sequelize, DataTypes) => {
  var earnings = sequelize.define('Earning', {
    points: DataTypes.FLOAT
  }, {});


    Earning.associate = function (models) {
 
   };


  return earnings;
};