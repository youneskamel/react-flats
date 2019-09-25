import React from "react"
import AppartementCard from "./AppartementCard"

class AppartementsDiv extends React.Component {
  render() {


    return (
      <div className="flat-list">
        {this.props.flats.map(flat => <AppartementCard
         name={flat.name}
         price={flat.price}
         lng={flat.lng}
         lat={flat.lat}
         selectedFlatName={this.props.selectedFlatName}
         selectedFlat={this.props.selectedFlat}
         priceCurrency={flat.priceCurrency}
         imageUrl={flat.imageUrl}
         />)

      }
      </div>
    )

  }
}



export default AppartementsDiv
