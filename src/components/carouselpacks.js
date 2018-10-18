import React from "react";
import anime from 'animejs'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

class CarouselPacks extends React.Component {

  state = {
  }

  componentDidMount() {
    anime({
      targets: '.workprint-packs-blocks-slides',
      translateX: '-15em',
      delay: function(target, index) {
        // 100ms delay multiplied by every div index, in ascending order
        return index * 200;
      },
    });
  }


  showSlide = (e) => {
    e.preventDefault();
    const index = Number(e.target.id)

    this.setState({
      activeIndex: index,
      src: e.target.src,
      name: e.target.name,
      id: index,
    })
  }


  render() {
  //   const { open } = this.state;
  //   const currentClassNames = classNames('links', {
  //   'links-open': open,
  // });
  //   const burgerClasses = classNames('burger', {
  //   'burger-open': open,
  // });
  const {activePacks, cat} = this.props;
  const { activeIndex, src, name, id } = this.state;
    return (
      <div className="workprint-packs-blocks">
        {/* <div className="workprint-packs-blocks-cat">{cat}</div> */}
        <div className="workprint-packs-blocks-active">
          <TransitionGroup>
            <CSSTransition
              key={activeIndex}
              timeout={1000}
              classNames="title-move"
              unmountOnExit
              >
                <h4 className="title">{name}</h4>
              </CSSTransition>
            </TransitionGroup>
                  {/* <div className="title-border"/> */}
          <TransitionGroup>
          <CSSTransition
            key={activeIndex}
            timeout={3000}
            classNames="img-move"
            unmountOnExit
            >
            <img className="image" src={src}/>
          </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="workprint-packs-blocks-slides">
          {activePacks.map((packs, index) => {
            return (
              <div onClick={this.showSlide} className="workprint-packs-blocks-slides-block" key={index} >
                {/* <div className="workprint-packs-blocks-block-title">{packs.name}</div> */}
                <img id={index} name={packs.name} className="workprint-packs-blocks-slides-block-img" src={require(`../utils/joustra/${cat}/${packs.image}`)} />
              </div>
            )})}
        </div>
      </div>
    )
  }
}

export default CarouselPacks;
