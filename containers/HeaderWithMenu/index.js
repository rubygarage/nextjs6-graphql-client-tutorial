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
        loginButton={<GithubLoginButton>Login</GithubLoginButton>}
      />
    );
  }
}

export default HeaderWithMenu;
