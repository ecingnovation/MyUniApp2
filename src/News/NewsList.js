import React from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

class NewsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
        }
    }

    render() {
        if (this.state.loaded === false) {
            console.log("Currently using API: " + apiURL);
            this.createAxiosInstance();
            this.getNewsFromApi();
            return(
                <h1>Loading!</h1>
            );
        } else {
            return(
                <div>
                    <br></br>
                    {newsListApi}
                </div>
            );
        }
    }

    createAxiosInstance(/* token */) {
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            // headers: {'Authorization': 'Bearer '+ token} //TODO When token is implemented
        });
    }

    getNewsFromApi() {
        axiosInstance.get("/news/all")
        .then((response) => {
            var newsList2 = response.data.map((newsItem, i) => {
                return (
                    <NewsItem key={i} cardInfo={newsItem} />
                );
            });
            newsListApi = newsList2;            
            this.setState({
                loaded : true
            });
            return newsList2;
        }).catch((error) => {
            console.log(error);
        });
    }

}

export default NewsList;

const apiURL = ((window.location.hostname === "localhost") ? "http://localhost:8080" : "https://myuniapp-back.herokuapp.com");
var axiosInstance;
var newsListApi = (<div></div>);