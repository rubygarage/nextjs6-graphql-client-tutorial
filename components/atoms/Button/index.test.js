import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.contains('Test')).toBe(true);
  });
});
