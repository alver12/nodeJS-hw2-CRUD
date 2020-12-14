'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('jobs', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      company: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
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
    await queryInterface.dropTable('jobs');
  }
};
