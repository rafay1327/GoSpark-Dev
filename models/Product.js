'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    tagline: DataTypes.STRING
  }, {
    
  });

   Product.associate = function (models) {

    Product.belongsToMany(models.product_category, { through: 'product_pcategory', as: 'product_category' });
   };

  return Product;
};