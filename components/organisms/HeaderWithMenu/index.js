import React from 'react';
import { Header, SwipeableMenu, GithubLoginButton } from '../..';

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

    return (
      <Header
        openMenu={toggleLeftMenuShow(true)}
        title="Home"
        swipeableMenu={(
          <SwipeableMenu
            isOpenedByDefault={leftMenuIsOpened}
            closeMenu={toggleLeftMenuShow(false)}
            openMenu={toggleLeftMenuShow(true)}
            menuItems={['Trending this month', 'Ruby repos']}
          />
        )}
        loginButton={(
          <GithubLoginButton>Login</GithubLoginButton>
        )}
      />
    );
  }
}

export default HeaderWithMenu;
