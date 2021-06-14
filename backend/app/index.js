const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const useRoutes = require('../router');
const errorHandler = require('./errorHandler');
const app = new Koa();
const router = new Router();

app.use(bodyParser())
useRoutes(app)

app.on("error", errorHandler);

module.exports = app;
