import React from 'react'
import { Map, GoogleApiWrapper ,Marker } from 'google-maps-react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useState } from 'react';
import  {useDispatch,useSelector} from  "react-redux"; 
import { locationDetails } from '../Redux/Action';
import {locationDetailsApi}  from '../Services/DataServices'
function GoogleView(props) {
  const dispatch = useDispatch();
    // const  result=useSelector(state);
    // console.log(result);
      let result = useSelector(state=>state.allLocations);
       console.log(result);
      
       const GetData = (obj) => {
        
        locationDetailsApi(obj).then(resp => console.log(resp)).catch(err => console.log(err))
       };
       
        
   
    
    
     const mapStyles = {
        width: '100%',
        height: '100%',
      };

      const [state, setState] = useState({
        stores: [{lat: 47.49855629475769, lng: -121.55184416996333},
                {latitude: 47.359423, longitude: -121.6081071},
                {latitude: 47.2052192687988, longitude: -121.1008426208496},
                {latitude: 48.6307081, longitude: -122.1434325},
                {latitude: 49.3084488, longitude: -122.2140121},
                {latitude: 46.5524695, longitude: -122.1005407},
                {latitude: 45.5624695, longitude: -122.0895407},
                {latitude: 47.5824695, longitude: -122.0595407},
                {latitude: 48.5924695, longitude: -122.0605407},
                {latitude: 46.6124695, longitude: -122.0705407},
                {latitude: 45.6524695, longitude: -122.0805407},
                {latitude: 47.6824695, longitude: -122.0955407},
               ]
      }
    )
    // console.log( state.stores);
    const displayMarkers = () => {
     
        return state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
       
         onClick={() => {(dispatch(locationDetails(store)));GetData(result[0])}
          } />
        })
      }
      
    
    
    return (
    <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
        {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
        {displayMarkers()} 
    </Map>
  )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCz0j9rdVf49-Mg4W0_70xVV0RoFl1OgAg'
})(GoogleView);