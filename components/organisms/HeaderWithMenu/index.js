import React from 'react';
import { Header, SwipeableMenu } from '../..';

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
            menuItems={['Trending']}
          />
        )}
      />
    );
  }
}

export default HeaderWithMenu;
