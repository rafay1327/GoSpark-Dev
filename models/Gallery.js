var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance


const Gallery = sequelize.define('Gallery', {
 
 
  
    banner_image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    photos: {
        type: Sequelize.STRING,
        allowNull: true
    }
    },
    {
    	timestamps : false
    }
    //One to Many Association here Business -> Gallery
    //learn association one to many
    //http://docs.sequelizejs.com/manual/tutorial/associations.html#1-m
    );

 sequelize.sync();
 module.exports = Gallery;
