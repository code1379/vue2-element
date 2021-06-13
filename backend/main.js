// 引入配置
const config = require('./app/config');
// 引入 app
const app = require('./app');

app.listen(config.APP_PORT);
