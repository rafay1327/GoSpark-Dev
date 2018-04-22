'use strict';
module.exports = (sequelize, DataTypes) => {
  var Business_Photo = sequelize.define('Business_Photo', {

  }, {
    timestamps:false
  });
  Business_Photo.associate = function(models) {
    // associations can be defined here
  };
  return Business_Photo;
};
