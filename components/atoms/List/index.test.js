import React from 'react';
import { shallow } from 'enzyme';
import List from '.';

describe('List', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <List>
        <p>Lorem</p>
        <p>Ipsum</p>
        <p>Test</p>
      </List>,
    );
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
    expect(wrapper.contains(<p>Ipsum</p>)).toBe(true);
    expect(wrapper.contains(<p>Lorem</p>)).toBe(true);
  });
});
