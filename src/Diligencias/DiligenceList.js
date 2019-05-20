import React from "react";
import Diligence from "./Diligence";
import axios from "axios";

class DiligenceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
        };
        this.createAxiosInstance();
    }

    render() {
        if (this.state.loaded === false) {
            this.getDiligenceFromApi();
            return(
                <h1>Loading!</h1>
            );
        } else {
            return(
                <div>
                    <br></br>
                    {DiligenceListApi}
                </div>
            );
        }
    }

    createAxiosInstance() {
        var token = localStorage.getItem("token");
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {"Authorization": "Bearer " + token}
        });
    }

    getDiligenceFromApi() {
        axiosInstance.get("/diligence/all")
        .then((response) => {
            var diligencesList2 = response.data.map((diligence, i) => {
                return (
                    <Diligence key={i} cardInfo={diligence} />
                );
            });
            DiligenceListApi = diligencesList2;
            this.setState({
                loaded : true
            });
            return diligencesList2;
        }).catch((error) => {
            console.log(error);
        });
    }

}

export default DiligenceList;

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;
var DiligenceListApi = (<div></div>);