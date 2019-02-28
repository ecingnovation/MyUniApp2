
import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';
import { RegisterTeacher } from "../Register/RegisterTeacher";
import { RegisterStudent } from "../Register/RegisterStudent";

export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/register/teacher" component={RegisterTeacherView}/>
                    <Route path="/register/student" component={RegisterStudentView}/>

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

