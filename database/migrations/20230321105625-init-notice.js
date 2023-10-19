'use strict';
const { DataTypes } = require('sequelize')
/** @type {import('sequelize-cli').Migration} */
// 在执行数据库升级时调用的函数，创建 users 表
const TABLE_NAME = "gm_notice";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, DECIMAL } = Sequelize;
    await queryInterface.createTable(TABLE_NAME, {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      type: {
        type: INTEGER,
        allowNull: false,
        comment: '公告类型',
      },
      content: {
        type: DataTypes.TEXT(),
        allowNull: false,
        comment: '公告内容',
      },
      is_delete: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        comment: '是否删除',
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
      deleted_at: {
        type: DataTypes.DATE()
      },
    }, {
      timestamps: true
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable(TABLE_NAME);
  },
};

