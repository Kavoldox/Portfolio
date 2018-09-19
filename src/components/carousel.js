import React from 'react';
import Workblock from "../components/workblock.js";
import ScrollInfo from "../components/scrollInfo.js";
import Button from "./button.js"
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
  e.deltaY < 0 ? this.goToPrevSlide(e) : this.goToNextSlide(e);
}

goToPrevSlide = (e) => {

  e.preventDefault();

    let index = this.state.activeIndex;
    const slides = this.props.carouselData;
    const slidesLength = slides.length;

    this.setState({
      activeIndex: index === 0 ? index = slidesLength - 1 : index - 1
    });
}

goToNextSlide = (e) => {
  e.preventDefault();

   let index = this.state.activeIndex;
   const slides = this.props.carouselData;
   const slidesLength = slides.length;

   this.setState({
     activeIndex: index === slidesLength - 1 ? 0 : index +1
   });
 }

  render() {
    const length = this.props.carouselData.length;
    return(
      <PageTransition>
        <div className="work">
          <ScrollInfo />
          <div onWheel={this.onWheel}>
              {this.props.carouselData.map((data, index) => (
                <Workblock
                  key={data.id}
                  index={index}
                  length={length}
                  onWheel={this.onWheel}
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
