const errorType = require('../constants/error-type');
const userService = require('../service/user.service');

// TODO: 对body传入的参数做校验，主要是校验登录注册
const verifyParams = async (ctx, next) => {
  // console.log("验证参数");
  const { username, password } = ctx.request.body;
  // username/password 不为空值或者字符串 ""，
  // falsy 变量 "" NaN Null undefined 0
  // ! body 传值只有可能是字符串，或者从对象中解构出来的不存在的值 undefined
  if (username === '' || password === '' || !username || !password) {
    const error = new Error(errorType.USERNAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // console.log("通过验证");
  // 验证通过，执行下一个中间件
  await next();
};

const checkUserIsExisted = async (ctx, next) => {
  // console.log("查询用户名是否存在")
  const { username } = ctx.request.body;
  const result = await userService.findUserByUsername(username);
  // console.log(result);
  // 返回一个数组，数组为空 没找到，数组不为空找到了
  // TODO 判断它有没有length，length 的长度。
  if (result?.length) {
    // found
    // console.log("用户名已存在于数据库")
    const error = new Error(errorType.USERNAME_IS_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }
  // console.log("用户名不存在")
  await next();
};

module.exports = {
  verifyParams,
  checkUserIsExisted
};
