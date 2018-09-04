import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import {
  HeaderWithMenu, SimpleCard,
} from '../..';

const styles = {
  container: {
    'overflow-x': 'hidden',
  },
};

class Home extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
  };

  static defaultProps = {
    cards: [],
  };

  render() {
    const { props: { cards } } = this;

    return (
      <div>
        <HeaderWithMenu />
        <div style={{ padding: 12 }}>
          <Grid container spacing={24} style={{ padding: 24 }}>
            {cards.map(card => (
              <Grid key={card.title} item xs={6} sm={4} lg={3} xl={2}>
                <SimpleCard
                  title={card.title}
                  description={card.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
