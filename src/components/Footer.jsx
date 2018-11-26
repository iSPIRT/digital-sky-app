import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/airports_authority_of_india_logo.svg';
import locationImg from '../img/location.svg';

class Footer extends React.Component {
  render() {
    return (
        <footer className="site-footer" data-equalizer data-equalize-on="medium">
            <div className="find-test-location" data-equalizer-watch>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <p>The DGCA has demarcated areas for testing and demonstration of remotely piloted aircraft.</p>
                            <Link to="testLocations" className="button button-light"><img src={locationImg} alt="locationImg"/>Find test location</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav" data-equalizer-watch>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <ul>
                                <li><a href="http://dgca.nic.in/cars/D3X-X1.pdf" target="_blank">RPAS CAR</a></li>
                                <li><a href="https://bit.ly/DigitalSkyForum" target="_blank">Digital Sky Forum</a></li>
                                <li><a href="https://ispirt.github.io/digital-sky-docs/apis" target="_blank">API Reference</a></li>
                                <li><a href="https://docs.google.com/document/d/19lD0nFBhZiMJ3Vgbg_YgtVzd2Ua7yXFRuYSTtaxpaQk/edit?usp=sharing" target="_blank">Registered Flight Module Technical Standard</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <p>&copy; 2018 Indian Government. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-logo" data-equalizer-watch>
                <a href="https://www.aai.aero/" target="_blank">
                <div class="wrap">
                    <div class="logo-wrap">
                        <img src={logo} alt="" />
                    </div>
                <h4>Airports Authority of India</h4>
                </div>
                </a>
            </div>
        </footer>
    );
  }
}

export default Footer;