import React from 'react';
import { Link } from 'react-router-dom'

import getStartedImg from '../img/get_started.svg';


class HomeSectionRegisterDrone extends React.Component {
  render() {
    return (
        <section id="register-drone">
            <div class="wrap">
              <div class="grid-container">
                <div class="grid-x grid-padding-x">
                  <div class="large-12 cell">
                    <h2>Register a <br/>drone today</h2>
                    <p>Get a license to become a pilot, operator or manufacturer with us. Before you can apply, you need to be registered. Get started with the link below.</p>
                    <Link to="/register" class="button"><img src={getStartedImg} alt="get-started"/>Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionRegisterDrone;