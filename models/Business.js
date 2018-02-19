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
    timings: DataTypes.STRING
  }, {
  
  });
  return Business;
};