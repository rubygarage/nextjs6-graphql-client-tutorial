import React from 'react';
import { storiesOf } from '@storybook/react';
import { CardContent } from '../..';

storiesOf('atoms/CardContent', module)
  .add('default', () => (
    <CardContent>
      <p>Lorem</p>
      <p>Lorem Ipsum</p>
    </CardContent>
  ));
