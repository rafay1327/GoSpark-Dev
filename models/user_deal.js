'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_deal = sequelize.define('user_deal', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_deal;
};