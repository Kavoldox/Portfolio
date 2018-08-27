import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'

class MyPage extends React.Component {
  state= {
    on: false,
    over: false,
  }

  render() {
    return(
      <PageTransition
    transitionTime={500}
        >
      <div className="index">
        <h1>
          Timothé GOSSET
        </h1>
        <span>
          Web Developer Front-End
        </span>
      </div>
    </PageTransition>
    )
  }
}

export default MyPage
