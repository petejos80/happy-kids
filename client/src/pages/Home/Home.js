import React from "react";
import {
  Row, Col
} from 'reactstrap';
import Caro from "../../components/Carousel";
import Paragraph from "../../components/Paragraph"


const Home = props => {
  return (
  <div>
    
      <Row>
        <Col xs="6"></Col>
          <Col xs="6"></Col>
      <Paragraph />
      <Caro />
      </Row>
      
      </div>
  );
};

export default Home;
