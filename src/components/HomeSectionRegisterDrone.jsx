import React from 'react';
import { Link } from 'react-router-dom'

import getStartedImg from '../img/get_started.svg';


class HomeSectionRegisterDrone extends React.Component {
  render() {
    return (
        <section id="register-drone">
            <div className="wrap">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-8 cell">
                            <h2>Register yourself, <br/>then your drones.</h2>
                            <p>As an operator, manufacturer or pilot, you need to first register yourself. Registered users can add their NPNT compliant drones, and apply to fly!</p>
                        </div>
                        <div className="large-3 large-offset-1 cell">
                            <div className="btn-wrap">
                                <Link to="/register" className="button">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionRegisterDrone;
