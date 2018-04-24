'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    timestamps:false
  });


  Category.associate = function (models) {
     Category.belongsToMany(models.Business, {through: 'Business_Category', as: 'business'});
   };

  return Category;
};