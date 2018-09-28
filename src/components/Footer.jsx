import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg';
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
                                <li><Link to="#">Know the requirements</Link></li>
                                <li><Link to="#">Legal obligations</Link></li>
                                <li><Link to="#">Insurance</Link></li>
                                <li><Link to="#">Enforcement action</Link></li>
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
            <div className="footer-logo" data-equalizer-watch>
                <div className="wrap">
                    <img src={logo} alt="logo"/>
                    <p>&copy; 2018 Indian Government. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;