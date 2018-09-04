import React from 'react';
import { storiesOf } from '@storybook/react';
import { GithubLoginButton } from '../..';

storiesOf('moleculus/GithubLoginButton', module)
  .add('default', () => (
    <GithubLoginButton>Login</GithubLoginButton>
  ));
