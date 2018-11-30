import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../img/dgca-logo.jpg';

class Footer extends React.Component {
  render() {
    return (
        <footer className="site-footer" data-equalizer data-equalize-on="medium">
            <div class="find-test-location footer-nav" data-equalizer-watch>
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                        <div class="large-12 cell">
                            <ul>
                                <li><a href="https://www.mygov.in/" target="_blank">MyGov</a></li>
                                <li><a href="http://www.digitalindia.gov.in/" target="_blank">Digital India</a></li>
                                <li><a href="https://www.pgportal.gov.in/" target="_blank">File a Grievance</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav" data-equalizer-watch>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <ul>
                                <li><a href="http://dgca.nic.in/cars/D3X-X1.pdf" target="_blank">Civil Aviation Requirements</a></li>
                                <li><a href="http://www.dgca.nic.in/rpas/DGCA%20RPAS%20Guidance%20Manual.pdf" target="_blank">Guidance Manual</a></li>
                                <li><Link to={'/training-orgs'}>Flight Training Organisations</Link></li>
                                <li><Link to="testLocations">Find test location</Link></li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-logo" data-equalizer-watch>
                <div className="wrap">
                    <div className="logo-wrap">
                        <img src={logo} alt="" />
                    </div>
                </div>                
            </div>
        </footer>
    );
  }
}

export default Footer;