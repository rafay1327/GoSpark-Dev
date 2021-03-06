'use strict';
module.exports = (sequelize, DataTypes) => {
  var Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    contact_no: DataTypes.STRING,
    facebook_url: DataTypes.STRING,
    twitter_url: DataTypes.STRING,
    linkedin_url: DataTypes.STRING,
    website_url: DataTypes.STRING,
    opening_days: DataTypes.STRING,
    opening_days: DataTypes.STRING,
    timings: DataTypes.STRING,
    isFeatured:DataTypes.BOOLEAN
  });

  Business.associate = function (models) {
   Business.hasMany(models.Deal);
   Business.hasMany(models.Review);
   Business.hasMany(models.Store);
   Business.hasMany(models.Location);
   Business.hasMany(models.Photo);
   
   Business.belongsTo(models.User, { foreignKey: { allowNull: false }});
   Business.belongsTo(models.Membership, { foreignKey: { allowNull: false }});

   Business.belongsToMany(models.Tag, { through: 'Business_Tag', as: 'tag' });
   
   Business.belongsToMany(models.Category, {through: 'Business_Category', as: 'business'});

  };

  return Business;
};
