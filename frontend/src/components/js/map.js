/*import React from 'react';
import { Component } from 'react';

export default class Maps extends Component{
render(){
  return
}
}*/


import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <Map
          google={this.props.google}
        //  zoom={15}
          zoom={8.5}
          style={mapStyles}
          initialCenter={{ lat: 7.8731, lng: 80.7718 }}
        >
          <Marker position={{lat:7.9573,lng:80.7600}}/>
          <Marker position={{lat:7.9403,lng:81.0188}}/>
          <Marker position={{lat:6.8021,lng:80.8074}}/>
          <Marker position={{lat:8.3114,lng:80.4037}}/>
          <Marker position={{lat:7.4827,lng:80.3728}}/>
          <Marker position={{lat:6.8018,lng:80.3694}}/>
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAIXpN9bKVGUrvtfkE97gCT7BgYzjo3swc'
  })(Maps);