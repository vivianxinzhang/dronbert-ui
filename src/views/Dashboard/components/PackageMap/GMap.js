import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class GMap extends Component {
  constructor(props) {
    super(props);
  }
 /*   this.state = {
      stores: [{lat: 37.7749, lng: -122.4194},
              {latitude: 37.7749, longitude: -122.4194},
              {latitude: 37.78, longitude: -122.48},
              {latitude: 37.76, longitude: -122.46},
              {latitude: 37.75, longitude: -122.44},
              {latitude: 37.74, longitude: -122.49}]
    }
  } */

  displayMarkers = (locations) => {
    return locations.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.lat,
       lng: store.lng
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    const { info } = this.props;
  //  console.log('tracking info GMap-->', info);
    let locationString = [];
    if (info['current location'] != undefined) {
      locationString = info['current location'].split(',');
    }
    // const locationString = info['current location'].split(',');
    const location = {
      lat: parseFloat(locationString[0]),
      lng: parseFloat(locationString[1]),
    };
    console.log('location -->', location);
    return (
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 37.7749, lng: -122.4194}}
        >
         {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
         {this.displayMarkers([location])}
         </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s')
})(GMap)
