'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('o_auth', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      access_token: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      refresh_token: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
      },
      user_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
          reference: {
              model: 'users',
              key: 'id'
          }
      },
      creared_at: {
          type: Sequelize.DataTypes.DATE,
          default: Sequelize.fn('NOW')
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
    await queryInterface.dropTable('o_auth');
  }
};
