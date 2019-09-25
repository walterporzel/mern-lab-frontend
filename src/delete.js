import React, { Component } from "react"

class Delete extends Component {
    constructor(props) {
        super(props)
            
            this.state = {
                name:"",
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
                method: "DELETE"
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
                <input type="submit" value="Submit" />
            </form>
        )
      }
    }
    
    export default Delete