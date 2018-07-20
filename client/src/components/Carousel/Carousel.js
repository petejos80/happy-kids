import React from 'react';
import "./Carousel.css"
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../images/bluegrey.jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src:  '../images/greenpacclip.jpg',
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: '../images/purellow.jpg',
    altText: 'Slide 3',
    caption: '',
    header: ''
  }
];



const Caro = () => <UncontrolledCarousel className="carousel" items={items} />;


export default Caro;