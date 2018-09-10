import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import carouselData from '../../utils/data.js';
import ScrollReveal from 'scrollreveal'
import anime from 'animejs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../stylesheets/work.scss"

class Derive extends React.Component {

  state = {
    on: true,
  }

  componentDidMount() {
    ScrollReveal().reveal('.technos', {delay:500});
    ScrollReveal().reveal('.icons', { interval: 200 });
    ScrollReveal().reveal('.resp', { delay: 500 }, { afterReveal: this.animate });
  }

animate = () => {
    anime({
      targets: '.phone',
      translateY: 30,
      direction: 'alternate',
      loop: 10,
    });
  }
  render() {
    const datas = carouselData.filter(datas => datas.title === `A la dérive`)
    return(
      <PageTransition
    transitionTime={500}
        >
          {datas.map(data =>
            <div className="index">
              <div className="main">
                <div className="main-left">
                  <img src={require(`../../utils/work/${data.image}.jpg`)}/>
                </div>
                <div className="main-right">
                  <h1>{data.title}</h1>
                  <p className="type">{data.resume}</p>
                  <p className="link">Check the code on
                    <a href=''>
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
                  <p>Blog sur la vie étudiante d'apprentis développeurs web.
                    Développé en PHP, requêtage en SQL.</p>
                  <h4>Type</h4>
                  <p>{data.type}</p>
                  <h4>Fonctionnalités</h4>
                  <ul>
                    <li>Recherche</li>
                    <li>Accès aux articles via catégorie et auteur</li>
                  </ul>
                </div>
                <div className="infos-img">
                  <img src={require(`../../utils/work/${data.home}.jpg`)}/>
                </div>
              </div>
              <div className="resp">
                <h2>Responsive</h2>
                <div className="resp-pics">
                  <img className="mac" src={require(`../../utils/work/${data.mac}.jpg`)}/>
                  <img className="tab" src={require(`../../utils/work/${data.ipad}.jpg`)}/>
                  <img className="phone" src={require(`../../utils/work/${data.phone}.jpg`)}/>
                </div>
              </div>
              <div className="technos">
                <h2>Technos</h2>
                <div className="technos-list">
                  <div className='icons icon1'>
                    <div className="border" />
                    <h4>CSS</h4>
                    <p>Bootstrap</p>
                  </div>
                  <div className='icons icon2'>
                  <div className="border" />
                    <h4>FRONT</h4>
                    <p>Jquery</p>
                  </div>
                  <div className='icons icon3'>
                    <div className="border" />
                    <h4>BACK</h4>
                    <p>PHP</p>
                  </div>
                  <div className='icons icon4'>
                    <div className="border" />
                    <h4>BDD</h4>
                    <p>MySQL</p>
                  </div>
              </div>
              </div>
            </div>
          )}
    </PageTransition>
    )
  }
}

export default Derive
