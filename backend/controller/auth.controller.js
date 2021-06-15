const jwt = require('jsonwebtoken');

const secretKey = 'hello koa';

class AuthController {
  // 所有校验都通过之后，执行登录操作
  async login(ctx, next) {
    // console.log('login');
    // console.log(ctx.userInfo);
    const { id, username } = ctx.userInfo;
    let token;
    try {
      token = jwt.sign({ id, username }, secretKey, {
        expiresIn: '24h'
      });
    } catch (err) {
      console.log(err);
    }

    console.log(token);
    ctx.body = { token, id, username };
  }
}

module.exports = new AuthController();
