import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import {carouselData} from '../../utils/data.js';
// import ScrollReveal from 'scrollreveal'
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../stylesheets/work.scss"
import Responsive from "../../components/responsive.js"
import Infos from "../../components/infos.js"
import MiniWork from "../../components/miniwork.js"

const slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

class Recipes extends React.Component {

  state = {
    on: true,
  }

  render() {
    const datas = carouselData.filter(datas => datas.title === `Recipes`)
    const works = carouselData.filter(works => works.title !== `Recipes`)
    return(
      <PageTransition
    transitionTime={500}
        >
          <div className="index">
              {datas.map((data, index) =>
                <div key={index}>
                  <div className="main">
                    <div className="main-left">
                      <img src={require(`../../utils/work/${data.image}.jpg`)}/>
                    </div>
                    <div className="main-right">
                      <h1>{data.title}</h1>
                      <p className="type">{data.excerpt}</p>
                      <p className="link">Check the code on
                        <a href='https://github.com/Kavoldox/Recettes'>
                          <FontAwesomeIcon
                            icon={['fab', 'github']}
                            transform="grow-10"
                            color='#3d2b3b'
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="infos">
                    <div className="infos-infos">
                      <h4>Projet</h4>
                      <p>{data.resume}</p>
                        <h4>Type</h4>
                        <p>{data.type}</p>
                        <h4>Fonctionnalités</h4>
                        <ul>
                          { data.fonctionnalités.map((funct, index) => (
                            <li key={index}>{funct}</li>
                          ))}
                        </ul>
                        <h4>Role</h4>
                        <ul>
                          {data.role.map((role, index) => (
                            <li key={index}>{role}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="infos-img">
                        <img src={require(`../../utils/work/${data.home}.jpg`)}/>
                      </div>
                    </div>
                    <Responsive {...data}/>
                    <Infos {...data}/>
                  </div>
                )}
                <MiniWork works={works}/>
          </div>
    </PageTransition>
    )
  }
}

export default Recipes
