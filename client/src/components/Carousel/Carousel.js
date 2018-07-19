import React, { Component } from 'react';
import "./Carousel.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from 'reactstrap';

const items = [
  {
    src: '../images/bluegrey.jpg',
    altText: '',
    caption: '',
  },
  {
    src: '../images/greenpacclip.jpg',
    altText: '',
    caption: ''
  },
  {
    src: '../images/purellow.jpg',
    altText: '',
    caption: ''
  }
];

class Caro extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
      <Container>
      <p className="p-style">Voluptate tempor occaecat duis dolor.Cillum culpa quis culpa cupidatat aliquip exercitation deserunt est.
        Ea enim deserunt dolore nisi ex esse cillum do fugiat id veniam nulla. Aute excepteur ullamco commodo minim reprehenderit culpa aliquip nisi enim et ea magna.
        Sit cupidatat est laborum esse velit occaecat magna Lorem id. Sunt pariatur aliquip consectetur eiusmod voluptate anim aliqua.
        Velit amet nostrud consequat adipisicing qui magna. Consequat do non adipisicing aliqua exercitation incididunt elit adipisicing eiusmod labore.
        Lorem ex deserunt exercitation laborum exercitation ea.
        Nulla Lorem voluptate laboris Lorem amet reprehenderit consequat labore ea ipsum minim enim aute.
        Sunt quis laborum minim nisi enim dolore id ex culpa non cupidatat.
        In et Lorem irure commodo aliqua minim velit minim ad ad Lorem consectetur officia.
        Ad deserunt reprehenderit voluptate ex enim aute nostrud id proident consectetur pariatur eu sunt cupidatat.
        Adipisicing do minim cillum irure nisi non laboris consequat proident do qui elit ex.
        Occaecat Lorem cillum pariatur minim tempor exercitation irure nostrud id amet commodo Lorem sunt.
        </p>
        
        <Carousel className="carousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </Container>
        </div>
        );
  }
}


export default Caro;