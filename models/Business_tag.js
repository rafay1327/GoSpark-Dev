'use strict';
module.exports = (sequelize, DataTypes) => {
  var business_tag = sequelize.define('business_tag', {}, {
    timestamps:false
  });

  
  return business_tag;
};