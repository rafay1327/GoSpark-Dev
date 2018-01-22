var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Membership= sequelize.define('Membership',{
 
    // membership_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

   
    }

    );
    
 sequelize.sync();
 module.exports = Membership;