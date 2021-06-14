const userService = require('../service/user.service');
const getEncryptedPassword = require('../utils/getEncryptedPassword');
// TODO 在 middleware 处理完之后，做最后的逻辑处理，与 service 交互
class UserController {
  // * middleware 验证结束
  async create(ctx, next) {
    console.log('创建用户中间件');
    const { username, password } = ctx.request.body;
    const encryptedPassword = getEncryptedPassword(password);
    console.log(username, encryptedPassword);
    const result = await userService.create(username, encryptedPassword);
    ctx.body = '创建用户成功';
  }
}

module.exports = new UserController();
