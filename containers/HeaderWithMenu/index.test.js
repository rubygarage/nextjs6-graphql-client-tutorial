import React from 'react';
import { shallow } from 'enzyme';
import HeaderWithMenu from 'containers/HeaderWithMenu';

describe('HeaderWithMenu', () => {
  it('renders component', () => {
    const wrapper = shallow(
      <HeaderWithMenu />,
    );

    const header = wrapper.find('Header');
    expect(header).toHaveLength(1);
    expect(header.props().title).toEqual('Home');
    expect(header.props().swipeableMenu).toBeDefined();
  });
});
