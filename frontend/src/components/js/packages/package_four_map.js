import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Package_four_Maps extends React.Component {
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
          <Marker position={{lat:6.025,lng:80.218}}/>
          <Marker position={{lat:"",lng:""}}/>
          <Marker position={{lat:"",lng:""}}/>
          <Marker position={{lat:"",lng:""}}/>

          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAIXpN9bKVGUrvtfkE97gCT7BgYzjo3swc'
  })(Package_four_Maps);