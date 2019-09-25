import React, { Component } from "react"

class Delete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            capital: this.props.capital
        }
    }
}

this.changeCapital = this.changeCapital.bind(this)

}

changeCapital() {
    this.setState({
        capital: "null"
    })
}

render() {
    console.log(this.props, this.state)

    return(
        <div>
            <p>{ this.state.capital }</p>
            <button onClick={ this.changeCapital }>Delete the Capital</button>
        </div>
    )
  }

export default Delete