import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../..';

storiesOf('atoms/Grid', module)
  .add('default', () => (
    <Grid>
      test
    </Grid>
  ));
