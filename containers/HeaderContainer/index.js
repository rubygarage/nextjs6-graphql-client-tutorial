import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWithSwipeableMenu } from 'components';
import GithubLoginButtonContainer from 'containers/GithubLoginButtonContainer';

class HeaderContainer extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

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
      props: {
        title,
      },
      toggleLeftMenuShow,
    } = this;

    return (
      <HeaderWithSwipeableMenu
        title={title}
        leftMenuIsOpened={leftMenuIsOpened}
        openMenu={toggleLeftMenuShow(true)}
        closeMenu={toggleLeftMenuShow(false)}
        loginButtonContainer={<GithubLoginButtonContainer />}
      />
    );
  }
}

export default HeaderContainer;
