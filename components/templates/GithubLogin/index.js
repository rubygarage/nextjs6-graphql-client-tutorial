import React from 'react';
import { Grid } from '@material-ui/core';
import { HeaderWithMenu, Loader } from '../..';

const GithubLogin = () => (
  <div>
    <HeaderWithMenu />
    <div style={{ padding: 12 }}>
      <Grid direction="row" justify="center" container spacing={24} style={{ padding: 24 }}>
        <Loader size={500} />
      </Grid>
    </div>
  </div>
);

export default GithubLogin;
