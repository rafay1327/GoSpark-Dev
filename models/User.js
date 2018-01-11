var Sequelize = require('sequelize');
var sequelize = require('../config/db'); //sequelize instance
module.exports = function(application, req, res){
  const User = sequelize.define('user', {

    id: {
      type: Sequelize.STRING,
      primarykey: true,
      autoIncrement: true
    },

    firstName: {
      type: Sequelize.STRING
    },

    lastName: {
      type: Sequelize.STRING
    }, 

    email: {
      type: Sequelize.STRING
    },

    password: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Incorrect Email format.'
        },
        isUnique: connection.validateIsUnique(
          'email',
          'Email already exists.'
          )}
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
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

      gender: {
        type: Sequelize.STRING
      },

      date_of_birth:{
        type: Sequelize.DATEONLY
      }


    });

  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'Rafay',
      lastName: 'Shahid',
      email:'rafayck@hotmail.com',
      password: '',
      gender: 'Male',
      date_of_birth: '10-10-1995'

      });
    });

   module.exports = User;
   }

 
