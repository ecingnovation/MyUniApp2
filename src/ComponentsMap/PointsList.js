import React, {Component} from 'react';
import Point from "./InterestPoint";


export default class PointList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const points = this.props.pointsList.map((point, i) => {
            return (
                <Point key={i} description={point.description} title={point.title} image={point.image} currentLocation={point.currentLocation} label={point.label}/>
            );
        });

        return (
            <div>
                {points}
            </div>
        );


    }
}