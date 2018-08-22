import React from 'react';
import { shallow } from 'enzyme';
import SwipeableDrawer from '.';

describe('SwipeableDrawer', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <SwipeableDrawer>
        <p>Lorem</p>
      </SwipeableDrawer>,
    );

    expect(wrapper.contains(<p>Lorem</p>)).toBe(true);
  });
});
