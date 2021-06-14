const promisePool = require('../app/database');

class UserService {
  //  TODO 1. 创建用户
  async create(username, password) {
    const statement = 'INSERT INTO `user` (username, password) VALUES(?, ?)';
    let result;
    try {
      result = await promisePool.execute(statement, [username, password]);
    } catch (err) {
      console.log('创建用户服务失败', err);
    }
    return result;
  }
  // TODO 2. 通过 username 查找用户
  async findUserByUsername(username) {
    const statement = 'SELECT * FROM `user` where username = ?';
    let result;
    try {
      result = await promisePool.execute(statement, [username]);
    } catch (err) {
      console.log('查找用户失败', err);
    }
    return result[0];
  }
}

module.exports = new UserService()