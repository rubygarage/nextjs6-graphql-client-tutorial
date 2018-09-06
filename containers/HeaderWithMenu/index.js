import React from 'react';
import { Header, SwipeableMenu } from 'components';
import GithubLoginButton from 'containers/GithubLoginButton';

class HeaderWithMenu extends React.Component {
  state = {
    leftMenuIsOpened: false,
  };

  toggleLeftMenuShow = leftMenuIsOpened => () => {
    this.setState({
      leftMenuIsOpened,
    });
  };

  render() {
    const {
      state: {
        leftMenuIsOpened,
      },
      toggleLeftMenuShow,
    } = this;

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
        openMenu={toggleLeftMenuShow(true)}
        title="Home"
        swipeableMenu={(
          <SwipeableMenu
            isOpenedByDefault={leftMenuIsOpened}
            closeMenu={toggleLeftMenuShow(false)}
            openMenu={toggleLeftMenuShow(true)}
            menuItems={MENU_ITEMS}
          />
        )}
        loginButton={<GithubLoginButton />}
      />
    );
  }
}

export default HeaderWithMenu;
