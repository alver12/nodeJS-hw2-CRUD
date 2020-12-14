'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('cars', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      model: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      price: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      year: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
      },
      user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'users',
              key: 'id'
          }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('cars');
  }
};
