'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_category = sequelize.define('product_category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
   timestamps:false
  });

  product_category.associate = function (models) {

    product_category.belongsToMany(models.Product, { through: 'product_pcategory', as: 'product' });
   };

  return product_category;
};