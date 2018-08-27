import React from 'react'
import Link from "gatsby-link";
import anime from 'animejs'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../stylesheets/workblock.scss"
import Workinfo from '../components/workinfo.js'
// const lol = anime({
//   targets: '.button',
//   backgroundColor: '#3d3560',
//   color: '#FFF',
//   borderRadius: ['0em', '2em'],
// });


class Workblock extends React.Component {

  state = {
    on: false
  }

  animate = (back, color, border) => {
    anime({
      targets: '.button',
      backgroundColor: back,
      color: color,
      borderRadius: border,
    });
 }

 hoverButton = () => {
  this.animate('linear-gradient(to top, #65799b, #5e2563)', '#FFF', ['0em','2em']);
 }

 endHoverButton = () => {
  this.animate('#FFF', '#3d3560', '0');
 }

  render() {
    const { title, resume, type, techno, image, index, activeIndex, length, path } = this.props
    return(
      <div className={
        index == activeIndex ? "carousel carousel-active"
        : "carousel"
      }
      >
        <div className="workblock">
          <div className="workblock-left">
            <div className="workblock-left-info">
              <div className="workblock-left-info-number">
                <p>{activeIndex + 1} / {length}</p>
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
                    in={activeIndex === index}
                    timeout={1000}
                    classNames="barre"
                    unmountOnExit
                    >
                      <div className="ex"/>
                    </CSSTransition>
                </div>
                <div className="workblock-left-info-info">
                  <CSSTransition
                    in={activeIndex === index}
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
                      in={activeIndex === index}
                      timeout={1000}
                      classNames="example"
                      unmountOnExit
                      >
                        <p>{type}</p>
                      </CSSTransition>
                    </div>
                    <div>
                      <p className="info-title">Technos</p>
                      <CSSTransition
                        in={activeIndex === index}
                        timeout={1000}
                        classNames="example"
                        unmountOnExit
                        >
                      <ul className="info-techno">
                        {techno.map(tech => (
                          <li>
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
                in={activeIndex === index}
                timeout={1000}
                classNames="image"
                unmountOnExit
                >
                <div>
                  <img src={image}/>
                </div>
              </CSSTransition>
          </div>
        </div>
        <Link
          to={{
            pathname: `/work/${path}`,
            props: this.props,
          }}
          >
            <button className="button" onMouseOver={this.hoverButton} onMouseLeave={this.endHoverButton}>Voir</button>
          </Link>
      </div>
    )
  }
}


export default Workblock;
