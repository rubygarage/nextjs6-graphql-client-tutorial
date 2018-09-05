import React from 'react';
import Router, { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { GithubLogin } from '../../../components';

class Callback extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string,
    accessToken: PropTypes.string,
  };

  static defaultProps = {
    errorMessage: undefined,
    accessToken: undefined,
  };

  componentDidMount() {
    const { accessToken } = this.props;

    if (accessToken) {
      Cookies.set('access_token', accessToken);
      Router.push('/');
    }
  }

  static async getInitialProps({ query }) {
    const { serverRuntimeConfig: { GithubClientId, GithubClientSecret } } = getConfig();

    const bodyData = JSON.stringify({
      client_id: GithubClientId,
      client_secret: GithubClientSecret,
      code: query.code,
    });

    const res = await fetch('https://github.com/login/oauth/access_token', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: bodyData,
    });

    const json = await res.json();
    const errorMessage = json.error_description;
    return { errorMessage, accessToken: json.access_token };
  }

  render() {
    const { errorMessage } = this.props;

    if (errorMessage) {
      return (
        <GithubLogin error={errorMessage} />
      );
    }

    return <GithubLogin />;
  }
}

export default withRouter(Callback);
