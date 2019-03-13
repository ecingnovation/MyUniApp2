import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 160,
    }
});

class InterestPoint extends React.Component {


    constructor(props) {
                  super(props);
                  console.log(props.description+'lksdjfldsf');
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