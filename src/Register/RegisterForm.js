import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { RegisterTeacher } from "../Register/RegisterTeacher";
import { RegisterStudent } from "../Register/RegisterStudent";
import { RegisterAdministrative } from "../Register/RegisterAdministrative";
import { CssBaseline, Paper } from "@material-ui/core";
import "./Register.css";

export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registry: "",
        };
        this.handleRegistryChange = this.handleRegistryChange.bind(this);
    }   

    handleRegistryChange(event){
        this.setState({
            registry: event.target.value
        });
    }
    
    render() {
        var options= (
            <React.Fragment>
                <CssBaseline>
                <main className="layout">
                    <Paper className="paper">
                        <FormControl  margin="normal" required fullWidth>
                            <InputLabel htmlFor="text">¿Cuál es tu Rol?</InputLabel>
                            <Select                            
                                onChange={this.handleRegistryChange}
                                value={this.state.registry}
                                inputProps={{
                                    name: "registry",
                                    id: "text",
                                }} 
                                >
                                <MenuItem value="1">
                                    <em>Selecciona tu Rol</em>
                                </MenuItem>
                                <MenuItem value={10}>Profesor </MenuItem>
                                <MenuItem value={20}>Estudiante</MenuItem>
                                <MenuItem value={30}>Administrador</MenuItem>
                            </Select>       
                        </FormControl>
                    </Paper>
                </main>
                </CssBaseline>
            </React.Fragment>
        );
        if (this.state.registry === 10){
            return(  
                <section>
                        {options}
                        <RegisterTeacher/>             
                </section>
                
            );

        }
        if (this.state.registry === 20){
            return(  
                <section>
                        {options}
                        <RegisterStudent/>             
                </section>
            );

        }
        if (this.state.registry === 30){
            return( 
                <section>
                        {options}
                        <RegisterAdministrative/>           
                </section> );

        }   
        return (
            <div>
                {options}
            </div>
        );
    }
}

