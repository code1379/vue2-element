# 项目目录结构

```bash
main.js 入口文件

/app
  - index.js (Koa App生成)
  - config.js (dotenv 读取 .env 文件)
  - database.js (mysql2 连接数据库)
  - errorHandler.js (错误处理)
/constants
  - errorType.js (错误类型，当 middleware中出现错误时，使用 ctx.app.emit("error", new Error(errorType.xxx), ctx) 将错误传递到 app/index.js 中)
/utils
  - getEncryptedPassword.js (密码加密，加密后的密码存储到数据库)
/middleware (中间件，每一个都是一个函数)
  - user.middleware.js (用户相关中间件，参数校验，用户验证啊)
  - auth.middleware.js (用户权限校验)
/controller (是一个类，都相当于最后一个中间件)
  - user.controller.js (中间件处理完之后，最后处理逻辑的控制器，在它里面调用数据库 xxx.service.js)
/service (是一个类，相当于数据库操作，增删改查)
  - user.service.js (controller 中的逻辑需要调用 service 的增删改查)
/router (路由逻辑)
  - index.js (引入所有的子路由)
  - user.router.js (注册)
  - auth.router.js (登录)
```
