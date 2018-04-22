'use strict';
module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define('Photo', {
    image: DataTypes.BLOB
  }, {});
  Photo.associate = function(models) {
    Photo.belongsToMany(models.Business, {through: 'Business_Photo', as: 'business'});

  };
  return Photo;
};
