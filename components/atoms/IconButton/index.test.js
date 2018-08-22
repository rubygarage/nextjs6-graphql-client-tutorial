import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '.';

describe('IconButton', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<IconButton><p>Test</p></IconButton>);
    expect(wrapper.contains(<p>Test</p>)).toBe(true);
  });
});
