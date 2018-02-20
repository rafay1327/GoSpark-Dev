'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    timestamps:false
  });


  Category.associate = function (models) {
   Category.belongsTo(models.Business, { foreignKey: { allowNull: false }});
   };

  return Category;
};