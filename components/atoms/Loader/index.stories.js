import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from '../..';

storiesOf('atoms/Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('big size', () => (
    <Loader size={600} />
  ));
