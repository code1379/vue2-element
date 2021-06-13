// 读取 .env 中的配置到 process.env
require('dotenv').config();

const {
  APP_PORT,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_HOST
} = process.env;

module.exports = {
  APP_PORT,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_HOST
};
