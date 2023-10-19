
const path = require('path');

module.exports = {
  "database": "test",
  "username": "root",
  "password": "123456",
  "host": "0.0.0.0",
  "port": 3306,
  "dialect": "mysql",
  "directory": "./model",
  "additional": {
    "timestamps": false
  },
  "tables": ["gm_notice", "users"],
  "camelCase": true,
  "typescript": true,
  "es6": true
}