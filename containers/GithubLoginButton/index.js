import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Button } from 'components';
import viewer from 'graphql/queries/viewer';

class GithubLoginButton extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  handleSignIn = () => {
    Router.push({
      pathname: 'https://github.com/login/oauth/authorize',
      query: {
        client_id: process.env.GITHUB_CLIENT_ID,
      },
    });
  };

  render() {
    const { props: { children }, handleSignIn } = this;

    return (
      <Query query={viewer}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div>
                Loading
              </div>
            );
          }
          if (error) {
            return (
              <Button color="secondary" onClick={handleSignIn}>
                { children }
              </Button>
            );
          }
          return (
            <>
              {data.viewer.login}
            </>
          );
        }}
      </Query>
    );
  }
}

export default GithubLoginButton;
