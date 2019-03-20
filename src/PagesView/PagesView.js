
import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import "./PagesView.css";
import { Route, Switch } from 'react-router-dom';
import { RegisterTeacher } from "../Register/RegisterTeacher";
import Map from "../ComponentsMap/MapView";
import NewsList from "../News/NewsList";

export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/app/register" component={RegisterTeacherView}/>
                    <Route path="/app/map" component={MapView} />
                    <Route path="/app/news" component={NewsListView}/>
                </Switch>
            </div>
        );
    }
}

//TODO Este Register debe ser Unico
const RegisterTeacherView = () => (
    <RegisterTeacher/>
);

const MapView = () => (
    <Map />
);

const NewsListView = () => (
    <NewsList/>
);
