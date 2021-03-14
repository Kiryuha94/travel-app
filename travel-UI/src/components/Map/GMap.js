import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = 'AIzaSyANdBQVart06g6rSK - arIHOvTd99NDeQ1M';
const GMap = (props) => {
  const mapStyles = {
    margin: '1rem auto',
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 53.902935747587804, lng: 27.555767079359867 }}>
        <Marker position={{ lat: 53.902935747587804, lng: 27.555767079359867 }} />
      </Map>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GMap);
