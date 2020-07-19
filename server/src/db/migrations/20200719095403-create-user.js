'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
          isAlpha: true,
        }
      },
      lastName: {
        type: Sequelize.STRING(30),
        allowNull: false,
        validate: {
          isAlpha: true,
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isEmail: true,
        }
      },
      login: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [4,15],
        }
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};