import React from 'react';
import Workblock from "../components/workblock.js";
import PageTransition from 'gatsby-plugin-page-transitions'
import anime from 'animejs'
import Link from 'gatsby-link'

class Carousel extends React.Component {
  state = {
    activeIndex: 0,
  }

goToSlide(index) {
  this.setState({
    activeIndex: index,
  });
}

onWheel = (e) => {
  if (e.deltaY > 0) {
    this.goToPrevSlide(e)
  }
  this.goToNextSlide(e);
}

goToPrevSlide = (e) => {
  e.preventDefault();

    let index = this.state.activeIndex;
    const slides = this.props.carouselData;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.animate;

    this.setState({
      activeIndex: index
    });
}

goToNextSlide = (e) => {
  e.preventDefault();

   let index = this.state.activeIndex;
   const slides = this.props.carouselData;
   const slidesLength = slides.length - 1;

   if (index === slidesLength) {
     index = -1;
   }

   ++index;

   this.setState({
     activeIndex: index
   });
 }

  render() {
    const length = this.props.carouselData.length;
    return(
      <PageTransition>
        <div className="work">
          <div className="work-block" onWheel={this.onWheel}>
              {this.props.carouselData.map((data, index) => (
                <Workblock
                  key={index}
                  index={index}
                  length={length}
                  activeIndex={this.state.activeIndex}
                  {...data}
                />
              ))}
            </div>
          </div>
      </PageTransition>
    )
  }
}

export default Carousel;
