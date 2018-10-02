require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

module.exports = {
  serverRuntimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  publicRuntimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
  },
};
