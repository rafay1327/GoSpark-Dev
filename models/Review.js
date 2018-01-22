var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Review = sequelize.define('review', {
   
    
    // badge_id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrements: true,
    //     primaryKey: true,
    //     allowNull: false
    // },
    // user_email:{
    //     type: Sequelize.STRING,
    //     allowNull:false
    // },
    // business_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false
    // },
    text: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER,
        
        validate:{
            len: [0, 1]
        }
    },
    date: {
        type: Sequelize.DATE
    }

    }

);

sequelize.sync();
module.exports = Review;
