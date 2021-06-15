const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const useRoutes = require('../router');
const errorHandler = require('./errorHandler');

const app = new Koa();

app.use(cors()).use(bodyParser());
useRoutes(app)

app.on("error", errorHandler);

module.exports = app;
