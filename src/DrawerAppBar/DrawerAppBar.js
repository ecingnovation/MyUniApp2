import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from "@material-ui/icons/Mail";
import Fastfood from "@material-ui/icons/Fastfood";
import Place from "@material-ui/icons/Place";
import Assignment from "@material-ui/icons/Assignment";
import WebIcon from "@material-ui/icons/Web";
import HelpIcon from "@material-ui/icons/Help";
import MenuOutlined from "@material-ui/icons/MenuOutlined"
import AccountBox from "@material-ui/icons/AccountBox";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import "./DrawerAppBar.css";

class DrawerAppBar extends React.Component {

    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    
    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
    };

    render() {
        return (
            <div>
                <AppBar title="My App" position="relative">
                    <Toolbar>
                        <IconButton style={styles.menuButton} onClick={this.toggleDrawer('left', true)} >
                            <MenuOutlined />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="grow" >
                            MyUniApp
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                    {sideList}
                </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

const sideList = (
    <div>
        <List>
            <ListItem button key="user" >
                <ListItemIcon>
                    <AccountBox className="accountIcon" />
                </ListItemIcon>
                <ListItemText primary="Santiago Carrillo" secondary="santiago.carrillo@mail.com" />
            </ListItem>
            <Divider/>
            <ListItem button key="inbox">
                <ListItemIcon>
                    <Place/>
                </ListItemIcon>
                <ListItemText primary="Mapa"/>
            </ListItem>
            <ListItem button key="mail">
                <ListItemIcon>
                    <MailIcon/>
                </ListItemIcon>
                <ListItemText primary="Sitio" />
            </ListItem>
            <ListItem button key="mail">
                <ListItemIcon>
                    <Fastfood/>
                </ListItemIcon>
                <ListItemText primary="Kioskos" />
            </ListItem><ListItem button key="mail">
                <ListItemIcon>
                    <Assignment/>
                </ListItemIcon>
                <ListItemText primary="Eventos" />
            </ListItem>
            <ListItem button key="mail">
                <ListItemIcon>
                    <WebIcon/>
                </ListItemIcon>
                <ListItemText primary="Noticias" />
            </ListItem>
            <ListItem button key="mail">
                <ListItemIcon>
                    <HelpIcon/>
                </ListItemIcon>
                <ListItemText primary="Diligencias" />
            </ListItem>
        </List>
    </div>
);

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

export default DrawerAppBar;