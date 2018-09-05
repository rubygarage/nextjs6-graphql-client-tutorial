import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import {
  HeaderWithMenu, SimpleCard,
} from '../..';

const styles = {
  container: {
    'overflow-x': 'hidden',
  },
};

class Home extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  };

  static defaultProps = {
    cards: [],
  };

  render() {
    const { props: { cards } } = this;

    const GET_VIEWER = gql`
      {
        viewer {
          login,
          avatarUrl
        }
      }
    `;

    const GET_REPOSITORIES = gql`
      {
        viewer {
          repositories(last:100) {
            edges {
              node {
                id
                name
                description
              }
            }
          }
        }
      }
    `;

    return (
      <div>
        <HeaderWithMenu />
        <div style={{ padding: 12 }}>
          <Grid container spacing={24} style={{ padding: 24 }}>
            <Query query={GET_REPOSITORIES}>
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <div>
                      loading
                    </div>
                  );
                }
                if (error) {
                  return (
                    <div>
                      Sign In Using github
                    </div>
                  );
                }
                return (
                  <>
                    {data.viewer.repositories.edges.map(repo => (
                      <Grid key={repo.node.id} item xs={6} sm={4} lg={3} xl={2}>
                        <SimpleCard
                          title={repo.node.name}
                          description={repo.node.description}
                        />
                      </Grid>
                    ))}
                  </>
                );
              }}
            </Query>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
