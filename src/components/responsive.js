import React from 'react';
import ScrollReveal from 'scrollreveal'
import anime from 'animejs';

class Responsive extends React.Component {

  componentDidMount() {
    ScrollReveal().reveal(
      '.resp',
      {
        delay: 500,
        afterReveal: function() {
          const titleTimeLine = anime.timeline();

            titleTimeLine
            .add({
              targets: '.info',
              easing: 'easeOutExpo',
              opacity: 1,
              duration: 800
            })
            .add({
              targets: '.info-info .border',
              easing: 'easeOutExpo',
              opacity: 1,
              width: '15em',
              duration: 500
            })
            .add({
              targets: '.block',
              easing: 'easeOutExpo',
              opacity: 1,
              translateY: '10em',
              duration: 500
            })
            .add({
              targets: ['.mac', '.tab', '.phone'],
              easing: 'easeOutExpo',
              translateY: '50em',
              duration: 500,
              delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 300;
          },
            })
        }
      });
  }

  componentDidUpdate() {

  }


  render() {
    const {mac, ipad, phone } = this.props;
    return (
      <div className="resp">
        <h2>Responsive</h2>
        <div className="resp-pics">
          <div className="info">
            <div className="info-info">
              <div className="border" />
              <div className="block">
                <span className="block-info">Desktop</span>
              </div>
            </div>
            <div className='info-pics'>
              <img className="mac" src={require(`../utils/work/${mac}.jpg`)}/>
            </div>
          </div>
          <div className="info info-reverse">
            <div className="info-info">
              <div className="border" />
              <div className="block">
                <span className="block-info">Tablette</span>
              </div>
            </div>
            <div className='info-pics'>
              <img className="tab" src={require(`../utils/work/${ipad}.jpg`)}/>
            </div>
          </div>
          <div className="info">
            <div className="info-info">
              <div className="border" />
              <div className="block">
                <span className="block-info">Tablette</span>
              </div>
            </div>
            <div className='info-pics'>
              <img className="phone" src={require(`../utils/work/${phone}.jpg`)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Responsive
