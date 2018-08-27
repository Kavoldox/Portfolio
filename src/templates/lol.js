import React from 'react'
import Link from 'gatsby-link'

export default class Work extends React.Component {

  render() {
    const { title } = this.props
    return (
      <div>
        {title}
      </div>
    )
  }
}
