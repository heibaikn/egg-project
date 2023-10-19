import { DataTypes, Sequelize } from "sequelize";

module.exports = (app, sequelize, tableNmae) => {

  const Notice = app.model.define(tableNmae || 'gm_api', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    isDelete: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      comment: '',
    },
    body: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: ""
    },
  });
  // console.log(Notice);
  return Notice;
};