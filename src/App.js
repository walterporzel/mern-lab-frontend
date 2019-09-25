import React, { Component } from 'react';
import './App.css';
import Country from '../src/country';
import { Route, Link, Switch } from "react-router-dom";

import Create from '../src/create';
import Delete from '../src/delete';
// import Edit from '../srt/edit';
// import Update from '../srt/update';
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
        <h1>Sup countries</h1>
        </Link>
        <Link to="/create">Create</Link>
        <Link to="/delete">Delete</Link>
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
        </div>
        
        
        /* <ul>
        { this.state.countries.map (country => <li>{country.name}</li>)}
        </ul>
        </div> */
      )
      }
    }
    
 /* //     return ( */
// //           <div>
// //             <nav>
// //               <Link to="/">
// //                 <h1>Home</h1>
// //               </Link>
// //               <Route  *
             
// //               exact component={ Home }
              
// //               />
// //               </div>

// // //             <div>
// // //             <Link to="/country">Country</Link>
// // //             <Country {...CountryData }/>
// // //             <Route 
// //             path="/country" 
// //             exact component={ Name }
// //             />
// //             </div>

            // <div>
            // <Link to="/create">Create</Link>
            // <Create {...Create }/>
            // <Route 
            // path="/create" 
            // exact component={ Create }
            // />
            // </div>


//             <div>
//             <Link to="/delete">Delete</Link>
//             <Delete {...Delete }/>
//             <Route 
//             path="/delete" 
//             exact component={ Delete }
//             />
//             </div>
            
//             <div>
//             <Link to="/edit">Edit</Link>
//             <Country {...Edit }/>
//             <Route 
//             path="/edit" 
//             exact component={ Edit }
//             />
//             </div>
            
//             <div>
//             <Link to="/update">Update</Link>
//             <Update {...Update }/>
//             <Route 
//             path="/update" 
//             exact component={ Update }
//             />
//             </div>
//     )
//   }
// }*/

export default App
