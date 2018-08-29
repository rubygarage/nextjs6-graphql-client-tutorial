import React from 'react';
import { mount } from 'enzyme';
import { Home, SimpleCard } from '../..';

describe('Home', () => {
  it('renders component', () => {
    const wrapper = mount(
      <Home
        cards={[
          { title: '1', description: 'first' },
          { title: '2', description: 'second' },
        ]}
      />,
    );

    expect(wrapper.find(SimpleCard)).toHaveLength(2);
  });
});
