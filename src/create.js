import React, { Component } from "react"

class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {
            terrain: this.props.terrain
        }
    }
}

this.changeTerrain = this.changeTerrain.bind(this)

}

changeTerrain() {
    this.setState({
        terrain: "string"
    })
}

render() {
    console.log(this.props, this.state)

    return(
        <div>
            <p>{ this.state.terrain }</p>
            <button onClick={ this.changeTerrain }>Create the Terrain</button>
        </div>
    )
  }

export default Create