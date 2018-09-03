import React from 'react';
import getConfig from 'next/config';
import { GithubLogin } from '../../../components';

class Login extends React.Component {
  static async getInitialProps({ res }) {
    const { serverRuntimeConfig: { GithubClientId } } = getConfig();

    if (res) {
      res.writeHead(302, {
        Location: `https://github.com/login/oauth/authorize?client_id=${GithubClientId}`,
      });
      res.end();
    }

    return {};
  }

  render() {
    return null;
  }
}

export default Login;
