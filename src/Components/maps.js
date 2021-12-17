import react, { Component } from 'react'; /* eslint-disable-line no-unused-vars */
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'; // disable eslint for this line



class Maps extends Component {

    static defaultProps = {
        center: {
          lat: 7.71712,
          lng: 8.594125
        },
        zoom: 5
      };
    render () { 
        //const style = {  /* eslint-disable-line no-unused-vars */
           // width: '100%',
           // height: '70%',
       // };
        return (

            
            
            <div className="mapFrame" style={{ width: '100%', height: '300px', bottom: '0', position: 'relative' }}>
                <h2 style={{textAlign: 'center'}}>Visit Us!</h2>
                <Map
                    google={this.props.google}
                    resetBoundsOnResize={true}

                   // zoom={5}
               style={{ height: '100%' }}
                    //initialCenter={{ lat: -7.71712, lng: 8.594125 }}
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