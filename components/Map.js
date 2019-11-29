import React, { Component } from 'react'
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

class Map extends Component {
  render() {
     return (
      <LoadScriptNext
        id="script-loader"
        googleMapsApiKey="AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8"
        loadingElement="GoogleMap"
      >
        <GoogleMap
          mapContainerClassName="map"
          mapContainerStyle={{
            height: "100%",
            width: "100%"
          }}
          zoom={9}
          center={{
            lat: 35.913200,
            lng: -79.055847
          }} 
        >
        <Marker
          onLoad={marker => {
          }}
          position={{
            lat: 35.913200,
            lng: -79.055847
          }}
        />
        </GoogleMap>
     <style jsx>{`

     `}</style>
      </LoadScriptNext>
     )
  }
}

export default Map;