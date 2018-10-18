import React from "react"
import anime from 'animejs'
import { navigateTo } from "gatsby-link";
import validateEmail from 'validate-email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          .then(() => basicTimeline)
          .catch(error => alert(error));

          this.setState({ submitted: true })

        e.preventDefault();

        var basicTimeline = anime.timeline()

        // var pathEls = document.getElementById('check');
        // console.log(pathEls)
// for (var i = 0; i < pathEls.length; i++) {
//   var pathEl = pathEls[i];
//   var offset = anime.setDashoffset(pathEl);
//   pathEl.setAttribute("stroke-dashoffset", offset);
// }
//
basicTimeline
  .add({
    targets: ".circle",
    // backgroundColor: "#de3940",
    width: "100%",
    height: "100%",
    duration: 300,
    marginTop: '10em',
  })
  .add({
    targets: ".circle-check",
    borderRadius: ['50%', '50%'],
    backgroundColor: "#de3940",
    opacity: 1,
    duration: 1000,
  })
  .add({
    targets: ".circle-message",
    color: "#de3940",
    opacity: 1,
    duration: 1000,
  })
//   .add({
//     targets: pathEl,
//     strokeDashoffset: [offset, 0],
//     duration: 200,
//     easing: "easeInOutSine"
//   });

        // const submitTimeLine = anime.timeline();
        //
        //   submitTimeLine
        //   .add({
        //     targets: '.contact-form',
        //     opacity: 0,
        //     height: 0,
        //     translateX: '50em',
        //     duration: 1000,
        //   })
        //   .add({
        //     targets: '.success-check',
        //     translateX: '-50em',
        //     // opacity: 1,
        //     // borderRadius: ['50%', '50%'],
        //     // padding: '1em',
        //     // backgroundColor: '#de3940',
        //     // fontSize: '3em',
        //     // height: '5em',
        //     // width: '5em',
        //     // margin: '5em auto',
        //     // duration: 1000,
        //     // delay: 500,
        //     // easing: 'easeInOutQuad'
        //   })
        //   // .add({
        //   //   targets: '.title-pro-pro',
        //   //   translateX: '25em',
        //   //   duration: 1000,
        //   //   delay: 500,
        //   //   easing: 'easeInOutQuad'
        //   // })
      };


  render() {
    return(
      <div className="contact">
        <form
          className="contact-form"
          className={classNames(
            'contact-form',
            { 'contact-form-submitted': this.state.submitted },
          )}
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
          <div className='lol'>
            <Button
              type='submit'
              name="Envoyer"
              >
                {/* <svg x="0px" y="0px"
                viewBox="0 0 25 30" style="enable-background:new 0 0 25 30;">
                <path id="check" class="st0" d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"/>
              </svg> */}
            </Button>
          </div>
        </form>
        <div className='circle'>
          <FontAwesomeIcon
            icon='check'
            transform="grow-25"
            className="circle-check"
            color= 'white'
          />
          <p className="circle-message">Votre message a été envoyé</p>
        </div>
      </div>
    )
  }
}

export default Contact
