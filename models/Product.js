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
      Product.belongsToMany(models.ProductCategory, { through: 'product_category', as: 'productcategory' });
  
   };

  return Product;
};
