import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron>

        <div class="container">
  <div class="row">
    <div class="col">
    <h1 className="display-1">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/heart.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-1" />
    </div>
    <div class="col">
    <h1 className="display-2">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/bluegrey.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-2" />
    </div>
  </div>
  <div class="row">
    <div class="col">
    <h1 className="display-3">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/tealone.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-3" />
    </div>
    <div class="col">
    <h1 className="display-3">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/tealone.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-3" />
    </div>
    <div class="col">
    <h1 className="display-3">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/tealone.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-3" />
    </div>
    <div class="col">
    <h1 className="display-3">Beads!</h1>
        <p className="lead">Personalized Beads</p>
        <img src="../images/tealone.jpg"alt="img" width="400px" />
        <h3> name and description and price goes here</h3>
        <hr className="my-3" />
    </div>
  </div>
</div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
