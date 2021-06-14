const crypto = require('crypto');

const getEncryptedPassword = (pwd) => {
  const hash = crypto.createHash('md5');
  hash.update(pwd);
  return hash.digest('base64');
};

module.exports = getEncryptedPassword;
