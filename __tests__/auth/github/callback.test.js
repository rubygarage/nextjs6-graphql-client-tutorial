import React from 'react';
import renderer from 'react-test-renderer';
import Callback from '../../../pages/auth/github/callback';

describe('Github Callback Page', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Callback />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
