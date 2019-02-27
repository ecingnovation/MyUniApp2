
import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';
import { RegisterTeacher } from "../Register/RegisterTeacher";

export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/registerteacher" component={RegisterTeacherView}/>
                </Switch>
            </div>
        );
    }
}

const RegisterTeacherView = () => (
    <RegisterTeacher/>
);