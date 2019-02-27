import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';


export class RegisterTeacher extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        name : '',
        lastName : '',
        email : '',
        faculty : '',
        teachertype: '',
        phone : '',
        address : '',
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
  
  handleTeacherTypeChange = event => {
      this.setState({
          teachertype: event.target.value
      });
  }

  handlePhoneChange = event => {
      this.setState({
          phone: event.target.value
      });
  }

  handleAddressChange = event => {
      this.setState({
          address: event.target.value
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
                        <Typography variant="headline">Register Teacher</Typography>
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
                                <InputLabel htmlFor="text">Faculty</InputLabel>
                               <Input
                                    id="faculty"
                                    name="faculty"
                                    autoComplete="faculty"
                                    autoFocus
                                    onChange = {this.handleFacultyChange}
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
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="text">Teacher Type</InputLabel>
                               <Input
                                    id="teachertype"
                                    name="teachertype"
                                    autoComplete="teachertype"
                                    autoFocus
                                    onChange = {this.handleteachertypeChange}
                                />
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
                                   <InputLabel htmlFor="number">Address</InputLabel>
                                   <Input
                                        id="Address"
                                        name="Address"
                                        autoComplete="Address"
                                        autoFocus
                                        onChange = {this.handleAddressChange}
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