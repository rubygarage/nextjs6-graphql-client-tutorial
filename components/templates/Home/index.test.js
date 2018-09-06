import React from 'react';
import { mount } from 'enzyme';
import { Home, SimpleCard } from '../..';

describe('Home', () => {
  it('renders component with passed card components', () => {
    const wrapper = mount(
      <Home
        content={[
          <SimpleCard description="desc" title="title1" key={1} />,
          <SimpleCard description="desc" title="title2" key={2} />,
        ]}
      />,
    );

    expect(wrapper.find(SimpleCard)).toHaveLength(2);
  });
});
