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
import axios from "axios";


export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {username: "", password: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post("https://myuniapp-back.herokuapp.com/accounts/login",
            {
                username: this.state.username,
                password: this.state.password
            }).then((response) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem('username', response.data.user.id);
                localStorage.setItem('password', response.data.user.password);
            }).catch (function (error) {
               console.log(error);
               alert("Wrong credentials");
        });

    }

    handleUserChange(e){
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e){
        this.setState({password: e.target.value});
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
                                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleUserChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
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
                        <br></br>
                        <a href="/app/register">Register</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}