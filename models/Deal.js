'use strict';
module.exports = (sequelize, DataTypes) => {
  var Deal = sequelize.define('Deal', {
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    expiry_date: DataTypes.DATE,
    unit_price: DataTypes.FLOAT,
    coupon_code: DataTypes.STRING
  }, {
  });
  return Deal;
};