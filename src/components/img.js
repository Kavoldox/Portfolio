import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Img extends React.Component {
  render() {
    return (
      <div>
        {/* <CSSTransition
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          classNames="img-move"
          unmountOnExit
          > */}
          <img className="image" src={this.props.src}/>
        {/* </CSSTransition> */}
      </div>
    )
  }
}

export default Img
