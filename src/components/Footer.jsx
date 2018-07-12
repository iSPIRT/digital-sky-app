import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg';
import locationImg from '../img/location.svg';

class Footer extends React.Component {
  render() {
    return (
        <footer className="site-footer">
            <div className="find-test-location">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <p>List of identified area for testing and<br/>demonstration of remotely piloted aircrafts</p>
                            <Link to="test-locations.php" className="button button-light"><img src={locationImg} alt="locationImg"/>Find test location</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <ul>
                                <li><Link to="#">Know the requirements</Link></li>
                                <li><Link to="#">Legal obligations</Link></li>
                                <li><Link to="#">Insurence</Link></li>
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
            <div className="footer-logo">
                <div className="wrap">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;