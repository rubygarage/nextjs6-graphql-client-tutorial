import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeaderWithSwipeableMenu } from 'components';

storiesOf('organisms/HeaderWithSwipeableMenu', module)
  .add('default with click event', () => (
    <HeaderWithSwipeableMenu />
  ))
  .add('opened by default', () => (
    <HeaderWithSwipeableMenu leftMenuIsOpened />
  ));
