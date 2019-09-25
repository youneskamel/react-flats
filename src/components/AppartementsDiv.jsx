import React from "react"
import AppartementCard from "./AppartementCard"

class AppartementsDiv extends React.Component {
  render() {
    console.log(this.props.flats)

    return (
      <div>
        {this.props.flats.map(flat => <AppartementCard name={flat.name} price={flat.price} priceCurrency={flat.priceCurrency} imageUrl={flat.imageUrl}/>)}
      </div>
    )

  }
}



export default AppartementsDiv
