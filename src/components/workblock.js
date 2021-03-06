import React from 'react'
import Link from "gatsby-link";
import anime from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Button from "./button.js"
import "../stylesheets/workblock.scss"



class Workblock extends React.Component {

  state = {}


  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { title, resume, type, techno, image, index, activeIndex, length, path, onWheel, goToPrevSlide, goToNextSlide } = this.props;
    const { width } = this.state;
    const isMobile = width <= 1024;
    return(

      <div className={
        index == activeIndex ? "carousel-active"
        : "carousel-off"
      }
      >
        <div className="workblock">
          <div className="workblock-left">
            <div className="workblock-left-info">
              <div className="workblock-left-info-number">
                  <div className="sliding">
                    <FontAwesomeIcon
                      icon='arrow-left'
                      transform="grow-8"
                      className="burger"
                      onClick={goToPrevSlide}
                    />
                    <div className="activeindex">
                      <CSSTransition
                        in={activeIndex == index}
                        timeout={1000}
                        classNames="example"
                        unmountOnExit
                        >
                          <p>{activeIndex + 1}</p>
                        </CSSTransition>
                      <p> / {length}</p>
                    </div>
                    <FontAwesomeIcon
                      icon='arrow-right'
                      transform="grow-8"
                      className="burger"
                      onClick={goToNextSlide}
                    />
                  </div>
              </div>
              <div className="workblock-left-info-title">
                <CSSTransition
                  in={activeIndex == index}
                  timeout={1000}
                  classNames="example"
                  unmountOnExit
                  >
                    <h2>{title}</h2>
                  </CSSTransition>
                  <CSSTransition
                    in={activeIndex == index}
                    timeout={1000}
                    classNames="barre"
                    unmountOnExit
                    >
                      <div className="ex"/>
                    </CSSTransition>
                </div>
                <div className="workblock-left-info-info">
                  <CSSTransition
                    in={activeIndex == index}
                    timeout={2000}
                    classNames="example"
                    unmountOnExit
                    >
                      <p>
                        {resume}
                      </p>
                    </CSSTransition>
                </div>
                <div className="info-block">
                  <div className="type">
                    <p className="info-title">Type</p>
                    <CSSTransition
                      in={activeIndex == index}
                      timeout={1000}
                      classNames="example"
                      unmountOnExit
                      >
                        <p>{type}</p>
                      </CSSTransition>
                    </div>
                    <div>
                      <p className="info-title">Techno</p>
                      <CSSTransition
                        in={activeIndex == index}
                        timeout={1000}
                        classNames="example"
                        unmountOnExit
                        >
                      <ul className="info-techno">
                        {techno.map((tech, i) => (
                          <li key={i}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </CSSTransition>
                  </div>
                </div>
              </div>
            </div>
            <div className="workblock-right">
              <CSSTransition
                in={activeIndex == index}
                timeout={1000}
                classNames="image"
                unmountOnExit
                >
                <div>
                  <img src={require(`../utils/work/${image}.jpg`)}/>
                </div>
              </CSSTransition>
          </div>
        </div>
        <Button path={path} name="Voir"/>
      </div>
    )
  }
}


export default Workblock;
