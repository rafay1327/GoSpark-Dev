'use strict';
module.exports = (sequelize, DataTypes) => {
  var Badge = sequelize.define('Badge', {
    name: DataTypes.STRING
  }, {
    timestamps : false
  });

  
  return Badge;
};