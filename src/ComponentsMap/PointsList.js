import React, {Component} from 'react';
import Point from "./InterestPoints";


export default class BooksList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const points = this.props.pointsList.map((point, i) => {
            return (
                <Point key={i} description={point.description} title={point.title} image={point.image}/>
            );
        });

        return (
            <div>
                {points}
            </div>
        );


    }
}