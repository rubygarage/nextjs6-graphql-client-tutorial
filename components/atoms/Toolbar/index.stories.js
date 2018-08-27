import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toolbar } from '../..';

storiesOf('atoms/Toolbar', module)
  .add('default', () => (
    <Toolbar>
      <h3>tool 1</h3>
      <p>tool 2</p>
      <p>tool 3</p>
    </Toolbar>
  ));
