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
          <Marker position={{lat:6.9497,lng:80.7891}}/>
          <Marker position={{lat:6.8021,lng:80.8074}}/>
          <Marker position={{lat:6.8407,lng:81.0542}}/>
          <Marker position={{lat:6.2755,lng:81.3582}}/>
          <Marker position={{lat:5.9776,lng:80.7386}}/>
          <Marker position={{lat:6.025,lng:80.218}}/>
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAIXpN9bKVGUrvtfkE97gCT7BgYzjo3swc'
  })(Maps);