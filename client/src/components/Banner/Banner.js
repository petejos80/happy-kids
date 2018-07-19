import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = (props) => (
  <div>
  <Jumbotron style={{ height: 300, clear: "both", backgroundColor:"#888", textAlign: "center", marginTop:0, marginLeft:120, marginRight: 120}}
> 
  <h1 style={{fontSize:80}} className="display-1">Welcome to Happy Kids Accessories!</h1>
        <p className="lead">Personalized Wooden Toys</p>
    
    </Jumbotron>
    
  </div>
);

export default Banner;
