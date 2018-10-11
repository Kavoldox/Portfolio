import React from "react"
import anime from 'animejs'
import { navigateTo } from "gatsby-link";
import validateEmail from 'validate-email';
import classNames from 'classnames';

import Button from '../components/button.js'
import '../stylesheets/contact.scss'

function encode(data) {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

class Contact extends React.Component {
  // state = {
  // }
  state = {
    lastname: "",
    firstname: "",
    email: "",
    message: "",
    error: false,
    focus: false,
  }

  onChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })

    if (name === 'email') {
      const error = !validateEmail(value);
      this.setState({ error });
    }
  }

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  }

  handleBlur = () => {
    this.setState({ focus: false });
  }

  handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        e.preventDefault();
      };


  render() {
    return(
      <div className="contact">
        <form
          className="contact-form"
          onSubmit={this.handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >
          <input type="hidden" name="contact" value="contact" />
          <input
            type='text'
            className={classNames(
              'field',
              { 'field-has-value': this.state.lastname !== '' },
            )}
            onChange={this.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.state.lastname}
            name="lastname"
            placeholder="Votre nom"
          />
          <input
            type='text'
            className={classNames(
              'field',
              { 'field-has-value': this.state.firstname !== '' },
            )}
            onChange={this.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.state.firstname}
            name="firstname"
            placeholder="Votre prénom"
          />
          <input
            type='text'
            className={classNames(
              'field',
              { 'field-has-value': this.state.email !== '' },
              { 'field-has-error': this.state.error },
            )}
            onChange={this.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.state.email}
            name="email"
            placeholder="Votre adresse e-mail"
          />
          { this.state.error ?
            <div className="field-signal">
              Veuillez entrer une adresse email valide
            </div>
            :
            null
          }
          <textarea
            type='textarea'
            className={classNames(
              'field textarea',
              { 'field-has-value': this.state.message !== '' },
            )}
            onChange={this.onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.state.message}
            name="message"
            placeholder="Votre message"
          />
          <Button
            type='submit'
            name="Envoyer"
          />
        </form>
      </div>
    )
  }
}

export default Contact
