import React, {useState,useEffect} from 'react'
import {GoogleMap, LoadScript,Circle} from '@react-google-maps/api'
const GoogleMaps = ({center,zoom,countries,casesType}) => {
  
  const [options, setOptions] = useState(null);
  const [radiusClc,setRadiusClc] = useState(2);

  const mapStyles = {        
    height: "100%",
    width: "100%"};

  const optionsCases = {
    strokeColor: '#EBEB12',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#EBEB12',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
  }
  const optionsRecovred = {
    strokeColor: '#0ADE18',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0ADE18',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
  }
  const optionsDeath = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
  }
  const  confOptions = () => {
    if (casesType === "cases") {setOptions(optionsCases);setRadiusClc(2)}
    else if( casesType === "deaths")  {setOptions(optionsDeath);setRadiusClc(8)}
    else {setOptions(optionsRecovred); 
          setRadiusClc(3)};
  }
  useEffect(()=>{
    confOptions();
  },[casesType])
    return (
        <LoadScript
        googleMapsApiKey='AIzaSyBOVKnp4vIXQHLkFrNxTHhI_SDMRh3ShjU'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={zoom}
           center={center}
          >
            {
                countries.map(c => (<Circle options={options} center={{lat:c.countryInfo.lat,lng:c.countryInfo.long}}   radius={radiusClc*(c[casesType] /10)} />))
            }
         </GoogleMap>
      </LoadScript>
    )
}

export default GoogleMaps
