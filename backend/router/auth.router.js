const Router = require('@koa/router');
const { verifyParams } = require('../middleware/user.middleware');
const { verifyUser, verifyAuthToken } = require('../middleware/auth.middleware');
const { login } = require('../controller/auth.controller');

const authRouter = new Router();

authRouter.post('/login', verifyParams, verifyUser, login);

authRouter.get('/test', verifyAuthToken, async(ctx, next) => {
  ctx.body = {
    msg: "校验成功，你登陆过",
    userInfo: ctx.userInfo
  }
})
module.exports = authRouter;
