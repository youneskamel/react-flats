import React from "react"
import AppartementsDiv from "./AppartementsDiv"
import Map from "./Map"
import flats from "../flats"

console.log(flats)

class App extends React.Component {
  render() {
    return (
            <div>
              <AppartementsDiv class="flat-list card-description" flats={flats} />
              <Map/>
            </div>
            )
  }
}


export default App
