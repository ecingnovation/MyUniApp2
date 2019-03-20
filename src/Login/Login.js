import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./Login.css";
import logof from './../logof.jpg';
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          registry: '',
          
        };
    }
    
  handleRegistryChange = event => {
    this.setState({
        registry: event.target.value
            });
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <img src={logof} alt="logo" className="img"/> 
                        <Typography variant="h5">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="login-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                        <FormControl  margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Register</InputLabel>
                                <Select
                                            value={this.state.registry}
                                            onChange={this.handleRegistryChange}
                                            inputProps={{
                                              name: 'registry',
                                              id: 'text',
                                            }}
                                          >
                                            <MenuItem value="">
                                              <em>None</em>
                                            </MenuItem>
                                            <MenuItem containerElement={<Link to="../Register/RegisterTeacher" />} value={10}>Are you a Teacher? </MenuItem>
                                            <MenuItem value={20}>Are you a Student? </MenuItem>
                                            <MenuItem value={30}>Are you an Administrative? </MenuItem>
                                    

                                </Select>
                                            
                                      
                        </FormControl>


                        <br></br>
                        <a href="/app/register">Register</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}