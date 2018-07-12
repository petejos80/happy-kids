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





const App = () => (
  <Router>
    <div>
      <Nav />
      <Banner />
      <Switch>
        <Route exact path="/pages/beads" component={beads} />
        <Route exact path="/pages/bracelets" component={bracelets} />
        <Route exact path="/pages/keychains" component={keychains} />
        <Route exact path="/pages/pacifierholders" component={pacifierholders} />
        <Route exact path="/pages/rattlers" component={rattlers} />
        <Route exact path="/pages/teethers" component={teethers} />
      </Switch>
    </div>
  </Router>
);

export default App;
