'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      avatar: {
          type: Sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable('users');
  }
};
