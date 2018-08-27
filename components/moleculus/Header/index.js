import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  AppBar, IconButton,
  MenuIcon, Toolbar, Typography,
} from '../..';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Header = (props) => {
  const {
    classes, swipeableMenu, loginButton, title,
  } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {swipeableMenu}
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          {loginButton}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  swipeableMenu: PropTypes.node,
  loginButton: PropTypes.node,
  classes: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Header.defaultProps = {
  swipeableMenu: null,
  loginButton: null,
  title: null,
};

export default withStyles(styles)(Header);

// class Header extends React.Component {
//   state = {
//     leftMenuIsOpened: false,
//   };

//   static propTypes = {
//     classes: PropTypes.shape({}).isRequired,
//     loggedIn: PropTypes.bool.isRequired,
//     handleLogIn: PropTypes.func.isRequired,
//   };

//   toggleLeftMenuShow = leftMenuIsOpened => () => {
//     this.setState({
//       leftMenuIsOpened,
//     });
//   };

//   render() {
//     const {
//       props: {
//         classes,
//         loggedIn,
//         handleLogIn,
//       },
//       state: {
//         leftMenuIsOpened,
//       },
//       toggleLeftMenuShow,
//     } = this;

//     return (
//       <div className={classes.root}>
//         <AppBar position="static">
//           <SwipeableDrawer
//             open={leftMenuIsOpened}
//             onClose={toggleLeftMenuShow(false)}
//             onOpen={toggleLeftMenuShow(true)}
//           >
//             <SideBarMenu />
//           </SwipeableDrawer>
//           <Toolbar>
//             <IconButton onClick={toggleLeftMenuShow(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" className={classes.flex}>
//               News
//             </Typography>
//             {loggedIn && <Button onClick={handleLogIn} color="inherit">Login</Button>}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(Header);
