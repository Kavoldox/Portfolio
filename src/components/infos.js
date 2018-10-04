import React from 'react';
import ScrollReveal from 'scrollreveal'
import anime from 'animejs';


class Infos extends React.Component {

  componentDidMount() {
    const currentClassName = this.props.phone2 ? 'dev-info' : 'dev-info-nophone';
    ScrollReveal().reveal(
      `.${currentClassName}`,
      {
        delay: 500 ,
        afterReveal: function() {
          const infosTimeLine = anime.timeline();

            infosTimeLine
            .add({
              targets: '.info-img',
              scale: 1.2,
            })
            .add({
              targets: '.info-img',
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
    const {mac, phone2, technos, informations } = this.props;
    const currentClassName = phone2 ? 'dev-info' : 'dev-info-nophone'
    const currentClassName2 = phone2 ? 'dev-info-right' : 'dev-info-right-nophone'
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
          <div className={currentClassName}>
            {phone2 ?
              <img className="info-img info-phone" src={require(`../utils/work/${phone2}`)}/>
            :
              <img className="info-img info-mac" src={require(`../utils/work/${mac}.jpg`)}/>
            }
            <div className={currentClassName2}>
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
