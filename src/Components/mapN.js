import React, { Component } from 'react';
import GoogleMapReact from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -7.71712,
      lng: 8.594125
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400', width: '500' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBXTZ8Fygoz_brcWrSYf_1cNxeVGqZQODc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          google={this.props.google}
        >
          <AnyReactComponent
            lat={-7.405545381581326}
            lng={9.006915839630619}
            text="Malaikah Health Specialists"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

