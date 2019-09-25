import React, { Component } from "react"

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            population: this.props.population
        }
    }
}

this.changePopulation = this.changePopulation.bind(this)

}

changePopulation() {
    this.setState({
        population: "number"
    })
}

render() {
    console.log(this.props, this.state)

    return(
        <div>
            <p>{ this.state.population }</p>
            <button onClick={ this.changePopulation }>Delete the Capital</button>
        </div>
    )
  }

export default Update