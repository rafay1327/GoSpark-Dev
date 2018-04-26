'use strict';


module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
     type: DataTypes.STRING,
      validate :{
        isEmail : true
      }
    },
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    device_id: DataTypes.STRING
  }, {
  });

   User.associate = function (models) {
    User.belongsToMany(models.Deal, { through: 'user_deal', as: 'deal' });
   };



  return User;
};
