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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
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
       MembershipId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Memberships',
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
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};