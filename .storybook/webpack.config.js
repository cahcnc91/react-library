const { resolve } = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias['~'] = resolve(__dirname, '..', 'src/');

  return config;
};
