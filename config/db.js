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


    var Business = require('../models/Business');
    var Store = require('../models/Store');
    var Location = require('../models/Location');
    // var Deal = require('../models/Deal');

      
     Location.hasMany(Store);
     Store.belongsTo(Location);


  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
