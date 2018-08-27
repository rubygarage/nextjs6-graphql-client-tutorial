import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemText from '.';

storiesOf('atoms/ListItemText', module)
  .add('default', () => (
    <ListItemText primary="Default" />
  ));
