import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import RedRob from './RedRob.svg'
import R1 from './R1.png'
import PurpleRob from './PurpleRob.svg'
import blueMarker from './blue-marker.svg'
import drone from './drone.png'

import mapStyles from './mapStyles'
import customStyles from './customStlyes.css'
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
     icon={{
      url: RedRob,
      scaledSize: new window.google.maps.Size(35,35),
    }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  //customized map style 
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles
    })
  }
 
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    const { info } = this.props;
    console.log('GMap info -->', info);
  //  console.log('tracking info GMap-->', info);
    let locationString = [];
    if (info['current location'] != undefined) {
      locationString = info['current location'].split(',');
    }

    const location = {
      lat: parseFloat(locationString[0]),
      lng: parseFloat(locationString[1]),
    };
    console.log('location -->', location);

    let desLocationString = [];
    if (info['destination'] != undefined) {
      desLocationString = info['destination'].split(',');
    }
    // const locationString = info['current location'].split(',');
    const desLocation = {
      desLat: parseFloat(desLocationString[0]),
      desLng: parseFloat(desLocationString[1]),
    };
    console.log('desLocation -->', desLocation);

    return (
      <div>
      <customHead>
        Dronbot{" "} 
        <span role = "img" aria-label = "robot" >
          🤖️📦
        </span>
      </customHead>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          disableDefaultUI={true}//remove the default upper left coner MAP Satellite switch
          zoomControl={true}
          initialCenter={{ lat: 37.765, lng: -122.44}}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
         {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
         {this.displayMarkers([location])}

        <Marker
          position={{lat: desLocation.desLat, lng: desLocation.desLng}}
          icon={{
            url: blueMarker,
            scaledSize: new window.google.maps.Size(20,35),
          }} 
        />
        {/* <Marker
          position={{lat: 37.77325570, lng: -122.43554290}}
          icon={{
            url: PurpleRob,
            scaledSize: new window.google.maps.Size(40,40),
          }} 
        /> */}
        {/* <Marker
          position={{lat: 37.75, lng: -122.42}}
          icon={{
            url: R1,
            scaledSize: new window.google.maps.Size(40,40),
          }} 
        /> */}
        {/* <Marker
          position={{lat: 37.74, lng: -122.46}}
          icon={{
            url: blue,
            scaledSize: new window.google.maps.Size(40,40),
          }} 
        /> */}
      </Map>
      </div>
    );
    
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s')
})(GMap)
