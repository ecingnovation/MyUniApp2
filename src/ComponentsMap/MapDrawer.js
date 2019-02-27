import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Map from './Map.js'
import InterestPoint from './InterestPoint.js'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class PermanentDrawerRight extends React.Component {


  state = {
          mobileOpen: false,
      };
  constructor(props) {
              super(props);
              this.state = {pointsList: ['Bloque A','Bloque B','Bloque C'], currentCard: InterestPoint};
              this.getPoints = this.getPoints.bind(this);
              this.setState({currentCard: <InterestPoint  description={'sdfs'} title={'sfdsf'} image={'dss'} /> });

          }
  getPoints(query) {


      }
  render(){
    const { classes } = this.props;

      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Interest Points
              </Typography>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography paragraph>
              <this.state.currentCard />
            </Typography>
            <Map />
          </main>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="right"
          >
            <div className={classes.toolbar} />
            <Divider />
            <List>
              {this.state.pointsList.map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
        </div>
      );


  }
}

PermanentDrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerRight);