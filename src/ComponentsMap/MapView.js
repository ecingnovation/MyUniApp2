import React, { Component } from "react";
import MapComponent from "./Map";
import PointList from "./PointsList";
import axios from "axios";

class MapView extends Component {
    constructor(props){
        super(props);
        this.state = {
        currentLatLng: {
            lat: 0,
            lng: 0
        },
        isMarkerShown: false,
        markerList:""
        }
        this.createAxiosInstance();
    }

    componentWillUpdate() {
        this.getGeoLocation();
    }

    componentDidMount() {
        this.delayedShowMarker()
        let markerList= [];
        axios.get(apiURL + "/map/points").then((response) => {
                console.log(response.data);
                markerList = response.data;
                this.setState({markerList: markerList});
                localStorage.setItem("Markers", markerList);
            }).catch((error) => {
                console.log(error);
            }
        )
    }

    delayedShowMarker = () => {
        setTimeout(() => {
        this.getGeoLocation();
        this.setState({ isMarkerShown: true });
        }, 5000);
    }

    handleMarkerClick = () => {
        this.delayedShowMarker();
    }
    
    createAxiosInstance(token) {
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + token}
        });
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    //console.log(position.coords);
                    this.setState(prevState => ({
                        currentLatLng: {
                            ...prevState.currentLatLng,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }));
                }
            );
        }
        else {
            console.log("ERROR GETTING LOCATION");
        }
    }

    render() {
        return (
            <MapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                currentLocation={this.state.currentLatLng}
                markers= <PointList pointsList={this.state.markerList} />
            />
        );
    }
}

export default MapView;

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;