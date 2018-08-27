import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '.';

storiesOf('atoms/Typography', module)
  .add('default', () => (
    <Typography>
      Some random text
    </Typography>
  ));
