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
         loaded : false,
        markerList: []
        };



        this.createAxiosInstance();

    }

    componentWillUpdate() {
        this.getGeoLocation();
    }

    componentDidMount() {

        this.delayedShowMarker();

    }
    componentWillUnmount() {
        this.loaded = false;
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
            headers: {"Authorization": "Bearer " + token}
        });
    }

    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState( (prevState) => ({
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

        if (this.state.loaded === false) {
            this.getPointsFromApi();
            return(
                <h1>Loading!</h1>
            );
        }else{
            return (

            <MapComponent
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    currentLocation={this.state.currentLatLng}
                    markers = {<PointList pointsList ={this.state.markerList} />}
                />
            );}
    }

    getPointsFromApi() {
        let markerList= [];
        axiosInstance.get("/map/points").then((response) => {
            markerList = response.data;
            this.setState({markerList: markerList});
            localStorage.setItem("Markers", markerList);
            this.setState({
                loaded : true
            });
        }).catch((error) => {
                console.log(error);
            }
        );

    }
}

export default MapView;

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;