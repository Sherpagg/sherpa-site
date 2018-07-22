import React, { Component } from 'react';
import Link from 'gatsby-link';
import Particles from 'react-particles-js';
import Trianglify from './Trianglify';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    alert('An email was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="landing">
        <header className="landing__header">
          <span className="title">Sherpa.gg</span>
        </header>

        <div className="landing__content">
          <h1>
            Elevate your gaming, grow your community
          </h1>
          <p>
            Sherpa makes creating and managing events for your clan or stream
            incredibly simple. Our discord & twitch integration allows for easy
            management of community activities, making it easier to have fun!
          </p>

          <form
            action="https://formspree.io/contact@sherpa.gg"
            method="post"
            name="subscribe-form"
            className="subscribe-form"
          >
            <label htmlFor="email">Leave us an email and we'll notify you when Sherpa is available</label>
            <div className="input-container">
              <input
                ref={this.input}
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="email"
                id="email"
                placeholder="email address"
                required
              />
              <input type="submit" value="Add Me" name="subscribe" id="submit" className="button" />
            </div>
          </form>
        </div>
        <div id="stripes" aria-hidden="true">
          <span></span>
          <span></span>
          <div className="gradient"></div>
          <div className="background-image"></div>
        </div>
        <Trianglify />
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 1262.6362266116362 }
              },
              opacity: {
                value: 0.75,
                random: false,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
              },
              line_linked: {
                enable_auto: true
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: .8 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
              }
            }
          }}
        />
      </div>
    )
  }
}

export default Header
