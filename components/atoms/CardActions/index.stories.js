import React from 'react';
import { storiesOf } from '@storybook/react';
import { CardActions, Button } from '../..';

storiesOf('atoms/CardActions', module)
  .add('with button', () => (
    <CardActions>
      <Button>Button</Button>
      <Button>Button</Button>
    </CardActions>
  ));
