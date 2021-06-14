const Router = require('@koa/router');
const { verifyParams, checkUserIsExisted } = require('../middleware/user.middleware');
const { create } = require('../controller/user.controller');

const userRouter = new Router();

userRouter.post('/register', verifyParams, checkUserIsExisted, create);

module.exports = userRouter;
