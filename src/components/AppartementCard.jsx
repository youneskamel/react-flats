import React from "react"

class AppartementCard extends React.Component {
  render() {
    return (
          <div clasName="card"style={{backgroundImage: `url(${this.props.imageUrl})`}} >
                    <div className="card-description">
                      <h2>{ this.props.name }</h2>
                    </div>
                    <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
          </div>
            )
  }
}



export default AppartementCard
