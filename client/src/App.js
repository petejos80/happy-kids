import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Banner from "./components/Jumbotron";
import Callback from "./Callback/Callback.js"

// AuthO
import Auth from './Auth/Auth.js';
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log(nextState)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    console.log("?????????????")
    auth.handleAuthentication();
  }
}

class App extends Component { 

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav auth={auth} />
            <Banner />
            <Switch>
              <Route exact path="/" render={(props) => <Items auth={auth} {...props}/>} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback  {...props} /> 
              }}/>
              <Route exact path="/items" component={Items} />
              <Route exact path="/items/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


// const App = () => (
  
// );

export default App;
