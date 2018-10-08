import React from "react"
import anime from 'animejs'
import { navigateTo } from "gatsby-link";

import Button from '../components/button.js'
import '../stylesheets/contact.scss'

function encode(data) {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

class Contact extends React.Component {
  state = {
    lastname: '',
    firstname: '',
    email: '',
    message: '',
  }

  onChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": form.getAttribute("name"),
    //     ...this.state
    //   })
    // })
    //   // .then((resp) => (console.log(resp))
    //   .catch(error => alert(error));
  };


  render() {
    return(
      <div className="contact">
        <form
          className="contact-form"
          onSubmit={this.handleSubmit}
          // action="mailto:timothgosset@gmail.com"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >
          <input type='text' className="field" onChange={this.onChange} value={this.state.lastname} name="lastname" placeholder="Votre nom" />
          <input type='text' className="field" onChange={this.onChange} value={this.state.firstname} name="firstname" placeholder="Votre prénom" />
          <input type='text' className="field" onChange={this.onChange} value={this.state.email} name="email" placeholder="Votre adresse e-mail" />
          <textarea type='textarea' className="field textarea" onChange={this.onChange} value={this.state.message} name="message" placeholder="Votre message" />
          <Button type='submit' name="Envoyer" onSubmit={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Contact
