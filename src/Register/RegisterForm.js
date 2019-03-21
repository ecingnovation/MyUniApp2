import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logof from './../logof.jpg';
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registry: '',
        };
        this.handleRegistryChange = this.handleRegistryChange.bind(this);
    }   

    handleRegistryChange(event){
        this.setState({
            registry: event.target.value
            
        });
        console.log(this.state.registry)
    }
    
    render() {
        var options= (
            <React.Fragment>           
                <FormControl  margin="normal" required fullWidth>
                    <InputLabel htmlFor="text">Register</InputLabel>
                    <Select                            
                        onChange={this.handleRegistryChange}
                        value={this.state.registry}
                        inputProps={{
                            name: 'registry',
                            id: 'text',
                        }}
                        >
                        <MenuItem value="1">
                            <em>Select option</em>
                        </MenuItem>
                        <MenuItem value={10}>Are you a Teacher? </MenuItem>
                        <MenuItem value={20}>Are you a Student? </MenuItem>
                        <MenuItem value={30}>Are you an Administrative? </MenuItem>
                    </Select>       
                </FormControl>
            </React.Fragment>     
        );
        if (this.state.registry === 10){
            return(  
                <div>
                    {options}
                    <h1>hola mundo Teacher </h1>
                </div>
            );

        }
        if (this.state.registry === 20){
            return(  <h1>hola mundo Student</h1>)

        }
        if (this.state.registry === 30){
            return(  <h1>hola mundo Administrative</h1>)

        }
        
        
        return (
            <div>
               {options}
            </div>
        );



    }

}
