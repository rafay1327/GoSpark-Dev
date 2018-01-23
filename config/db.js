const Sequelize = require('sequelize');

  const sequelize = new Sequelize(
    'gosparkdb', 
    'root',
    'rafay', 
    {

    host: 'localhost',
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },


    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  });
  
  module.exports = sequelize;

  var index = require('../models/index');


  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;