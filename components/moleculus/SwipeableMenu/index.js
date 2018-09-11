import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

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
      onClose={closeMenu}
      onOpen={openMenu}
    >
      <List>
        {menuItems.map(item => (
          <Link key={item.id} href={item.url}>
            <ListItem button>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

SwipeableMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isOpenedByDefault: PropTypes.bool,
};

SwipeableMenu.defaultProps = {
  isOpenedByDefault: false,
};

export default SwipeableMenu;
