import React from "react";
import Carousel from "../components/carousel.js"
import Workinfo from "../components/workinfo.js"
import carouselData from '../utils/data.js';

class Work extends React.Component {
  state = {
    open: false
  }

  openInfos = (e) => {
    e.preventDefault();
    this.setState({ open: !this.state.open })
  }

render() {
  return(
    <div>
      <Carousel
        openInfos={this.openInfos}
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
