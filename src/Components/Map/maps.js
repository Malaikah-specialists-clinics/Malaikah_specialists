import react, { Component } from 'react'; /* eslint-disable-line no-unused-vars */
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // disable eslint for this line
import './maps.css'



class Maps extends Component {

    static defaultProps = {
        center: {
          lat: 7.71712,
          lng: 8.594125
        },
        zoom: 5
      };
    render () { 
      
        return (

            
            
            <div className="mapFrame">
                <h2 style={{textAlign: 'center'}}>Visit Us!</h2>
                <Map
                    google={this.props.google}
                    resetBoundsOnResize={true}

                  
               style={{ height: '100%' }}
                   
                >
                    <Marker
                        position={{ lat: 7.405545381581326, lng: 9.006915839630619  }}      //7.405545381581326, 9.006915839630619
                    />
                </Map>
            </div>
        );
    }
        
    }


export default GoogleApiWrapper ({
    apiKey: ('AIzaSyBXTZ8Fygoz_brcWrSYf_1cNxeVGqZQODc')  //disable eslint for this line 

}) (Maps);