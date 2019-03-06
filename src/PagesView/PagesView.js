
import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';
import { RegisterTeacher } from "../Register/RegisterTeacher";
import { RegisterStudent } from "../Register/RegisterStudent";
import { RegisterAdministrative } from "../Register/RegisterAdministrative";
import { FullRegister } from "../Register/FullRegister";


export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/register/teacher" component={RegisterTeacherView}/>
                    <Route path="/register/student" component={RegisterStudentView}/>
                    <Route path="/register/administrative" component={RegisterAdministrativeView}/>
                    <Route path="/register/full" component={FullRegisterView}/>
                </Switch>
            </div>
        );
    }
}

const RegisterTeacherView = () => (
    <RegisterTeacher/>
);
const RegisterStudentView = () => (
    <RegisterStudent/>
);
const RegisterAdministrativeView = () => (
    <RegisterAdministrative/>
);

const FullRegisterView = () => (
    <FullRegister/>
);