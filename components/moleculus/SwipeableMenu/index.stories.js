import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwipeableMenu } from '../..';

storiesOf('moleculus/SwipeableMenu', module)
  .add('opened by default', () => (
    <SwipeableMenu isOpenedByDefault menuItems={['First', 'Second', 'Third']} />
  ));
