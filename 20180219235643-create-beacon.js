'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beacons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StoreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stores',
          key: 'id'
        },
        allowNull:false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beacons');
  }
};