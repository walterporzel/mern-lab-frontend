import React, { Component } from 'react'

class Country extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         id: this.props.id,
    //         name: this.props.name,
    //         capital: this.props.capital,
    //         region: this.props.region,
    //         flag: this.props.flag
    //     }
    // }






render() {
    console.log(this.props, this.state)

    return(
        <div>
        <ul>
        { this.props.country.map (country => <li>{country.name}</li>)}
        </ul>
        </div>

    )
  }
}
export default Country