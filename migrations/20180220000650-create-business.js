'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.STRING
      },
      facebook_url: {
        type: Sequelize.STRING
      },
      twitter_url: {
        type: Sequelize.STRING
      },
      linkedin_url: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      opening_days: {
        type: Sequelize.STRING
      },
      opening_days: {
        type: Sequelize.STRING
      },
      timings: {
        type: Sequelize.STRING
      },
      isFeatured:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
       UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull:false
      },
       MembershipId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Memberships',
          key: 'id'
        },
        allowNull:false
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};
