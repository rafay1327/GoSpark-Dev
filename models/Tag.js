'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {
    timestamps:false
  });

  Tag.associate = function (models) {
   	Tag.belongsToMany(models.Business, { through: 'business_tag', as: 'business' });
  };
  return Tag;
};