import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import RedRob from './RedRob.svg'
import blueMarker from './blue-marker.svg'
import drone from './drone.png'
import mapStyles from './mapStyles'
import customStyles from './customStlyes.css'
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
export class GMap extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    open: false,
    robot: true,
  };

  displayMarkers = (locations) => {
    const { robot } = this.state;
    if (robot) {
      return locations.map((store, index) => {
        return <Tooltip title="Your Package is getting closer! " placement="right">
          <Marker key={index} id={index} position={{
          lat: store.lat,
          lng: store.lng
        }}
        icon={{
          url: RedRob,
          scaledSize: new window.google.maps.Size(35,35),
        }}
        onClick={() => console.log("You clicked me!")} />
        </Tooltip>
      })
    } else {return locations.map((store, index) => {
      return <Tooltip title="Your Package is getting closer! " placement="right">
        <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
      icon={{
        url: drone,
        scaledSize: new window.google.maps.Size(35,35),
      }}
     onClick={() => console.log("You clicked me!")} />
     </Tooltip>
    })}
    
  }
  //customized map style 
  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyles
    })
  }
  handleTooltipClose = () => {
    this.setState({ open: false });
  };

  handleTooltipOpen = () => {
    this.setState({ open: true });
  };



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
          {/* <span role = "img" aria-label = "robot" >
          🤖️📦
        </span> */}
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

          <Tooltip title="This is Destination. Carrier is on the way. " placement="right">
            <Marker
              position={{lat: desLocation.desLat, lng: desLocation.desLng}}
              icon={{
                url: blueMarker,
                scaledSize: new window.google.maps.Size(20,35),
              }} 
              onClick={this.handleTooltipOpen}
            />
          </Tooltip>
        </Map>
      </div>
    );
    
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD3CEh9DXuyjozqptVB5LA-dN7MxWWkr9s')
})(GMap)
