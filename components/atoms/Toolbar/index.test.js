import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '.';

describe('Toolbar', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Toolbar><p>Test</p></Toolbar>);
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
  });
});
