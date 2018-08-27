import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconButton } from '../..';

storiesOf('atoms/IconButton', module)
  .add('default', () => (
    <IconButton>
      test
    </IconButton>
  ));
