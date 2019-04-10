import React, {Component} from "react";
import Point from "./InterestPoint";

export default class PointList extends Component {

    render() {
        var thePointList = this.props.pointsList;
        if (thePointList === null || thePointList === undefined || thePointList === "") {
            return (<div></div>);
        }
        
        const points = thePointList.map((point, i) => {
            return (
                <Point key={i} description={point.description} title={point.title} image={point.image} lat={point.lat} lng={point.lng} label={point.label}/>
            );
        });

        return (
            <div>
                {points}
            </div>
        );
    }
}