
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
;

const theme = createMuiTheme({
    palette: {
      primary: { main: "#89c34b" },
    },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
      }
  });

export class RegisterType extends React.Component{
    constructor(props){
      super(props);
      
    }

     render(){
        return (
            <React.Fragment>
              
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <AssignmentIcon />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                
                    </Paper>
                </main>
                <br/><br/><br/><br/><br/><br/>
            </React.Fragment>


        );
    }

}
