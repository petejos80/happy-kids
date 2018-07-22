import React, {} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Beads from "./pages/Beads";
import Bracelets from "./pages/Bracelets"
import Keychains from "./pages/Keychains"
import Pacifierholders from "./pages/Pacifierholders"
import Rattlers from "./pages/Rattlers"
import Teethers from "./pages/Teethers"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from './components/Login';
import Register from './components/Register'
import About from './pages/About'
import Items from './pages/Items';
import Shop from './pages/Shop'

const App = () => (
  <Router> 
    <div> 
   <Nav />
   <Banner />

      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/items' component={Items} />
        <Route path='/register' component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beads" component={Beads} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/bracelets" component={Bracelets} />
        <Route exact path="/keychains" component={Keychains} />
        <Route exact path="/pacifierholders" component={Pacifierholders} />
        <Route exact path="/rattlers" component={Rattlers} />
        <Route exact path="/teethers" component={Teethers} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      <Footer />
      </div>
  </Router>  
);

document.getElementById('root');

export default App;

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     };
//   }

//   componentDidMount() {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
//     axios.get('/api/item')
//       .then(res => {
//         this.setState({ items: res.data });
//         console.log(this.state.items);
//       })
//       .catch((error) => {
//         if(error.response.status === 401) {
//           this.props.history.push("/login");
//         }
//       });
//   }

//   logout = () => {
//     localStorage.removeItem('jwtToken');
//     window.location.reload();
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="panel panel-default">
//           <div class="panel-heading">
//             <h3 class="panel-title">
//               ITEM CATALOG &nbsp;
//               {localStorage.getItem('jwtToken') &&
//                 <button class="btn btn-primary" onClick={this.logout}>Logout</button>
//               }
//             </h3>
//           </div>
//           <div class="panel-body">
//             <table class="table table-stripe">
//               <thead>
//                 <tr>
//                   <th>name</th>
//                   <th>price</th>
//                   <th>description</th>
//                   <th>date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.state.items.map(item =>
//                   <tr>
//                     <td><Link to={`/show/${item._id}`}>{item.name}</Link></td>
//                     <td>{item.price}</td>
//                     <td>{item.description}</td>
//                     <td>{item.date}</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


