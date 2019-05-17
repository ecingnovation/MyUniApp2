import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import { Route, Switch } from "react-router-dom";
import Map from "../ComponentsMap/MapView";
import NewsList from "../News/NewsList";
import AddNew from "../News/AddNewForm";
import KioscosList from "../Kioscos/KioscosList";
import AddNewFood from "../Kioscos/AddNewFood";
import { Redirect } from "react-router-dom";

export class PagesView extends React.Component {
    render() {
        if (localStorage.getItem("token") === "undefined") {
            return (<Redirect to="/"/>);
        }
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route path="/app/map" component={MapView} />
                    <Route path="/app/news" component={NewsListView}/>
                    <Route path="/app/postnew" component={AddNewView}/>
                    <Route path="/app/kioskos" component={KioscosListView}/>
                    <Route path="/app/postKiosko" component={AddNewFoodView}/>
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

const KioscosListView = () => (
    <KioscosList/>
);

const AddNewFoodView = () => (
    <AddNewFood/>
);

