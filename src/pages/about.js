import React from 'react'
import anime from 'animejs'
import PageTransition from 'gatsby-plugin-page-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Skills from "../components/skills.js"
import ScrollInfo from "../components/scrollInfo.js"
import "../stylesheets/about.scss"

const skills = [
  {
    'type': 'Design',
    'resume': 'Conception de chartes print & web, maquettage web, wireframe',
    'tags': ['UI', 'UX', 'Ergonomie', 'Adobe'],
    'logs': ['Photoshop', 'InDesign', 'Illustrator', 'DreamWeaver', 'Premiere' ],
  },
  {
    'type': 'Front-End',
    'resume': 'Intégration de maquettes, création d\'expériences utilisateur, intéraction poussée.',
    'tags': ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    'logs': ['Jquery', 'React', 'Sass', 'Stylus', 'Bootstrap'],
  },
  {
    'type': 'Back-End',
    'resume': 'Mettre au point des bases de données et les manipuler, apprivoiser les CMS',
    'tags': ['CMS', 'API', 'Requête', 'Composer'],
    'logs': ['PHP', 'PDO', 'MySQL', 'WordPress'],
  },
  {
    'type': 'Environnement',
    'resume': 'Rester en veille, s\'autoformer, rendre un code propre',
    'tags': ['Veille', 'Qualité Web', 'W3C', 'Agile'],
    'logs': ['Git', 'Opquast', 'Npm'],
  }
]


class About extends React.Component {

  state = {
    activeIndex: 0,
    translateValue: 0
  }

  // componentDidMount() {
  //   const titleTimeLine = anime.timeline();
  //
  //     titleTimeLine
  //     .add({
  //       targets: '.about-pres-icon',
  //       rotate: 20,
  //       duration: 400,
  //     })
  //     .add({
  //       targets: '.about-pres-icon',
  //       rotate: -40,
  //       duration: 400,
  //     })
  // }

  goToSlide = (evt) => {
    const { id } = evt.target;
    const idIndex = Number(id);

    if(this.state.activeIndex < idIndex) {
      return this.setState(prevState => ({
          activeIndex: idIndex,
          translateValue: prevState.translateValue + ((idIndex - this.state.activeIndex ) * -(this.slideWidth()))
        })
      )
    }

    this.setState(prevState => ({
      activeIndex: idIndex,
      translateValue: prevState.translateValue + ((idIndex - this.state.activeIndex ) * -(this.slideWidth()))
    }));
  }

  onWheel = (e) => {
    e.deltaY < 0 ? this.goToPrevSlide(e) : this.goToNextSlide(e);
  }

  goToNextSlide = (e) => {

    e.preventDefault();

    const slidesLength = skills.length;

    if(this.state.activeIndex === skills.length - 1) {
      return this.setState({
        activeIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      activeIndex: prevState.activeIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  goToPrevSlide = (e) => {
    e.preventDefault();

    const slidesLength = skills.length;

    if(this.state.activeIndex === 0) {
      return this.setState({
        activeIndex: 0,
        translateValue: 0,
      })
    }

    this.setState(prevState => ({
      activeIndex: prevState.activeIndex - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }));
   }

  anim = (evt) => {
    const { id } = evt.target.parentNode
      anime({
        targets: `#${id} p`,
        translateY: '-5em',
        easing: 'easeInOutExpo',
        duration: 500
      });
  }

  animReverse = (evt) => {
    const { id } = evt.target.parentNode
      anime({
        targets: `#${id} p`,
        translateY: '5em',
        easing: 'easeInOutExpo',
        duration: 500
      });
  }

  slideWidth = () => {
     return document.querySelector('.active').clientWidth
  }

  render () {
    const purple = '#3d2b3b';
    const purple2 = '#8a118e';
    return (
      <PageTransition transitionTime={500}>
        <div className="about">
          <div className="about-pres">
            <h3>Timothé GOSSET</h3>
            <span>HEY !</span>
            {/* <FontAwesomeIcon
              icon='hand-paper'
              transform="grow-1"
              className='about-pres-icon'
            /> */}
            <p>J'habite en Normandie et je suis développeur web. Ayant un baguage marketing et graphique, et passionné par le design et l'intéraction,
              j'axe mon travail en développement web côté front. </p>
            <div className="about-pres-icons">
              <a href="https://github.com/Kavoldox" target="_blank">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  transform="grow-5"
                  color={purple}
                />
              </a>
              <a href="https://www.linkedin.com/in/timoth%C3%A9-gosset-%F0%9F%91%8B-39122a151/" target="_blank">
                <FontAwesomeIcon
                  icon={['fab', 'linkedin']}
                  transform="grow-5"
                  color={purple}
                />
              </a>
            </div>
          </div>
          <div className="about-titles">
            <div className="about-titles-block"
            >
              {/* <ScrollInfo /> */}
              {skills.map((skill, index) => (
                <div
                  id={skill.type}
                  className="about-titles-block-wrapper"
                  key={index}
                >
                  <div
                    onClick={this.goToSlide}
                    onMouseOver={this.anim}
                    onMouseLeave={this.animReverse}
                    style={{
                      cursor: 'pointer',
                    }}
                    id={index}
                    className={ this.state.activeIndex === index ?
                    "about-titles-block-active"
                    :
                    "about-titles-block-round"
                    }
                  />
                  <p className="about-titles-block-title">
                    {skill.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="about-skills"
            onWheel={this.onWheel}
            style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.7s'
          }}>
            {skills.map((skill, i) => (
              <Skills
                {...skill}
                key={i}
                onWheel={this.onWheel}
                index={i}
                activeIndex={this.state.activeIndex}
              />
            ))}
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default About;
