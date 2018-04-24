'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    lattitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, 
  {
    timestamps:false
  });

   Location.associate = function (models) {
	  Location.belongsTo(models.Business, {foreignKey : { allowNull : false}});
  };
  return Location;
};