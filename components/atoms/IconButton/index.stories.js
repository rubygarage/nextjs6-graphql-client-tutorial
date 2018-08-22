import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconButton } from '../..';

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton>
      test
    </IconButton>
  ));
