'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserEmail: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'email'
        },
        allowNull:false
      },
      DealId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Deals',
          key: 'id'
        },
        allowNull:false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_deals');
  }
};