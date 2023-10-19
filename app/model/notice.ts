import { DataTypes, Sequelize } from "sequelize";

module.exports = (app, sequelize, tableNmae) => {
  
  const Notice = app.model.define( tableNmae || 'gm_notice', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "公告类型"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "公告内容"
    },
    isDelete: {
      field: 'is_delete',
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "是否删除"
    },
    deletedAt: {
      field: 'deleted_at',
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    startTime: {
      field: 'start_time',
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
      // set(value) {
      //   // console.log(this.setDataValue)
      //   if (value === '') {
      //     // @ts-ignore
      //     this.setDataValue('startTime', null);
      //   } else {
      //     // @ts-ignore
      //     this.setDataValue('startTime', value);
      //   }
      // }
    },
    endTime: {
      field: 'end_time',
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  });
  // console.log(Notice);
  return Notice;
};