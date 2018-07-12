import React from "react";
import { Jumbotron } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-1">Rattlers</h1>
        <p className="lead">Personalized Rattlers</p>
        <img src="images/heart.jpg"alt="img" width="400px" />
        <hr className="my-1" />

        <h1 className="display-2">Rattlers!</h1>
        <p className="lead">Personalized Rattlers</p>
        <img src="images/bluegrey.jpg"alt="img" width="400px" />
        <hr className="my-2" />

        <h1 className="display-3">Rattlers!</h1>
        <p className="lead">Personalized Rattlers</p>
        <img src="images/tealone.jpg"alt="img" width="400px" />
        <hr className="my-3" />
      </Jumbotron>
    </div>
  );
};

export default Home;