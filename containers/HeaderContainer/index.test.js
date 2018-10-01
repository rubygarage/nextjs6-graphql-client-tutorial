import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from 'containers/HeaderContainer';

describe('HeaderContainer', () => {
  it('renders component', () => {
    const wrapper = shallow(
      <HeaderContainer title="Home" />,
    );

    const header = wrapper.find('HeaderWithSwipeableMenu');
    expect(header).toHaveLength(1);
    expect(header.props().title).toEqual('Home');
    expect(header.props().loginButtonContainer).toBeDefined();
  });
});
