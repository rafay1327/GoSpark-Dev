'use strict';
module.exports = (sequelize, DataTypes) => {
  var Membership = sequelize.define('Membership', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    
  });
  Membership.associate = function (models) {
	  Membership.hasMany(models.Business);
  };

  return Membership;
};