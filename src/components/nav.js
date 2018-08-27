import React from "react";
import Link from "gatsby-link";

import "../stylesheets/header.scss"

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Nav = () => (
  <div className="header">
    <Link to="/">
      <h3>Portfolio</h3>
    </Link>
    <ul className="li borderli">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/work/">Work</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </div>
);

export default Nav;
