const fs = require('fs');
const path = require('path');

// 输出为 ["index.js", "xxx.router.js"]
const files = fs.readdirSync(path.resolve(__dirname));
console.log(files)
const useRoutes = (app) => {
  files.forEach((file) => {
    if (file === 'index.js') {
      return;
    }

    const router = require(path.resolve(__dirname, file));
    app.use(router.routes());
    app.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
