import React, {Component} from "react";
import Point from "./InterestPoint";


export default class PointList extends Component {



    render() {

        const points = this.props.pointsList.map((point, i) => {
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