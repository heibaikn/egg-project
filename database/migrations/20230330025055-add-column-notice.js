'use strict';

const TABLE_NAME = "gm_notice";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(TABLE_NAME, 'title', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      }),
      queryInterface.addColumn(TABLE_NAME, 'weight', {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn(TABLE_NAME, 'start_time', {
        type: Sequelize.DATE,
        allowNull: false
      }),
      queryInterface.addColumn(TABLE_NAME, 'end_time', {
        type: Sequelize.DATE,
        allowNull: true
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn(TABLE_NAME, 'title');
    await queryInterface.removeColumn(TABLE_NAME, 'weight');
    await queryInterface.removeColumn(TABLE_NAME, 'start_time');
    await queryInterface.removeColumn(TABLE_NAME, 'end_time');
  }
};
