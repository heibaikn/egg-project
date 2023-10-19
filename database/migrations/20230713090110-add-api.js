'use strict';
const { DataTypes } = require('sequelize')
const TABLE_NAME = "gm_api";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING, DATE, DECIMAL } = Sequelize;
    await queryInterface.createTable(TABLE_NAME, {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      body: {
        type: DataTypes.JSON()
      },
      created_at: {
        type: DataTypes.DATE(),
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        type: DataTypes.DATE(),
        defaultValue: Sequelize.fn('NOW'),
        onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      is_delete: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment: '是否删除',
      },
      deleted_at: {
        type: DataTypes.DATE()
      },
    }, {
      timestamps: true
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(TABLE_NAME);
  }
};
