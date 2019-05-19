import React from "react";
import {withStyles} from "@material-ui/core/styles";
import { Marker, InfoWindow } from "react-google-maps";

const styles = (theme) => ({
    card: {
        display: "flex",
        marginBottom: 15
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 160,
    }
});

class InterestPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false,
        };
    }

    render(){
        return (
            
            <Marker position={{ lat: this.props.lat, lng: this.props.lng }} onClick={this.handleToggle} label={this.props.label} >
                {this.state.isOpen &&
                    <InfoWindow
                        onCloseClick={this.handleToggleClose}
                    >
                        <div>

                        <img src={`${this.props.image}`} width={500} height={300} mode='fit'/>
                         <h4>{this.props.title}</h4>
                        <span>{this.props.description}</span>
                        </div>

                    </InfoWindow>
                }
            </Marker>
        );
    }
    handleToggle = () => {
        this.setState({
            isOpen: !false
        });
    }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
    }
}

export default withStyles(styles, { withTheme: true })(InterestPoint);