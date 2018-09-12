import React from 'react';
import PropTypes from 'prop-types';
import { Header, SwipeableMenu } from 'components';

const HeaderWithSwipeableMenu = (props) => {
  const {
    closeMenu, openMenu, loginButtonContainer, leftMenuIsOpened, title,
  } = props;

  const MENU_ITEMS = [
    {
      id: 1,
      url: '/',
      text: 'Home',
    },
    {
      id: 2,
      url: '/top_ruby',
      text: 'Top Ruby Repositories',
    },
    {
      id: 3,
      url: '/top_js',
      text: 'Top Javascript Repositories',
    },
    {
      id: 4,
      url: '/new_js',
      text: 'New Javascript Repositories',
    },
  ];

  return (
    <Header
      openMenu={openMenu}
      title={title}
      swipeableMenu={(
        <SwipeableMenu
          isOpenedByDefault={leftMenuIsOpened}
          closeMenu={closeMenu}
          openMenu={openMenu}
          menuItems={MENU_ITEMS}
        />
      )}
      loginButton={loginButtonContainer}
    />
  );
};

HeaderWithSwipeableMenu.propTypes = {
  title: PropTypes.string,
  leftMenuIsOpened: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  loginButtonContainer: PropTypes.node.isRequired,
};

HeaderWithSwipeableMenu.defaultProps = {
  title: 'Home',
};

export default HeaderWithSwipeableMenu;
