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
    var Deal = require('../models/Deal');
    var Beacon = require('../models/Beacon');
    var Category = require('../models/Category');
    var Review = require('../models/Review');
    var Tag = require('../models/Tag');
    var User = require('../models/User');
    var Membership = require('../models/Membership');
    var Earning = require('../models/Earning');
    var Gallery = require('../models/Gallery');
    var Badge = require('../models/Badge');


     Location.hasMany(Store);
     Store.belongsTo(Location);
     
     Store.hasMany(Beacon);
     Beacon.belongsTo(Store);

     // Business.hasOne(Category ,{constraints: false});
     // Category.belongsTo(Business, {constraints: false});

     // Business.hasOne(Gallery , {constraints: false});
     // Gallery.belongsTo(Business,  {constraints: false});

     // Membership.hasMany(Business);
     // Membership.belongsTo(Business);

     //User.hasMany(Business);
     //Business.belongsTo(User);

     // Business.hasMany(Review);
     // Review.belongsTo(Business);

     // Review.hasOne(Earning);
     // Earning.belongsTo(Review);







  sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
