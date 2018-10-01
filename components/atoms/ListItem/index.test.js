import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '.';

describe('ListItem', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <ListItem>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>Test</p>
      </ListItem>,
    );
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
    expect(wrapper.contains(<p>Ipsum</p>)).toBe(true);
    expect(wrapper.contains(<p>Lorem</p>)).toBe(true);
  });
});
