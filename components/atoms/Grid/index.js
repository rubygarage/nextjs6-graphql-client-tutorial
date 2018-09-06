import React from 'react';
import PropTypes from 'prop-types';
import { Grid as MaterialGrid } from '@material-ui/core';

const Grid = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGrid {...defaultProps}>
      {children}
    </MaterialGrid>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
