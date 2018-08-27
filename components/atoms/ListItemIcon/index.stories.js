import React from 'react';
import { storiesOf } from '@storybook/react';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import { ListItemIcon } from '../..';

storiesOf('atoms/ListItemIcon', module)
  .add('star', () => (
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
  ))
  .add('send', () => (
    <ListItemIcon button>
      <SendIcon />
    </ListItemIcon>
  ))
  .add('mail', () => (
    <ListItemIcon button>
      <MailIcon />
    </ListItemIcon>
  ));
