import React from "react";
import Link from "gatsby-link";
import anime from 'animejs';
import classNames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../stylesheets/header.scss"

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

class Nav extends React.Component {

  state = {
    open: false,
  }

  openNav = () => {
    this.setState({ open : !this.state.open })
    this.state.open ? this.animate : null;
  }

  render() {
    const { open } = this.state;
    const currentClassNames = classNames('links', {
    'links-open': open,
  });
    const burgerClasses = classNames('burger', {
    'burger-open': open,
  });
    return (
      <div className="header">
        <div className="header-nav">
          <Link to="/">
            <h3>Portfolio</h3>
          </Link>
          <div className="header-nav-icon">
            <FontAwesomeIcon
              icon={ open ? 'times' : 'bars' }
              transform="grow-10"
              className={burgerClasses}
              onClick={this.openNav}
            />
          </div>
        </div>
        <div className={currentClassNames}>
            <ul className="li listlink" onClick={this.openNav}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/workweb/">Web Work</ListLink>
              <ListLink to="/workprint/">Print Work</ListLink>
              <ListLink to="/about/">About</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
            </ul>
            <div className="follow">
              <p>Follow me on</p>
              <div className="social">
                <a href="https://www.linkedin.com/in/timoth%C3%A9-gosset-%F0%9F%91%8B-39122a151/">
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    transform="grow-25"
                    color='white'
                  />
                </a>
                <a href="https://github.com/Kavoldox">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    transform="grow-25"
                    color='white'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Nav;
