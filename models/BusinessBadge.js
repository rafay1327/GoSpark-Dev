var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance

var Business = require('./Business');
var Badge = require('./Badge');



var BusinessBadge = sequelize.define('business_badge',{},
     {
      timestamps: false
     });


    
    BusinessBadge.belongsTo(Business);
    BusinessBadge.belongsTo(Badge);

    sequelize.sync();

 module.exports= BusinessBadge;