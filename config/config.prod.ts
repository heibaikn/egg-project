import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.news = {
    pageSize: 30,
  };
  config.sequelize = {
    dialect: 'mysql',
    host: "db",
    port: 3306,
    database: 'test',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    define: {
      timestamps: true, // 自动添加 createdAt 和 updatedAt 字段
      underscored: true, // 将驼峰式命名转换为下划线命名
      freezeTableName: true, // 禁止自动将表名变成复数形式
    },
  }
  return config;
};
