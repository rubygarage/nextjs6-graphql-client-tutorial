import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { HeaderWithMenu, Loader } from '../..';

const GithubLogin = ({ error }) => (
  <div>
    <HeaderWithMenu />
    <div style={{ padding: 12 }}>
      <Grid direction="row" justify="center" container spacing={24} style={{ padding: 24 }}>
        {error ? (
          <p>{error}</p>
        ) : (
          <Loader size={500} />
        )}
      </Grid>
    </div>
  </div>
);

GithubLogin.propTypes = {
  error: PropTypes.string,
};

GithubLogin.defaultProps = {
  error: undefined,
};

export default GithubLogin;
