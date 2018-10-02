require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    const newConfig = { ...config };
    newConfig.plugins = newConfig.plugins || [];

    newConfig.plugins = [
      ...newConfig.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return newConfig;
  },
};
