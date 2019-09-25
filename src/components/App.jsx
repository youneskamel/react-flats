import React from "react"
import GoogleMapReact from 'google-map-react';
import AppartementsDiv from "./AppartementsDiv"
import Map from "./Map"
import flats from "../flats"

console.log(flats)

class App extends React.Component {
  render() {
    return (
            <div>
              <AppartementsDiv class="flat-list" flats={flats} />
              <div className="map-container">
                <GoogleMapReact defaultCenter={{lat: 48.884211,
      lng: 2.34689}} defaultZoom={12}>
                </GoogleMapReact>

              </div>
            </div>
            )
  }
}


export default App
