import React from 'react';
import { shallow } from 'enzyme';
import SideBarMenu from '.';
import { ListItem, ListItemText, SwipeableDrawer } from '../..';

describe('SideBarMenu', () => {
  it('renders correct menu items using array of strings as props', () => {
    const mockedOpenMenu = jest.fn();
    mockedOpenMenu.mockReturnValueOnce(true);

    const mockedCloseMenu = jest.fn();
    mockedCloseMenu.mockReturnValueOnce(true);

    const wrapper = shallow(
      <SideBarMenu
        menuItems={['foo', 'bar', 'baz']}
        openMenu={mockedOpenMenu}
        closeMenu={mockedCloseMenu}
      />,
    );

    expect(wrapper.find(ListItem)).toHaveLength(3);

    const swipeableDrawer = wrapper.find(SwipeableDrawer);
    expect(swipeableDrawer.props().onClose()).toEqual(true);
    expect(swipeableDrawer.props().onOpen()).toEqual(true);

    const props = wrapper.find(ListItemText).map(node => node.props().primary);
    expect(props).toEqual(['foo', 'bar', 'baz']);
  });
});
