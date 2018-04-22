'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Business_Photos', {
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
      PhotoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Photos',
          key: 'id'
        },
        allowNull:false
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Business_Photos');
  }
};
