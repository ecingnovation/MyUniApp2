import React from "react";
import {withStyles} from "@material-ui/core/styles";
import { Marker, InfoWindow } from "react-google-maps";

const styles = theme => ({
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
            <Marker position={{ lat: this.props.currentLocation.lat, lng: this.props.currentLocation.lng }} onClick={this.handleToggle} label={this.props.label} >
                {this.state.isOpen &&
                    <InfoWindow
                            onCloseClick={this.handleToggleClose}
                            >
                        <span>Description: {this.props.description} </span>
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