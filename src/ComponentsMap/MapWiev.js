import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import MapComponent from './Map'
import PointList from './PointsList'
class MapView extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false,
      markerList:""
    }
  }

  componentWillUpdate(){
    this.getGeoLocation()
  }

  componentDidMount() {
    this.delayedShowMarker()
    let markerList = []
            markerList.push({

                            description: "A ",
                            title: "Title",
                            currentLocation :{
                                lat: 4.7827587,
                                lng: -74.0427843
                            },
                            label:"A",
                            Image: "IMAGE"

            })
            markerList.push({

                            description: "B ",
                            title: "Title",
                            currentLocation: {
                                lat: 4.7828577,
                                lng: -74.0427804
                            },
                            label:"B",
                            Image: "IMAGE"

            })
            markerList.push({

                            description: "C ",
                            title: "Title",
                            currentLocation: {
                                lat: 4.7824575,
                                lng: -74.0422877
                            },
                            label:"C",
                            Image: "IMAGE"

            })
            this.setState({markerList: markerList});
            localStorage.setItem('Markers', markerList);
            console.log(this.state.markerList)
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.getGeoLocation()
      this.setState({ isMarkerShown: true })
    }, 5000)
  }

  handleMarkerClick = () => {

    this.delayedShowMarker()
  }

  getGeoLocation = () => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                  position => {
                      //console.log(position.coords);
                      this.setState(prevState => ({
                          currentLatLng: {
                              ...prevState.currentLatLng,
                              lat: position.coords.latitude,
                              lng: position.coords.longitude
                          }
                      }))
                      console.log('lat: '+this.state.currentLatLng.lat+'  long:'+this.state.currentLatLng.lng);
                  }
              )
          }
          else{
            console.log('ERROR GETTING LOCATION');
          }

      }

  render() {

    return (

      <MapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        currentLocation={this.state.currentLatLng}
        markers= <PointList pointsList={this.state.markerList} />
      />

    )
  }
}

export default MapView;