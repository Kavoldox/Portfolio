import React from 'react';
import ScrollReveal from 'scrollreveal'
import anime from 'animejs';

class Infos extends React.Component {

  componentDidMount() {
    ScrollReveal().reveal(
      '.dev',
      {
        delay: 500 ,
        afterReveal: function() {
          const infosTimeLine = anime.timeline();

            infosTimeLine
            .add({
              targets: '.info-phone',
              scale: 1.2,
            })
            .add({
              targets: '.info-phone',
              easing: 'easeOutExpo',
              scale: 1,
            })
            .add({
              targets: '.info .line',
              easing: 'easeOutExpo',
              width: '100%',
            })
            .add({
              targets: '.info p',
              translateY: '7em',
              delay: function(target, index) {
                // 100ms delay multiplied by every div index, in ascending order
                return index * 200;
              },
            })
        }
      });
  }

  render() {
    const {mac, ipad, phone, technos, informations } = this.props;
    return (
      <div>
        <h2>Technos</h2>
        <div className="dev">
          <div className="technos">
            <div className="technos-list">
              { technos.map(techno => (
                <div className='icons'>
                  <div className="border" />
                  <h4>{techno.type}</h4>
                  <p>{techno.techno}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dev-info">
            <img className="info-phone" src={require(`../utils/work/${phone}.jpg`)}/>
            <div className="dev-info-right">
              {informations.map(info => (
                <div className="info">
                  <div className="line"/>
                  <p>{info.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Infos
