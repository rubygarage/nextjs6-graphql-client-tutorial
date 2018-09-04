import React from 'react';
import Router from 'next/router';
import getConfig from 'next/config';
import PropTypes from 'prop-types';
import { Button } from '../..';

class GithubLoginButton extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  handleSignIn = () => {
    const { publicRuntimeConfig: { GithubClientId } } = getConfig();

    Router.push({
      pathname: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: GithubClientId,
      },
    });
  };

  render() {
    const { props: { children }, handleSignIn } = this;

    return (
      <Button color="secondary" onClick={handleSignIn}>
        { children }
      </Button>
    );
  }
}

export default GithubLoginButton;
