import React, { Component } from 'react'
import { Link } from "react-router-dom"; 

class Country extends Component {
    
render() {
    console.log(this.props, this.state)

    return(
        <div>
        <ul>
        { this.props.country.map (country => 
        <Link to={"/" + country.name}>
        <li>{country.name}</li>
        </Link>
        )}
        </ul>
        </div>

    )
  }
}
export default Country