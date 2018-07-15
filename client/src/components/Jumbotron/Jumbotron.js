import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 10, textAlign: "center", marginTop:0, marginLeft:120, marginRight: 120}}
    className="jumbotron"
  >

       
    {children}
  </div>
);

export default Banner;
