import React, { Component } from 'react'

class Country extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            name: this.props.name,
            capital: this.props.capital,
            region: this.props.region,
            flag: this.props.flag
        }
    }
}





render() {
    console.log(this.props, this.state)

    return(
        <div>
            <p>{ this.state.id }</p>
            <p>{ this.state.name }</p>
            <p>{ this.state.capital }</p>
            <p>{ this.state.region }</p>
            <p>{ this.state.flag }</p>
        </div>
    )
  }

export default Country