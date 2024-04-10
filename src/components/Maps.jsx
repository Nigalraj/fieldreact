import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [mapOptions, setMapOptions] = useState({
    center: {
      lat: 13.0827,
      lng: 80.2707
    },
    zoom: 7
  });

  const locationName = "Salem"; 
  console.log(locationName,"v");
  
  useEffect(() => {
    fetchCoordinates(locationName);
    async function fetchCoordinates(locationName) {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=AIzaSyBA69Z51tNdp2_-YBY1NMVqwEq3zvT65sk`);
        console.log(response);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setMapOptions(prevOptions => ({
            ...prevOptions,
            center: { lat, lng },
            zoom: 10
          }));
        } else {
          console.error("No results found for the provided location.");
        }
      } catch (error) {
        console.log(error,"hui");
        console.error("Error fetching coordinates:", error);
      }
    }
  }, []); 
  

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBA69Z51tNdp2_-YBY1NMVqwEq3zvT65sk" }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        <AnyReactComponent
          lat={mapOptions.center.lat}
          lng={mapOptions.center.lng}
          text={locationName}
        />
      </GoogleMapReact>
    </div>
  );
}
