const errorType = require('../constants/error-type');

const errorHandler = (error, ctx) => {
  // console.log("错误处理", error)
  let status, message;
  switch (error.message) {
    case errorType.USERNAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // 参数错误
      message = '用户名和密码不能为空';
      break;
    case errorType.USERNAME_IS_ALREADY_EXISTS:
      status = 409; // 冲突
      message = '用户名已存在';
      break
    default:
      status = 404; // 未知错误
      message = error.message;
  }
  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
