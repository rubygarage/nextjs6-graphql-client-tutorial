import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../pages/auth/github/login';

describe('Github Login Page', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Login />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
