import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as MaterialIconButton } from '@material-ui/core';

const IconButton = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialIconButton {...defaultProps}>
      {children}
    </MaterialIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default IconButton;
