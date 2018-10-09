import React from 'react';
import Link from 'gatsby-link'

import Button from "./button.js"
import "../stylesheets/miniwork.scss"
import "../stylesheets/work.scss"

class MiniWork extends React.Component {
  render() {
    return (
      <div>
        <h2>Autres projets</h2>
        <div className="otherworks">
          <div className="miniworks">
            {this.props.works.map((work, index) => (
              <div key={index}className="miniwork">
                <h4>{work.title}</h4>
                <img src={require(`../utils/work/${work.home}.jpg`)}/>
                <Button path={work.path} name="Voir"/>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MiniWork
