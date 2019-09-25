import React from "react"

class AppartementCard extends React.Component {
  handleClick = () => {
    console.log("works")
  }

  render() {
    return (
          <div onClick={this.handleClick} className="card"style={{backgroundImage: `url(${this.props.imageUrl})`}} >
              <h2 className="card-description">{ this.props.name }</h2>
              <p className="card-category">{this.props.price} {this.props.priceCurrency}</p>
          </div>
            )
  }
}



export default AppartementCard
