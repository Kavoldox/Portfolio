import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Title extends React.Component {
  render() {
    return (
      <div>
        <CSSTransition
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          classNames="title-move"
          unmountOnExit
          >
          <h4 className="title">{this.props.name}</h4>
        </CSSTransition>
      </div>
    )
  }
}

export default Title
