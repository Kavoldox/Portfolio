import React from 'react';
import ScrollReveal from 'scrollreveal'
import anime from 'animejs';

class Responsive extends React.Component {

  componentDidMount() {
    ScrollReveal().reveal(
      '.resp',
      {
        delay: 500 ,
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
              width: '100%',
              duration: 500
            })
            .add({
              targets: '.info-info .border-info',
              easing: 'easeOutExpo',
              opacity: 1,
              translateY: '5em',
              duration: 500
            })
            .add({
              targets: ['.mac', '.tab', '.phone'],
              easing: 'easeOutExpo',
              opacity: 1,
              translateY: '-50em',
              duration: 500,
              delay: function(target, index) {
            // 100ms delay multiplied by every div index, in ascending order
            return index * 100;
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
              <span className="border-info">Desktop</span>
            </div>
            <div className="info-info">
              <div className="border" />
              <span className="border-info">Desktop</span>
            </div>
            <div className="info-info">
              <div className="border" />
              <span className="border-info">Desktop</span>
            </div>
          </div>
          <div className='info-pics'>
            <img className="mac" src={require(`../utils/work/${mac}.jpg`)}/>
            <img className="tab" src={require(`../utils/work/${ipad}.jpg`)}/>
            <img className="phone" src={require(`../utils/work/${phone}.jpg`)}/>
          </div>
        </div>
      </div>
    )
  }
}
//
// const Responsive = ({ mac, tab, phone }) => {
//   return (
//   )
// }

export default Responsive
