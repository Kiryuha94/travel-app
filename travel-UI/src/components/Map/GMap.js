import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = 'AIzaSyANdBQVart06g6rSK - arIHOvTd99NDeQ1M';
const GMap = (props) => {
  const mapStyles = {
    margin: '1rem auto',
    width: '90%',
    height: '95%',
  };
  const { coordinate } = props;
  const initialCoords = {
    lat: coordinate.lat,
    lng: coordinate.lng,
  };
  return (
    <>
      <Map google={props.google} zoom={8} style={mapStyles} initialCenter={initialCoords}>
        <Marker position={initialCoords} />
      </Map>
    </>
  );
};
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(GMap);
