import React from 'react';
import { shallow } from 'enzyme';
import ListItemText from '.';

describe('ListItemText', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <ListItemText>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>Test</p>
      </ListItemText>,
    );
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
    expect(wrapper.contains(<p>Ipsum</p>)).toBe(true);
    expect(wrapper.contains(<p>Lorem</p>)).toBe(true);
  });
});
