import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from '../..';

storiesOf('List', module)
  .add('default', () => (
    <List>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
    </List>
  ));
