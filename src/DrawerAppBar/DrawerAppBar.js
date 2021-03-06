import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Fastfood from "@material-ui/icons/Fastfood";
import Place from "@material-ui/icons/Place";
import WebIcon from "@material-ui/icons/Web";
import MenuOutlined from "@material-ui/icons/MenuOutlined";
import AccountBox from "@material-ui/icons/AccountBox";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
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

    handleLogout = () => {
        console.log("Logged Out");
        localStorage.setItem("token", "undefined");
        localStorage.removeItem("userName");
        localStorage.removeItem("userMail");
        this.setState({
            logout : true
        });
    };

    render() {
        var sideList = (
            <div>
                <List>
                    <ListItem button key="user" >
                        <ListItemIcon>
                            <AccountBox className="accountIcon" />
                        </ListItemIcon>
                        <ListItemText primary={localStorage.getItem("userName")} secondary={localStorage.getItem("userMail")} />
                    </ListItem>
                    <Divider/>
                    <ListItem button key="map" component={Link} to="/app/map" >
                        <ListItemIcon>
                            <Place/>
                        </ListItemIcon>
                        <ListItemText primary="Mapa"/>
                    </ListItem>
                    <ListItem button key="news" component={Link} to="/app/news" >
                        <ListItemIcon>
                            <WebIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Noticias" />
                    </ListItem>
                    <ListItem button key="postnew" component={Link} to="/app/postnew" >
                        <ListItemIcon>
                            <WebIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Publicar Noticia" />
                    </ListItem>
                    <ListItem button key="kioskos" component={Link} to="/app/kioskos">
                        <ListItemIcon>
                            <Fastfood/>
                        </ListItemIcon>
                        <ListItemText primary="Kioskos" />
                    </ListItem>
                    <ListItem button key="postProducto" component={Link} to="/app/postKiosko" >
                        <ListItemIcon>
                            <Fastfood/>
                        </ListItemIcon>
                        <ListItemText primary="Publicar Producto" />
                    </ListItem>
                    <ListItem button key="diligence" component={Link} to="/app/diligence">
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Procesos" />
                    </ListItem>
                </List>
            </div>
        );
        if (this.state.logout === true) {
            return (<Redirect to="/"/>);
        }
        return (
            <div>
                <AppBar title="My App" position="relative">
                    <Toolbar>
                        <IconButton style={styles.menuButton} onClick={this.toggleDrawer("left", true)} >
                            <MenuOutlined />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className="grow" >
                            MyUniApp
                        </Typography>
                        <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer("left", false)}
                    onOpen={this.toggleDrawer("left", true)}
                >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer("left", false)}
                    onKeyDown={this.toggleDrawer("left", false)}
                >
                    {sideList}
                </div>
                </SwipeableDrawer>
            </div>
        );
    }
}

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