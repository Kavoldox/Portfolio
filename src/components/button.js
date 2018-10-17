import React from 'react';
import Link from 'gatsby-link'
import anime from 'animejs'
import classNames from 'classnames';

class Button extends React.Component {

  state = {
  }

  animate = (title, back, color, border) => {

  const el = document.querySelector(`.button-${title}`);

  anime({
    targets: el,
    backgroundColor: back,
    color: color,
    borderRadius: border,
  })
 }

 hoverButton = (evt) => {
  const title = evt.target.title ? evt.target.title : this.props.typeOf;
  this.animate(title,'#df3940', '#FFF', ['0em','2em']);
 }

 endHoverButton = (evt) => {
  const title = evt.target.title ? evt.target.title : this.props.typeOf;
  this.animate(title, '#FFF', '#df3940', '0');
 }

  render() {
    const buttonClass = `button button-${this.props.path}`
    const buttonClass2 = `button button-${this.props.title}`
    return (
      <div className="button-link">
        {this.props.path ?
          <Link
            to={{
              pathname:`/work/${this.props.path}`,
            }}
            >
              <button title={this.props.path} className={buttonClass} onMouseOver={this.hoverButton} onMouseLeave={this.endHoverButton}>{this.props.name}</button>
            </Link>
        :
        <button title={this.props.title} type={this.props.type} className={buttonClass2} onMouseOver={this.hoverButton} onMouseLeave={this.endHoverButton}>{this.props.name}</button>
        }
      </div>
    )
  }
}

export default Button
