import React from 'react';
import { storiesOf } from '@storybook/react';
import { SideBarMenu } from '../..';

storiesOf('moleculus/SideBarMenu', module)
  .add('default', () => (
    <SideBarMenu menuItems={['First', 'Second', 'Third']} />
  ));
