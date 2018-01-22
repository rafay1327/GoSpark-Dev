var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Tag = sequelize.define('tag', {
 
    
    description: {
        type: Sequelize.STRING
    }
   
    });
    
 sequelize.sync();
 module.exports = Tag;
