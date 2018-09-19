import React from "react"
import anime from 'animejs'
import PageTransition from 'gatsby-plugin-page-transitions'
import Transition from 'react-transition-group/Transition'
import Helmet from 'react-helmet'

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
    })
    // const titleTimeLine = anime.timeline();
    //
    //
    // titleTimeLine
    // .add({
    //   targets: '.title-h1',
    //   translateY: -250,
    //   easing: 'easeOutExpo',
    //   opacity: 1,
    //   delay: 3000
    // })
    // .add({
    //   targets: '.title-span',
    //   translateY: 250,
    //   easing: 'easeOutExpo',
    // })
    // .add({
    //   targets: '.title-pro',
    //   width: '50%',
    //   opacity: 1,
    //   easing: 'easeOutExpo'
    // })
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
                class: 'newClassToBody'
            }}
        >
          <link href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
          <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
        </Helmet>
        <div className="index">
          <h1 className="title-h1">
            Timothé
          </h1>
          <span className="title-pro">
            Web Developer Front-End
          </span>
          <span className="title-span">GOSSET</span>
        </div>
      </PageTransition>
    )
  }
}

export default MyPage
