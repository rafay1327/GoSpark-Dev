var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance
var bcrypt = require('bcrypt');
  const User = sequelize.define('user', {


      wishlist_id:{
        type:Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },

      last_name: {
        type: Sequelize.STRING
      }, 


      email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

       gender: {
        type: Sequelize.STRING
      },

      date_of_birth:{
        type: Sequelize.DATEONLY
      }

      }, {
      instanceMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password)
        }
      },

     


    });

  // force: true will drop the table if it already exists
  sequelize.sync();

   module.exports = User;


 
