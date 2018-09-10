import React from 'react'
import anime from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../stylesheets/scrollinfo.scss"

const Time = (selector) => {
  document.querySelector(selector).style.opacity = 0;
}

class ScrollInfo extends React.Component {

  componentDidMount() {
      anime({
        targets: '.scrollInfo',
        translateY: 30,
        direction: 'alternate',
        loop: 10,
      });
  }


  render() {
    return(
      <div className="scrollInfo">
        <p>Scroll to slide</p>
        <div className="icon">
          <FontAwesomeIcon
            icon='long-arrow-alt-down'
            transform="grow-10"
            className='circleIcon'
          />
        </div>
      </div>
    )
  }
}

export default ScrollInfo;
