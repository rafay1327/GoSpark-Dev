'use strict';
module.exports = (sequelize, DataTypes) => {
  var Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
   
  });

   Store.associate = function (models) {
	 Store.hasMany(models.Beacon);
	 Store.belongsTo(models.Business, {foreignKey: { allowNull : false}});
  };
  return Store;
};