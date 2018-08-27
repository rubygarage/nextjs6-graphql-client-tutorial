import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText as MaterialListItemText } from '@material-ui/core';

const ListItemText = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItemText {...defaultProps}>
      {children}
    </MaterialListItemText>
  );
};

ListItemText.propTypes = {
  children: PropTypes.node,
};

ListItemText.defaultProps = {
  children: null,
};

export default ListItemText;
