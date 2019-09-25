import React, { Component } from "react"

class Edit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            region: this.props.region
        }
    }
}

this.changeRegion = this.changeRegion.bind(this)

}

changeRegion() {
    this.setState({
        region: "string"
    })
}

render() {
    console.log(this.props, this.state)

    return(
        <div>
            <p>{ this.state.region }</p>
            <button onClick={ this.changeRegion }>Change Region</button>
        </div>
    )
  }

export default Edit