'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductCategory = sequelize.define('ProductCategory', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  ProductCategory.associate = function(models) {
     ProductCategory.belongsToMany(models.Product, { through: 'product_order', as: 'product' });
  };
  return ProductCategory;
};
