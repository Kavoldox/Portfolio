import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import carouselData from '../../utils/data.js';

class OclockStudentNews extends React.Component {

  render() {
    const datas = carouselData.filter(datas => datas.title === `O'Clock Student News`)
    return(
      <PageTransition
    transitionTime={500}
        >
          {datas.map(data =>
            <div className="index">
              <h1>{data.title}</h1>
              <p>{data.type}</p>
            </div>
          )}
    </PageTransition>
    )
  }
}

export default OclockStudentNews
