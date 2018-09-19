import React from 'react'
import anime from 'animejs'

class Skills extends React.Component {

  render() {
    const { index, activeIndex } = this.props;
    return (
      <div className="about-skills-blocks">
          <div
            className={ index === activeIndex ?
              "about-skills-blocks active"
              :
              "about-skills-blocks off"
            }
            >
              <h4>{this.props.type}</h4>
              <div className="about-skills-blocks-border"/>
              <p className="about-skills-blocks-border-resume">{this.props.resume}</p>
              <div className="about-skills-blocks-tags">
                {this.props.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
              <div className="about-skills-blocks-logs">
                {this.props.logs.map((log, i) => (
                  <p key={i}>{log}</p>
                ))}
              </div>
            </div>
    </div>
    )
  }
}

export default Skills
