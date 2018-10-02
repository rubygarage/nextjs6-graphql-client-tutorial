import React from 'react';
import Router from 'next/router';
import { Query } from 'react-apollo';
import { Button, Loader } from 'components';
import getConfig from 'next/config';
import Cookies from 'js-cookie';
import viewer from 'graphql/queries/viewer';

class GithubLoginButtonContainer extends React.Component {
  handleSignIn = () => {
    const { publicRuntimeConfig: { githubClientId } } = getConfig();

    Router.push({
      pathname: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: githubClientId,
      },
    });
  };

  handleSignOut = () => {
    Cookies.remove('access_token');
    Router.push('/');
  };

  render() {
    const { handleSignIn, handleSignOut } = this;

    return (
      <Query query={viewer}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loader color="secondary" />;
          }
          if (error) {
            return (
              <Button color="secondary" onClick={handleSignIn}>
                Sign In
              </Button>
            );
          }
          return (
            <React.Fragment>
              {data.viewer.login}
              <Button color="secondary" onClick={handleSignOut}>
                Sign Out
              </Button>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default GithubLoginButtonContainer;
