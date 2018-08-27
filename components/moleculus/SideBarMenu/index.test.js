import React from 'react';
import { shallow } from 'enzyme';
import SideBarMenu from '.';
import { ListItem, ListItemText } from '../..';

describe('SideBarMenu', () => {
  it('renders correct menu items using array of strings as props', () => {
    const wrapper = shallow(<SideBarMenu menuItems={['foo', 'bar', 'baz']} />);
    expect(wrapper.find(ListItem)).toHaveLength(3);

    const props = wrapper.find(ListItemText).map(node => node.props().primary);

    expect(props).toEqual(['foo', 'bar', 'baz']);
  });
});
