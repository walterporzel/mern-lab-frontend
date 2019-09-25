import React, { Component } from 'react';
import './App.css';
import Country from '../src/country';
import { Route, Link, Switch } from "react-router-dom";

import Create from '../srt/create';
import Delete from '../srt/Delete';
import Edit from '../srt/edit';
import Update from '../srt/update';


WebFont.load({
  google: {
    families: ['Big Shoulders Text', 'Roboto']
  }
});


class App extends Component {
  render() {
    return (
          <div>
            <nav>
              <Link to="/">
                <h1>Home</h1>
              </Link>
              </nav>
              />
              </div>

            <div>
            <Link to="/country">Country</Link>
            <Country {...CountryData }/>
            <Route 
            path="/country" 
            exact component={ Name }
            />
            </div>

            <div>
            <Link to="/create">Create</Link>
            <Create {...Create }/>
            <Route 
            path="/create" 
            exact component={ Create }
            />
            </div>


            <div>
            <Link to="/delete">Delete</Link>
            <Delete {...Delete }/>
            <Route 
            path="/delete" 
            exact component={ Delete }
            />
            </div>
            
            <div>
            <Link to="/edit">Edit</Link>
            <Country {...Edit }/>
            <Route 
            path="/edit" 
            exact component={ Edit }
            />
            </div>
            
            <div>
            <Link to="/update">Update</Link>
            <Update {...Update }/>
            <Route 
            path="/update" 
            exact component={ Update }
            />
            </div>
    )
  }
}

export default App
