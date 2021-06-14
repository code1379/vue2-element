const userService = require('../service/user.service');
const errorType = require('../constants/error-type');
const getEncryptedPassword = require('../utils/getEncryptedPassword');
const jwt = require('jsonwebtoken');

const secretKey = 'hello koa';

// 验证用户
const verifyUser = async (ctx, next) => {
  console.log('verifyUser');
  const { username, password } = ctx.request.body;
  const result = await userService.findUserByUsername(username);
  console.log(result);
  // 用户名密码格式正确，但是在数据库中不存在
  if (result?.length === 0) {
    const error = new Error(errorType.USERNAME_IS_NOT_EXIST);
    return ctx.app.emit('error', error, ctx);
  }
  // 用户存在，对比密码
  const encryptedPassword = getEncryptedPassword(password);
  const userInfo = result[0];
  // 如果密码不正确
  if (userInfo.password !== encryptedPassword) {
    const error = new Error(errorType.PASSWORD_MISTAKE);
    return ctx.app.emit('error', error, ctx);
  }
  // 全部校验通过
  ctx.userInfo = userInfo;
  await next();
};

// 验证 token 查看权限
const verifyAuthToken = async (ctx, next) => {
  console.log('verifyAuthToken');
  const authorization = ctx.headers.authorization;
  // console.log(`authorization ${authorization}`);
  const token = authorization.replace('Bearer ', '');
  // console.log(token);
  let result;
  try {
    result = jwt.verify(token, secretKey);
  } catch (err) {
    // console.log(err);
  }
  console.log(`result ${result}`)
  // 为 undefined，验证失败
  if(!result) {
    const error = new Error(errorType.UNAUTHENTICATED_USER);
    return ctx.app.emit("error", error, ctx)
  }
  ctx.userInfo = result
  // 验证成功
  await next()
};
module.exports = { verifyUser, verifyAuthToken };
