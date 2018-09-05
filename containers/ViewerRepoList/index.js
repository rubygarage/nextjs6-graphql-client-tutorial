import React from 'react';
import { SimpleCard } from 'components';
import { Grid } from '@material-ui/core';
import { Query } from 'react-apollo';
import viewerLast100Repositories from 'graphql/queries/viewerLast100Repositories';

class ViewerRepoList extends React.Component {
  render() {
    return (
      <Query query={viewerLast100Repositories}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div>
                <Grid item xs={6} sm={4} lg={3} xl={2}>
                  Loading
                </Grid>
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
    );
  }
}

export default ViewerRepoList;
