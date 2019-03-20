import React from "react";
import NewsItem from "./NewsItem";

class NewsList extends React.Component {
    render() {
        var newsList = (<div></div>);
        newsList = newsListStub.map((newsItem, i) => {
            return (
                <NewsItem key={i} cardInfo={newsItem} />
            );
        });
        return(
            <div>
                <br></br>
                {newsList}
            </div>
        );
    }
}

export default NewsList;

const newsListStub = [
    {
        "title": "Primera Noticia Normal",
        "publisher": "Juan Marín",
        "type": "Normal",
        "date": 1554126456114,
        "email" : "juan.marin@escuelaing.edu.co",
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "title": "Segunda Noticia Advertencia",
        "publisher": "Andrés Ramírez",
        "type": "Warning",
        "date": 1577686456114,
        "email" : "andres.ramirez@escuelaing.edu.co",
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "title": "Tercera Noticia Informativa",
        "publisher": "Fabian Zabaleta",
        "type": "Info",
        "date": 1590886456114,
        "email" : "fabian.zabaleta@escuelaing.edu.co",
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]