import React from 'react';
import { HeaderWithSwipeableMenu } from 'components';
import GithubLoginButtonContainer from 'containers/GithubLoginButtonContainer';

class HeaderContainer extends React.Component {
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
      <HeaderWithSwipeableMenu
        leftMenuIsOpened={leftMenuIsOpened}
        openMenu={toggleLeftMenuShow(true)}
        closeMenu={toggleLeftMenuShow(false)}
        loginButtonContainer={<GithubLoginButtonContainer />}
      />
    );
  }
}

export default HeaderContainer;
