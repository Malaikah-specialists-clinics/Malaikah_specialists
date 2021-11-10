import react, { Component } from 'react'; /* eslint-disable-line no-unused-vars */
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // disable eslint for this line


class Maps extends Component {
    render () { 
        const style = {  /* eslint-disable-line no-unused-vars */
            width: '100%',
            height: '70%',
        };
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={{ width: '100%', height: '60%', bottom: '20%' }}
                    initialCenter={{ lat: -7.71712, lng: 8.594125 }}
                >
                    <Marker
                        position={{ lat: -7.405545381581326, lng: 9.006915839630619  }}      //7.405545381581326, 9.006915839630619
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper ({
    apiKey: ('AIzaSyBXTZ8Fygoz_brcWrSYf_1cNxeVGqZQODc')  //disable eslint for this line 

}) (Maps);