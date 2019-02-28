import React, { Component } from 'react';
import './App.css';
import { Login } from './Login/Login';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PagesView } from "./PagesView/PagesView";
import logo from './logo.svg';
import Map from './ComponentsMap/MapWiev'
const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#B40404',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            //light: '#0066ff',
            main: '#81d4fa',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
    typography: {
        useNextVariants: true,
    },
});

const LoginView = () => (
    <Login/>
);

const PagesViewView = () => (
    <PagesView/>
);
const MapView = () => (
    <Map />
);


class App extends Component {
    render() {
        return (
            <div>
                
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <div>
                            <Route exact path="/app" component={LoginView}/>
                            <Route path="/register" component={PagesViewView}/>
                            <Route path="/map" component={MapView}/>
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;