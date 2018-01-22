var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Locations = sequelize.define('Locations', {
 
    // locationId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    region: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false
    }
    
   
    },

    {
      autoPK : false
    }

    );
    
 sequelize.sync();
 module.exports = Locations;