import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';

import { RegisterTeacher } from "../Register/RegisterTeacher";
import { RegisterStudent } from "../Register/RegisterStudent";
import { RegisterAdministrative } from "../Register/RegisterAdministrative";
import Map from "../ComponentsMap/MapView";
import NewsList from "../News/NewsList";
import { RegisterForm } from "../Register/RegisterForm";

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
                    <Route path="/app/map" component={MapView} />
                    <Route path="/app/news" component={NewsListView}/>
                </Switch>
            </div>
        );
    }
}

//TODO Este Register debe ser Unico
const RegisterTeacherView = () => (
    <RegisterForm/>
);
const RegisterStudentView = () => (
    <RegisterStudent/>
);
const RegisterAdministrativeView = () => (
    <RegisterAdministrative/>
);

const MapView = () => (
    <Map />
);

const NewsListView = () => (
    <NewsList/>
);
