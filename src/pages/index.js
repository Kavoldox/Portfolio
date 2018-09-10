import React from "react"
import anime from 'animejs'
import PageTransition from 'gatsby-plugin-page-transitions'
import Transition from 'react-transition-group/Transition'
import Helmet from 'react-helmet'

const pageTransitionEvent = 'gatsby-plugin-page-transition::exit';

const defaultStyle={
  transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
  left: '100%',
  position: 'relative',
  width: '100%',
}
const transitionStyles={
  entering: { left: '0%' },
  entered: { left: '0%' },
  exiting: { left: '100%' },
}

const defaultStyle2 = {
  transition: 'top 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
  top: '100%',
  position: 'relative',
  width: '100%',
}

const transitionStyles2 = {
  entering: { top: '0%' },
  entered: { top: '0%' },
  exiting: { top: '100%' }
}
class MyPage extends React.Component {

  constructor (props) {
    super(props)
    this.listenHandler = this.listenHandler.bind(this)
    this.state = {
      in: false
    }
    this.myRef = React.createRef;
  }

  componentDidMount () {
    global.window.addEventListener(pageTransitionEvent, this.listenHandler)
    this.setState({
      in: true
    })

    anime({
      targets: '.title',
      translateY: 30,
      direction: 'alternate',
      loop: 10,
    });
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
          <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
        </Helmet>
        <div className="index">
          <Transition in={this.state.in} timeout={500}>
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className="index"
            >
              <h1 className="title" ref={this.myRef}>
                Timothé GOSSET
              </h1>
            </div>
          )}
          </Transition>
          <Transition in={this.state.in} timeout={500}>
          {(state) => (
            <div style={{
              ...defaultStyle2,
              ...transitionStyles2[state]
            }}
            className="index"
            >
              <span>
                Web Developer Front-End
              </span>
            </div>
          )}
          </Transition>
      </div>
    </PageTransition>
    )
  }
}

export default MyPage
