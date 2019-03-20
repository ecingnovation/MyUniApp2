
import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';

import { RegisterTeacher } from "../Register/RegisterTeacher";
import { RegisterStudent } from "../Register/RegisterStudent";
import { RegisterAdministrative } from "../Register/RegisterAdministrative";

export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/app/register" component={RegisterTeacherView}/>
                    <Route exact path="/register/teacher" component={RegisterTeacherView}/>
                    <Route path="/register/student" component={RegisterStudentView}/>
                    <Route path="/register/administrative" component={RegisterAdministrativeView}/>
                </Switch>
            </div>
        );
    }
}

//TODO Este Register debe ser Unico
const RegisterTeacherView = () => (
    <RegisterTeacher/>
);
const RegisterStudentView = () => (
    <RegisterStudent/>
);
const RegisterAdministrativeView = () => (
    <RegisterAdministrative/>
);