import { EggAppConfig, PowerPartial } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;
  config.security = {
    csrf: {
      enable: false
    }
  }
  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;
  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  config.middleware = ['auth','errorHandler']

  // override config from framework / plugin
  config.keys = appInfo.name + '123456';

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
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
