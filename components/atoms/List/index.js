import React from 'react';
import PropTypes from 'prop-types';
import { List as MaterialList } from '@material-ui/core';

const List = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialList {...defaultProps}>
      {children}
    </MaterialList>
  );
};

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default List;
