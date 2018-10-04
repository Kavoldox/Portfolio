import React from 'react';
import Link from 'gatsby-link'
import anime from 'animejs'
import classNames from 'classnames';

class Button extends React.Component {

  state = {
  }

  animate = (name, back, color, border) => {

  const el = document.querySelector(`.miniworks .button-${name}`);

  anime({
    targets: el,
    backgroundColor: back,
    color: color,
    borderRadius: border,
  })
 }

 hoverButton = (evt) => {
  const name = evt.target.name ? evt.target.name : this.props.typeOf;
  this.animate(name,'#df3940', '#FFF', ['0em','2em']);
 }

 endHoverButton = (evt) => {
  const name = evt.target.name ? evt.target.name : this.props.typeOf;
  this.animate(name, '#FFF', '#df3940', '0');
 }

  render() {
    const buttonClass = `button button-${this.props.path}`
    return (
      <div className="button-link">
        {this.props.path ?
          <Link
            to={{
              pathname:`/work/${this.props.path}`,
            }}
            >
              <button name={this.props.path} className={buttonClass} onMouseOver={this.hoverButton} onMouseLeave={this.endHoverButton}>{this.props.name}</button>
            </Link>
        :
        <button className={buttonClass} onMouseOver={this.hoverButton} onMouseLeave={this.endHoverButton}>{this.props.name}</button>
        }
      </div>
    )
  }
}

export default Button
