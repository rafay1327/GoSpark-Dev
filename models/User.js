'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
     type: DataTypes.STRING,
     primaryKey:true,
      validate :{
        isEmail : true
      }
    },
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_of_birth: DataTypes.DATE
  }, {
  });

   User.associate = function (models) {
    User.belongsToMany(models.Deal, { through: 'user_deal', as: 'deal' });
   };

    User.create = function(newUser, callback){
      console.log('inside create user');
     bcrypt.genSalt(10, function(err, salt){
       bcrypt.hash(newUser.password, salt, function(err, hash){
         newUser.password = hash;
         newUser.save(callback);
       });
     });
   };

       // checking if password is valid
    User.validPassword = function(password) {
      console.log('inside valid password');
        return bcrypt.compareSync(password, "rafay");
    };


   User.comparePassword = function(candidatePassword, hash, callback){
     console.log('inside compare password');
     bcrypt.compare(candidatePassword, hash, function(err, isMatch){
       if(err) throw err;
       callback(null, isMatch);
     })
   }



  return User;
};
