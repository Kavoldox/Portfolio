import React from 'react'
import anime from 'animejs'
import PageTransition from 'gatsby-plugin-page-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../stylesheets/about.scss"




class About extends React.Component {

  state= {
    on: false,
  }

  anim = () => {
      anime({
        targets: '.pencil',
 translateX: 250,
 direction: 'alternate',
      });
  }

  render () {
    const purple = '#3d3560';
    const purple2 = '#8a118e';
    return (
      <PageTransition transitionTime={500}>
        <div className="about">
          <div className="about-pres">
            <h3>Je suis Tim</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="about-skills">
            <div className="about-skills-design">
              <div className="about-skills-title">
                <FontAwesomeIcon
                  icon="pencil-ruler"
                  transform="grow-50"
                  color={purple}
                  className="pencil"
                  onClick={this.anim}
                />
                <h4>Design</h4>
              </div>
              <div className="skills">
                <h5>Adobe</h5>
              </div>
              <div className="skills">
                <h5>Autres</h5>
              </div>
            </div>
            <div className="about-skills-dev">
              <div className="about-skills-title">
                <FontAwesomeIcon
                  icon="code"
                  transform="grow-50"
                  color={purple}
                />
                <h4>Developpement Web</h4>
              </div>
              <div className="skills">
                <h5>Front</h5>
                <div className="skills-skill">
                  <FontAwesomeIcon
                    icon={['fab', 'html5']}
                    transform="grow-30"
                    color={purple}
                  />
                </div>
                <div className="skills-skill">
                  <FontAwesomeIcon
                    icon={['fab', 'css3-alt']}
                    transform="grow-30"
                    color={purple}
                  />
                  <p>Sass, Stylus, Glamourous</p>
                </div>
                <div className="skills-skill">
                  <FontAwesomeIcon
                    icon={['fab', 'js']}
                    transform="grow-30"
                    color={purple}
                  />
                  <p>Vanilla, React </p>
                </div>
              </div>
              <div className="skills">
                <h5>Back</h5>
                <div className="skills-skill">
                  <FontAwesomeIcon
                    icon={['fab', 'php']}
                    transform="grow-30"
                    color={purple}
                  />
                </div>
              </div>
            </div>
            <div className="about-skills-tools">
              <div className="about-skills-title">
                <FontAwesomeIcon
                  icon="wrench"
                  transform="grow-50"
                  color={purple}
                />
                <h4>Other</h4>
              </div>
              <div className="skills">
                <h5>Back</h5>
                <div className="skills-skill">
                  <FontAwesomeIcon
                    icon={['fab', 'wordpress-simple']}
                    transform="grow-30"
                    color={purple}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={['fab', 'react']}
        />
        <FontAwesomeIcon
          icon={['fab', 'css3-alt']}
        />
        <FontAwesomeIcon
          icon={['fab', 'sass']}
        />
        <FontAwesomeIcon
          icon={['fab', 'php']}
        />
        <FontAwesomeIcon
          icon={['fab', 'js']}
        />
      </PageTransition>
    )
  }
}

export default About;
