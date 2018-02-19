'use strict';
module.exports = (sequelize, DataTypes) => {
  var earnings = sequelize.define('Earning', {
    points: DataTypes.FLOAT
  }, {});
  return earnings;
};