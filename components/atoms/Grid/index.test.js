import React from 'react';
import { shallow } from 'enzyme';
import Grid from '.';

describe('Grid', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Grid><p>Test</p></Grid>);
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
  });
});
