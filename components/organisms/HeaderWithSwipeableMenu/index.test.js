import React from 'react';
import { mount } from 'enzyme';
import { HeaderWithSwipeableMenu } from 'components';

describe('HeaderWithSwipeableMenu', () => {
  it('renders header with swipeable menu', () => {
    const mockedOpenMenu = jest.fn();
    const mockedCloseMenu = jest.fn();

    const wrapper = mount(
      <HeaderWithSwipeableMenu
        leftMenuIsOpened
        openMenu={mockedOpenMenu}
        closeMenu={mockedCloseMenu}
        loginButtonContainer={<React.Fragment />}
      />,
    );

    const expectedMenuItems = [
      'Top Javascript Repositories',
      'Home',
      'Top Ruby Repositories',
      'New Javascript Repositories',
    ];

    wrapper.find('ListItemText').find('Typography').forEach((node) => {
      expect(expectedMenuItems).toContain(node.text());
    });

    wrapper.find('button').simulate('click');
    expect(mockedOpenMenu).toHaveBeenCalled();
  });
});
