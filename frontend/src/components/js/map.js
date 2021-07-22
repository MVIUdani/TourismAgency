import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 7.8731, lng: 80.7718 }}
        />
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAIXpN9bKVGUrvtfkE97gCT7BgYzjo3swc'
  })(Maps);