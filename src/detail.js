import React, { Component } from "react"
import axios from 'axios';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          countries: {}
        };
    }

      componentDidMount() {
        axios.get(`https://obscure-cove-57402.herokuapp.com${this.props.match.url}`)
        .then(res => {
          const countries = res.data;
          this.setState({countries});
        })
      }
    
    render() {
        return(
            <div>
                <img src={this.state.countries.flag} />
                <h1>{this.state.countries.name}</h1>
                <p>Capital: {this.state.countries.capital}</p>
                <p>Population: {this.state.countries.population}</p>
            </div>
        )
      }
    }

export default Detail