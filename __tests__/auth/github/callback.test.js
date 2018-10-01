import React from 'react';
import renderer from 'react-test-renderer';
import Router from 'next/router';
import Callback from '../../../pages/auth/github/callback';

describe('Github Callback Page', () => {
  it('matches snapshot', () => {
    const mockedRouter = { push: () => {} };
    Router.router = mockedRouter;
    const component = renderer.create(<Callback accessToken="sag" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
