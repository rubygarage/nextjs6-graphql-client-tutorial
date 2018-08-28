import React from 'react';
import { mount } from 'enzyme';
import { Header, Typography } from '../..';

describe('Header', () => {
  it('renders header with correct title', () => {
    const wrapper = mount(<Header title="foo" />);
    const typographyNode = wrapper.find(Typography);

    expect(typographyNode.text()).toEqual('foo');
  });
});
