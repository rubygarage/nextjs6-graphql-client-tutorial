import React from 'react';
import { storiesOf } from '@storybook/react';
import { SwipeableDrawer } from '../..';

storiesOf('atoms/SwipeableDrawer', module)
  .add('default', () => (
    <SwipeableDrawer open>
      Default
    </SwipeableDrawer>
  ))
  .add('top', () => (
    <SwipeableDrawer anchor="top" open>
      Top
    </SwipeableDrawer>
  ))
  .add('right', () => (
    <SwipeableDrawer anchor="right" open>
      Right
    </SwipeableDrawer>
  ))
  .add('bottom', () => (
    <SwipeableDrawer anchor="bottom" open>
      Bottom
    </SwipeableDrawer>
  ));
