import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeaderWithMenu } from '../..';

storiesOf('organisms/HeaderWithMenu', module)
  .add('default', () => (
    <HeaderWithMenu />
  ));
