import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

export class RegisterStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            lastName : '',
            faculty : '',
            semester : '', 
            email : '',
            phone : '',
            password : '',
            passwordConfirmation : ''
        };
        this.handleRegister = this.handleRegister.bind(this);
        }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    
    handleFacultyChange = event => {
        this.setState({
            faculty: event.target.value
        });
    }
    
    handleSemesterChange = event => {
        this.setState({
            semester: event.target.value
        });
    }
    
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        });
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handlePasswordConfirmationChange = event => {
        this.setState({
            passwordConfirmation: event.target.value
        });
    }

    handleRegister = (event) => {
    }
  
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <AssignmentIcon className="registericon" color="secondary"/>
                        <Typography variant="headline">Registrarse como Estudiante</Typography>
                        <form className="form" onSubmit={this.handleRegister}>
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
                                <InputLabel htmlFor="text">Facultad</InputLabel>
                                <Select
                                    value={this.state.faculty}
                                    onChange={this.handleFacultyChange}
                                    inputProps={{
                                        name: 'faculty',
                                        id: 'text',
                                    }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ingeniería Civil</MenuItem>
                                    <MenuItem value={20}>Ingeniería de Sistemas</MenuItem>
                                    <MenuItem value={30}>Ingeniería Ambiental</MenuItem>
                                    <MenuItem value={40}>Ingeniería Biomédica</MenuItem>
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
                                <InputLabel htmlFor="text">Semestre</InputLabel>
                                <Select
                                    value={this.state.semester}
                                    onChange={this.handleSemesterChange}
                                    inputProps={{
                                        name: 'semester',
                                        id: 'text',
                                    }}
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>1°</MenuItem>
                                    <MenuItem value={20}>2°</MenuItem>
                                    <MenuItem value={30}>3°</MenuItem>
                                    <MenuItem value={40}>4°</MenuItem>
                                    <MenuItem value={50}>5°</MenuItem>
                                    <MenuItem value={60}>6°</MenuItem>
                                    <MenuItem value={70}>7°</MenuItem>
                                    <MenuItem value={80}>8°</MenuItem>
                                    <MenuItem value={90}>9°</MenuItem>
                                    <MenuItem value={100}>10°</MenuItem>
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
                                href="../Login/Login"                                
                            >
                                Completar Registro
                            </Button>         
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}