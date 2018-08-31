import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import Helmet from 'react-helmet'

class MyPage extends React.Component {

  render() {
    return(
      <PageTransition
    transitionTime={500}
        >
          <Helmet
              bodyAttributes={{
                  class: 'newClassToBody'
              }}
          />
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
