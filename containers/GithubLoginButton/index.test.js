import React from 'react';
import { shallow } from 'enzyme';
import GithubLoginButton from 'containers/GithubLoginButton';

jest.mock('next/config', () => () => ({ publicRuntimeConfig: { GithubClientId: '123' } }));

jest.mock('next/router', () => (
  { push: () => ({}) }
));

describe('GithubLoginButton', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(<GithubLoginButton>Test</GithubLoginButton>);
    expect(wrapper.contains('Test')).toBe(true);
  });

  it('calls SignIn handler', () => {
    const wrapper = shallow(<GithubLoginButton>Test</GithubLoginButton>);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleSignIn');
    instance.forceUpdate();
    wrapper.find('Button').simulate('click');
    expect(instance.handleSignIn).toHaveBeenCalled();
  });
});
