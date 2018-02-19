'use strict';
module.exports = (sequelize, DataTypes) => {
  var Membership = sequelize.define('Membership', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    
  });
  return Membership;
};