import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../pages';

describe('Home Page', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
