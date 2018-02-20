'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gallery = sequelize.define('Gallery', {
    banner_image: DataTypes.STRING
  }, {
  
  });


 Gallery.associate = function (models) {
 	 Gallery.BelongsTo(models.Business);	
 };
  return Gallery;
};