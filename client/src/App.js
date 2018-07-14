import React, {} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Banner from "./components/Jumbotron";
import beads from "./pages/beads"
import bracelets from "./pages/bracelets"
import keychains from "./pages/keychains"
import pacifierholders from "./pages/pacifierholders"
import rattlers from "./pages/rattlers"
import teethers from "./pages/teethers"
import Books2 from "./pages/Books2"



import Example from "./components/Carousel"


const App = () => (
  <Router>
    <div>
      <Nav />
      <Banner />
      <Example />
      <Switch>
        <Route exact path="/beads" component={beads} />
        <Route exact path="/bracelets" component={bracelets} />
        <Route exact path="/keychains" component={keychains} />
        <Route exact path="/pacifierholders" component={pacifierholders} />
        <Route exact path="/rattlers" component={rattlers} />
        <Route exact path="/teethers" component={teethers} />
        <Route exact path="/books2" component={Books2} />
      </Switch>
    </div>
  </Router>
);

export default App;
