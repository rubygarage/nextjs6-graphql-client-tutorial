import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem } from '../..';

storiesOf('atoms/ListItem', module)
  .add('default', () => (
    <ListItem>
      test
    </ListItem>
  ))
  .add('button', () => (
    <ListItem button>
      test
    </ListItem>
  ));
