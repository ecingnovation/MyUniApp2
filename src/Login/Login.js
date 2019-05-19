import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import logof from "./../logof.jpg";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            fireRedirect : false
        };
        console.log("Currently using API: " + apiURL);
    }

    render() {
        if (this.state.fireRedirect === true) {
            return (<Redirect to="/app/map"/>);
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <img src={logof} alt="logo" className="img"/> 
                        <Typography variant="h5">Acceder</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="login-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Dirección de correo</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
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
                                Acceder
                            </Button>
                        </form>
                        <br></br>
                        <a href="/register">Registrarse</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        var useremail = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        axios.post(apiURL + "/accounts/login", {
            id: useremail,
            password
        }).then((response) => {
            localStorage.setItem("token", response.data.accessToken);
            this.createAxiosInstance(response.data.accessToken);
            this.getBasicUserInfoAndRedirect(useremail);
        }).catch((error) => {
            console.log(error);
        });
    }

    createAxiosInstance(token) {
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {"Authorization": "Bearer " + token}
        });
    }

    getBasicUserInfoAndRedirect(mail) {
        axiosInstance.get("/users/private/" + mail).then((response) => {
            localStorage.setItem("userName", response.data.name + " " + response.data.lastName);
            localStorage.setItem("userMail", response.data.email);
            this.setState({
                fireRedirect: true
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;