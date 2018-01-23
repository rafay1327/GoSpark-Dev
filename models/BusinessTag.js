var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

var Business = require('./Business');
var tag = require('./tag');



var BusinessTag = sequelize.define('business_tag',{},
     {
      timestamps: false
     });

    BusinessTag.belongsTo(tag);
    BusinessTag.belongsTo(Business);
    

    sequelize.sync();

 module.exports= BusinessTag;