import React from "react"
import GoogleMapReact from 'google-map-react';
import AppartementsDiv from "./AppartementsDiv"
import Map from "./Map"
import flats from "../flats"
import Marker from "./Marker"

console.log(flats)

class App extends React.Component {
  constructor() {
    super()
    this.state = {selectedFlatName: "Charm at the Steps of the Sacre Coeur/Montmartre"}
  }

  selectedFlat = (lat, lng, name) => {
    this.setState({lat: lat, lng: lng, selectedFlatName: name})
  }

  render() {
    return (
            <div>
              <AppartementsDiv class="flat-list" selectedFlat={this.selectedFlat} selectedFlatName={this.state.selectedFlatName}flats={flats} />
              <div className="map-container">
                <GoogleMapReact defaultCenter={{lat: 48.884211,
      lng: 2.34689}} defaultZoom={12}>
                  <Marker lat={this.state.lat} lng={this.state.lng} />
                </GoogleMapReact>

              </div>
            </div>
            )
  }
}


export default App
