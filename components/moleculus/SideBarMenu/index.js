import React from 'react';
import PropTypes from 'prop-types';

import {
  List, ListItem, ListItemText,
} from '../..';

const SideBarMenu = (props) => {
  const { menuItems } = props;

  return (
    <List>
      {menuItems.map(item => (
        <ListItem key={item} button>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

SideBarMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideBarMenu;
