'use strict';
module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define('Photo', {
    image: DataTypes.BLOB
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.Business, {foreignKey: {allowNull : false}});

  };
  return Photo;
};
