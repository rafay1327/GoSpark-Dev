'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      BusinessId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Businesses',
          key: 'id'
        },
        allowNull:false
      },
      LocationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Locations',
          key: 'id'
        },
        allowNull:false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Stores');
  }
};