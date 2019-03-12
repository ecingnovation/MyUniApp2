import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



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
                        <Avatar className="avatar">
                            <AssignmentIcon />
                        </Avatar>
                        <Typography variant="headline">Register</Typography>
                        <form className="form" onSubmit={this.handleRegister}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Name</InputLabel>
                                <Input
                                id="name"
                                name="name"
                                autoFocus
                                onChange = {this.handleNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Last Name</InputLabel>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    autoFocus
                                    onChange = {this.handleLastNameChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Email</InputLabel>
                               <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange = {this.handleEmailChange}
                                />
                            </FormControl>
                             <FormControl  margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Faculty</InputLabel>
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
                                            <MenuItem value={10}>Ingenieria civil </MenuItem>
                                            <MenuItem value={20}>Ingenieria de sistemas</MenuItem>
                                            <MenuItem value={30}>Ingenieria Ambiental</MenuItem>
                                            <MenuItem value={40}>Ingenieria Biomedica </MenuItem>
                                            <MenuItem value={50}>Ingenieria Mecanica</MenuItem>
                                            <MenuItem value={60}>Ingenieria Electronica</MenuItem>
                                            <MenuItem value={70}>Ingenieria Electrica</MenuItem>
                                            <MenuItem value={80}>Ingenieria Electronica</MenuItem>
                                            <MenuItem value={90}>Ingenieria Industrial</MenuItem>
                                            <MenuItem value={100}>Economia</MenuItem>
                                            <MenuItem value={110}>Administracion de empresas</MenuItem>
                                            <MenuItem value={120}>Matematicas</MenuItem>

                                </Select>

                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Semester</InputLabel>
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
                                            <MenuItem value={10}>1° </MenuItem>
                                            <MenuItem value={20}>2°</MenuItem>
                                            <MenuItem value={30}>3°</MenuItem>
                                            <MenuItem value={40}>4° </MenuItem>
                                            <MenuItem value={50}>5°</MenuItem>
                                            <MenuItem value={60}>6°</MenuItem>
                                            <MenuItem value={70}>7°</MenuItem>
                                            <MenuItem value={80}>8°</MenuItem>
                                            <MenuItem value={90}>9°</MenuItem>
                                            <MenuItem value={100}>10°</MenuItem>

                                </Select>

                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="number">Phone</InputLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    onChange = {this.handlePhoneChange}
                                />
                             </FormControl>


                              <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordChange}
                                />
                              </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    onChange = {this.handlePasswordConfirmationChange}
                                />
                             </FormControl>
                        </form>
                    </Paper>
                </main>
                <br/><br/><br/><br/><br/><br/>
            </React.Fragment>
        );
    }
}