import React, {} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import beads from "./pages/beads"
import bracelets from "./pages/bracelets"
import keychains from "./pages/keychains"
import pacifierholders from "./pages/pacifierholders"
import rattlers from "./pages/rattlers"
import teethers from "./pages/teethers"
import Home from "./pages/home"
import Contact from "./pages/Contact"
import Caro from "./components/Carousel"



const App = () => (
  <Router>
    <div>     
   <Nav />
   <Banner />
   <Caro />
         <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/beads" component={beads} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/bracelets" component={bracelets} />
        <Route exact path="/keychains" component={keychains} />
        <Route exact path="/pacifierholders" component={pacifierholders} />
        <Route exact path="/rattlers" component={rattlers} />
        <Route exact path="/teethers" component={teethers} />
      </Switch>
      <Footer />
    </div>
  </Router>
  
);

export default App;
