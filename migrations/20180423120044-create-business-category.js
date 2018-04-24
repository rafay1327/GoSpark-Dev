'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Business_Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BusinessId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Businesses',
          key: 'id'
        },
        allowNull:false
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        allowNull:false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Business_Categories');
  }
};