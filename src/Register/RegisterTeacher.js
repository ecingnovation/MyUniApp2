import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";

export class RegisterTeacher extends React.Component{
    constructor(props){
        super(props);
        this.createAxiosInstance();
        this.state = {
            name : "",
            lastName : "",
            email : "",
            faculty : "",
            teachertype: "",
            phone : "",
            address : "",
            password : "",
            passwordConfirmation : ""
        };
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }
    
    handleFacultyChange = (event) => {
        this.setState({
            faculty: event.target.value
        });
    }
    
    handleTeacherTypeChange = (event) => {
        this.setState({
            teachertype: event.target.value
        });
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        });
    }

    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handlePasswordConfirmationChange = (event) => {
        this.setState({
            passwordConfirmation: event.target.value
        });
    }

    handleRegister = (event) => {
        event.preventDefault();
        axiosInstance.post("/users/createteacher", {
            name : this.state.name,
            lastName : this.state.lastName,
            faculty : this.state.faculty,
            teachertype : this.state.teachertype,
            email : this.state.email,
            phone : this.state.phone,
            address : this.state.address,
            password : this.state.password,

        }).then((response) => {
            this.setState({
                fireRedirect : true
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <AssignmentIcon className="registericon" color="secondary"/>
                        <Typography variant="h5">Registrarse como Profesor</Typography>
                        <form onSubmit={this.handleRegister}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Nombre</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    autoFocus
                                    onChange = {this.handleNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Apellido</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    onChange = {this.handleLastNameChange}
                                />
                            </FormControl>
                            <FormControl  margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Facultad</InputLabel>
                                <Select
                                    value={this.state.faculty}
                                    onChange={this.handleFacultyChange}
                                    inputProps={{
                                        name: "faculty",
                                        id: "faculty",
                                    }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ingeniería Civil </MenuItem>
                                    <MenuItem value={20}>Ingeniería de Sistemas</MenuItem>
                                    <MenuItem value={30}>Ingeniería Ambiental</MenuItem>
                                    <MenuItem value={40}>Ingeniería Biomédica </MenuItem>
                                    <MenuItem value={50}>Ingeniería Mecánica</MenuItem>
                                    <MenuItem value={60}>Ingeniería Electrónica</MenuItem>
                                    <MenuItem value={70}>Ingeniería Eléctrica</MenuItem>
                                    <MenuItem value={80}>Ingeniería Electrónica</MenuItem>
                                    <MenuItem value={90}>Ingeniería Industrial</MenuItem>
                                    <MenuItem value={100}>Economía</MenuItem>
                                    <MenuItem value={110}>Administración de Empresas</MenuItem>
                                    <MenuItem value={120}>Matemáticas</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Correo Electrónico</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    onChange = {this.handleEmailChange}
                                />
                            </FormControl>
                            <FormControl  margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Tipo de Profesor</InputLabel>
                                <Select
                                    value={this.state.teachertype}
                                    onChange={this.handleteachertypeChange}
                                    inputProps={{
                                        name: "teachertype",
                                        id: "teachertype",
                                        }}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                    <MenuItem value={10}>Cátedra</MenuItem>
                                    <MenuItem value={20}>Planta</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Teléfono</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    onChange = {this.handlePhoneChange}
                                />
                            </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="number">Dirección</InputLabel>
                                    <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        onChange = {this.handleAddressChange}
                                    />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirmar Constraseña</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordConfirmationChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"                               
                            >
                                Completar Registro
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    createAxiosInstance() {
        var token = localStorage.getItem("token");
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ token}
        });
    }
}

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;
