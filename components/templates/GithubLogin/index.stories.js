import React from 'react';
import { storiesOf } from '@storybook/react';
import { GithubLogin } from '../..';

storiesOf('templates/GithubLogin', module)
  .add('default', () => (
    <GithubLogin />
  ));
