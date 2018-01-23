var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

var Business = require('./Business');
var Tag = require('./Tag');



var BusinessTag = sequelize.define('business_tag',{},
     {
      timestamps: false
     });


    
    BusinessBadge.belongsTo(Business);
    BusinessBadge.belongsTo(Tag);

    sequelize.sync();

 module.exports= BusinessTag;