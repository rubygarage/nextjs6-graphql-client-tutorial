import React from 'react';
import { shallow } from 'enzyme';
import Typography from '.';

describe('Typography', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Typography>Test</Typography>);
    expect(wrapper.contains('Test')).toBe(true);
  });
});
