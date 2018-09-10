import React from "react";
import Carousel from "../components/carousel.js"
import carouselData from '../utils/data.js';

class Work extends React.Component {



render() {
  return(
    <div>
      <Carousel
        carouselData={carouselData}
      />
    </div>
  )
}
}
export default Work;
