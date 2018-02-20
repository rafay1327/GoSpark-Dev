'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    timestamps:false
  });

   Location.associate = function (models) {
	  Location.hasMany(models.Store);
  };
  return Location;
};