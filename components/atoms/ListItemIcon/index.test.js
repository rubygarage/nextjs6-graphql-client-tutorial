import React from 'react';
import { shallow } from 'enzyme';
import ListItemIcon from '.';

describe('ListItemIcon', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <ListItemIcon>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>Test</p>
      </ListItemIcon>,
    );
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
    expect(wrapper.contains(<p>Ipsum</p>)).toBe(true);
    expect(wrapper.contains(<p>Lorem</p>)).toBe(true);
  });
});
