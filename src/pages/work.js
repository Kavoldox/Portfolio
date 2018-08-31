import React from "react";
import Carousel from "../components/carousel.js"
import Workinfo from "../components/workinfo.js"
import carouselData from '../utils/data.js';

class Work extends React.Component {



render() {
  return(
    <div>
      <Carousel

        carouselData={carouselData}
      />
      {/* {this.state.open ?
        <Workinfo {...this.props} />
        : null
      } */}
    </div>
  )
}
}
export default Work;
