const config = require('./config');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE
});

pool.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('mysql数据库连接失败');
    } else {
      console.log('mysql数据库连接成功');
    }
  });
});

const promisePool = pool.promise();

module.exports = promisePool;
