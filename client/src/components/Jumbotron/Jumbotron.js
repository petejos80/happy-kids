import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome to Happy Kids Accessories!</h1>
        <p className="lead">Personalized Wooden Toys</p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
  );
};

export default Banner;
