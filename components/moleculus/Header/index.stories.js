import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../..';

storiesOf('moleculus/Header', module)
  .add('default', () => (
    <Header />
  ))
  .add('with title', () => (
    <Header title="Home" />
  ));
