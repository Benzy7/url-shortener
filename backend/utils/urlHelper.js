const { URL } = require('url');

const isValidkUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = { isValidkUrl };