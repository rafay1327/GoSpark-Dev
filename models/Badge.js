    var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Badge = sequelize.define('badge', {
   
    
    badge_id: {
        type: Sequelize.INTEGER,
        autoIncrements: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
} , 
{
    timestamps : false
}
);

sequelize.sync();
module.exports = Badge;
