var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance
var bcrypt = require('bcrypt');
  const user = sequelize.define('user', {


      // wishlist_id:{
      //   type:Sequelize.INTEGER
      // },
      user_id:{
        type: Sequelize.INTEGER,
        autoIncrements: true
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

      },
      {
      timestamps: false
      },

       {
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

   module.exports = user;
