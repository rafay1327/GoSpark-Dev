'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gallery = sequelize.define('Gallery', {
    banner_image: DataTypes.STRING
  }, {
  
  });
  return Gallery;
};