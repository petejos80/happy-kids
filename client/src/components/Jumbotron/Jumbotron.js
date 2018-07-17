import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 10, textAlign: "center", marginTop:0, marginLeft:120, marginRight: 120}}
    className="jumbotron"
  >
  <h1 className="display-1">Welcome to Happy Kids Accessories!</h1>
        <p className="lead">Personalized Wooden Toys</p>
       
    {children}
  </div>
);

export default Banner;
