import React from "react"
import anime from 'animejs'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
import Transition from 'react-transition-group/Transition'

const pageTransitionEvent = 'gatsby-plugin-page-transition::exit';



// const defaultStyle={
//   transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
//   left: '100%',
//   position: 'relative',
//   width: '100%',
// }
// const transitionStyles={
//   entering: { left: '0%' },
//   entered: { left: '0%' },
//   exiting: { left: '100%' },
// }

class MyPage extends React.Component {

  constructor (props) {
    super(props)
    this.listenHandler = this.listenHandler.bind(this)
    this.state = {
      in: false
    }
  }

  componentDidMount () {
    global.window.addEventListener(pageTransitionEvent, this.listenHandler)
    this.setState({
      in: true
    });

    const titleTimeLine = anime.timeline();

      titleTimeLine
      .add({
        targets: '.title-h1',
        translateY: '5em',
        duration: 1000,
        delay: 1000,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.title-pro-line',
        translateY: '10em',
        duration: 1000,
        delay: 500,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '.title-pro-pro',
        translateX: '25em',
        duration: 1000,
        delay: 200,
        easing: 'easeInOutQuad'
      })

    // const titleTimeLine = anime.timeline();
    //
    //   titleTimeLine
    //   .add({
    //     targets: '.eyes',
    //     translateY: '-2em',
    //     duration: 4000,
    //     delay: 7000
    //   })
    //   .add({
    //     targets: '.eyes',
    //     opacity: 0,
    //     duration: 100,
    //   })
    //   .add({
    //     targets: '.eyes',
    //     opacity: 1,
    //     duration: 2000,
    //   })
    //   .add({
    //     targets: '.eyes',
    //     translateY: '0em',
    //     translateX: '2em',
    //     duration: 1000
    //   })
  }

  listenHandler () {
    this.setState({
      in: false
    })
  }

  componentWillUnmount () {
    global.window.removeEventListener(pageTransitionEvent, this.listenHandler)
  }

  render() {
    return(
      <PageTransition
    transitionTime={500}
        >
          <Helmet
              bodyAttributes={{
                  class: 'home'
              }}
          >
          </Helmet>
        <div className="index">
          <div className="title">
            <h1 className="title-h1">
              <div>
                <span className="title-h1-span">T</span>
                <span className="title-h1-h1">imothé</span>
              </div>
              <div>
                <span className="title-h1-span">G</span>
                <span className="title-h1-h1">osset</span>
              </div>
            </h1>
            <div className="title-pro">
              <span className="title-pro-line" />
              <span className="title-pro-pro">
                Design
                &
                <br/>
                Web Developer Front-End
              </span>
            </div>
            {/* <svg className='smiley' version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
            	 width="300px" height="300px" viewBox="0 0 400 400" enableBackground="new 0 0 300 300">
               <g className="smileybody">
                 <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="152.105" y1="180.5024" x2="365.6836" y2="275.6925">
                   <stop  offset="0" style={{'stopColor':"#F1BD36"}}/>
                   <stop  offset="1" style={{'stopColor':"#ECB30F"}}/>
                 </linearGradient>
                 <circle fill="url(#SVGID_1_)" cx="245.302" cy="222.04" r="116.887"/>
                 <path fill="#CC8C0D" d="M361.844,213.016c-2.525,68.972-58.006,124.092-126.075,124.092c-5.584,0-11.082-0.371-16.475-1.09
                   c8.365,1.899,17.068,2.907,26.008,2.907c64.555,0,116.887-52.332,116.887-116.885C362.188,219.003,362.071,215.993,361.844,213.016z
                   "/>
                   <g className="eyes">
                     <ellipse fill="#262626" cx="237.166" cy="189.343" rx="8.137" ry="11.988"/>
                     <ellipse fill="#262626" cx="192.15" cy="189.343" rx="8.136" ry="11.988"/>
                   </g>
                   <div className="lol"></div>
               </g>
              <g className="shadow">
                <ellipse fill="#231F20" cx="249.251" cy="385.796" rx="64.307" ry="9.05"/>
              </g>
            </svg> */}
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default MyPage
