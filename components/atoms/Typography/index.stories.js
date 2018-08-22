import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '.';

storiesOf('Typography', module)
  .add('default', () => (
    <Typography>
      Some random text
    </Typography>
  ));
