import React from "react"

class AppartementCard extends React.Component {
  handleClick = () => {
    this.props.selectedFlat(this.props.lat, this.props.lng,this.props.name)
  }

  render() {
    return (
          <div onClick={this.handleClick} className={`card ${this.props.selectedFlatName == this.props.name ? "active" : ""}`} style={{backgroundImage: `url(${this.props.imageUrl})`}} >
              <h2 className="card-description">{ this.props.name }</h2>
              <p className="card-category">{this.props.price} {this.props.priceCurrency}</p>
          </div>
            )
  }
}



export default AppartementCard
