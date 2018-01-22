var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Earning = sequelize.define('Earning', {
 
    
    // earning_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    //  review_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    points: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

    }

    );
    
 sequelize.sync();
 module.exports = Earning;
