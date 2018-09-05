import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const Home = (props) => {
  const { header, footer, content } = props;

  return (
    <div>
      {header}
      <div style={{ padding: 12 }}>
        <Grid container spacing={24} style={{ padding: 24 }}>
          {content}
        </Grid>
      </div>
      {footer}
    </div>
  );
};

Home.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  footer: PropTypes.string,
};

Home.defaultProps = {
  header: null,
  content: null,
  footer: null,
};

export default (Home);
