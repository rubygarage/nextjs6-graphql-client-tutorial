import React from 'react';
import PropTypes from 'prop-types';

import {
  List, ListItem, ListItemText, SwipeableDrawer,
} from '../..';

const SwipeableMenu = (props) => {
  const {
    menuItems, openMenu, closeMenu, isOpenedByDefault,
  } = props;

  return (
    <SwipeableDrawer
      open={isOpenedByDefault}
      onClose={openMenu}
      onOpen={closeMenu}
    >
      <List>
        {menuItems.map(item => (
          <ListItem key={item} button>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

SwipeableMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isOpenedByDefault: PropTypes.bool,
};

SwipeableMenu.defaultProps = {
  isOpenedByDefault: false
};

export default SwipeableMenu;
