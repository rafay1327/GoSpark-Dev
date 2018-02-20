'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beacon = sequelize.define('Beacon', {}, {
    timestamps:false
  });

  Beacon.associate = function (models) {
   Beacon.belongsTo(models.Store, { foreignKey: { allowNull: false }});

  };
  
  return Beacon;
};