import React from "react";
import anime from 'animejs'
import CarouselPacks from "../components/carouselpacks.js"
import Button from "../components/button.js"
import {packagings} from '../utils/data.js';
import "../stylesheets/workprint.scss"

class WorkPrint extends React.Component {

state = {
  open: false,
}

componentDidMount() {
  anime({
    targets: '.workprint-nav-block',
    translateX: '20em',
    delay: function(target, index) {
      // 100ms delay multiplied by every div index, in ascending order
      return index * 200;
    },
  });
}

openPack = e => {
  e.preventDefault();
  const packs = packagings.filter((packs) => packs.name === e.target.title).map(f => f.packagings)

  this.setState({
    open : true,
    activePacks: packs[0],
    cat: e.target.title
  });

  // const infosTimeLine = anime.timeline();
  //
  // infosTimeLine
  // .add({
  //   targets: '.workprint-packs-blocks-slides',
  //   translateY: '15em',
  // })
  // .add({
  //   targets: '.workprint-packs-blocks-slides-block',
  //   translateX: '15em',
  //   easing: 'easeOutExpo',
  //   delay: function(target, index) {
  //     // 100ms delay multiplied by every div index, in ascending order
  //     return index * 200;
  //   },
  // })
}

render() {
  const { activePacks } = this.state;
  return(
    <div className="workprint">
      <div className="workprint-nav">
        {packagings.map((pack, index) => (
          <div
            key={index}
            className="workprint-nav-block"
            >
              <div onClick={this.openPack} className="workprint-nav-block-title">
                <h3 title={pack.name}>{pack.title}</h3>
              </div>
              {/* <span className="workprint-blocks-block-index">#{index}</span> */}
              {/* <div onClick={this.openPack} title={pack.name} className="workprint-blocks-block-button">Voir</div> */}
            </div>
          )
        )}
      </div>
        <div className="workprint-packs">
        {this.state.open ?
          <CarouselPacks cat={this.state.cat} activePacks={activePacks}/>
            :
            null
          }
        </div>

    </div>
  )}
}
export default WorkPrint;
