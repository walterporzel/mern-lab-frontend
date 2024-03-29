import React, { Component } from "react"

class Update extends Component {
    constructor(props) {
        super(props)
            
            this.state = {
                name:"",
                capital: "",
                region: "",
                population: null
            }

            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }


    
        handleChange(event) {
            this.setState({
              [event.target.name]: event.target.value,
            });
          }

handleSubmit(event) {
        event.preventDefault();
        const url = "https://obscure-cove-57402.herokuapp.com/";
        fetch(url + this.state.name, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "*/*",
                "Host": "https://obscure-cove-57402.herokuapp.com/"
         },
        body: JSON.stringify ({
            name: this.state.name,
            capital: this.state.capital,
            region: this.state.region,
            population: this.state.population,
        
        })
    })
        

         
}

render() {
    console.log(this.props, this.state)

    return(
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
                Capital:
                <input type="text" name="capital" onChange={this.handleChange} />
            </label>
            <label>
                Region:
                <input type="text" name="region" onChange={this.handleChange} />
            </label>
            <label>
                Population:
                <input type="text" name="population" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default Update