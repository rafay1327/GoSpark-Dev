'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beacon = sequelize.define('Beacon', {}, {
    timestamps:false
  });

  
  return Beacon;
};