import React from 'react';
import PropTypes from 'prop-types';
import {
  SimpleCard, Loader, Grid, Typography,
} from 'components';
import { Query } from 'react-apollo';

const SearchRepoList = ({ query }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Grid direction="row" justify="center" container spacing={24} style={{ padding: 24 }}>
            <Loader size={300} />
          </Grid>
        );
      }
      if (error) {
        return (
          <Grid direction="row" justify="center" container spacing={24} style={{ padding: 24 }}>
            <Typography variant="headline">Please Sign In to fetch data</Typography>
          </Grid>
        );
      }
      return (
        <React.Fragment>
          {data.search.edges.map(repo => (
            <Grid key={repo.node.name} item xs={6} sm={4} lg={3} xl={2}>
              <SimpleCard
                title={repo.node.name}
                description={repo.node.description}
                url={repo.node.url}
              />
            </Grid>
          ))}
        </React.Fragment>
      );
    }}
  </Query>
);

SearchRepoList.propTypes = {
  query: PropTypes.node.isRequired,
};

export default SearchRepoList;
