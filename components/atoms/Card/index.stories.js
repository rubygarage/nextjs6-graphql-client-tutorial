import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../..';

storiesOf('atoms/Card', module)
  .add('default', () => (
    <Card>
      <p>Title</p>
      <p>Default</p>
    </Card>
  ));
