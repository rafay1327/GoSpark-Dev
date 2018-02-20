'use strict';
module.exports = (sequelize, DataTypes) => {
  var Earning = sequelize.define('Earning', {
    points: DataTypes.FLOAT
  }, {});


   Earning.associate = function (models) {
 	 Earning.hasOne(models.Review, { foreignKey: {allowNull:false}});
   };


  return Earning;
};