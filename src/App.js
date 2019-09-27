import React, { Component } from 'react';
import './App.css';
import Country from '../src/country';
import { Route, Link, Switch } from "react-router-dom";

import Create from '../src/create';
import Delete from '../src/delete';
// import Detail from '../src/detail';
import Update from '../src/update';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    axios.get(`https://obscure-cove-57402.herokuapp.com/`)
    .then(res => {
      const countries = res.data;
      this.setState({countries});
    })
  }


  render() {
      return (
        <div>
          <Link to="/">
        <h1>Countries</h1>
        </Link>
        <Link to="/create">Create</Link>
        <Link to="/delete">Delete</Link>
        <Link to="/update">Update</Link>
        
        <Route
        path="/"
        exact render = { routerProps => (
          <Country country={this.state.countries} {...routerProps}/>
        )}/>
        <Route 
            path="/create" 
            exact component={ Create }/>
        <Route
          path="/delete"
          exact component={ Delete }/>
        <Route
          path="/update"
          exact component={ Update }/>
        {/* <Route
          path="/:name"
          exact render={(routerProps) => (
              <Detail
              {...routerProps}
              /> */}
          {/* )}/> */}
        </div>
      )
      }
    }
    
export default App
