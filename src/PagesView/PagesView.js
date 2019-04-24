import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import { Route, Switch } from "react-router-dom";
import Map from "../ComponentsMap/MapView";
import NewsList from "../News/NewsList";
import AddNew from "../News/AddNewForm";

export class PagesView extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route path="/app/map" component={MapView} />
                    <Route path="/app/news" component={NewsListView}/>
                    <Route path="/app/postnew" component={AddNewView}/>
                </Switch>
            </div>
        );
    }
}

const MapView = () => (
    <Map/>
);

const NewsListView = () => (
    <NewsList/>
);

const AddNewView = () => (
    <AddNew/>
);