import React, { Component } from 'react';
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const Map = compose(
  withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZm-CsNq3xnlCH4iGAZ0Ta4K8g2_AhRKE&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>

  <GoogleMap
    defaultCenter={{ lat: 4.7827524, lng: -74.0427825 }}
    center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
    defaultZoom={18}

  >

    {props.isMarkerShown && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} onClick={props.onMarkerClick} />}
  </GoogleMap>

)

export default Map

