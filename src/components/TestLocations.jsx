import React from 'react';

import { Link } from 'react-router-dom'

import locationButton from '../img/location-button-icon.svg';

import $ from 'jquery';

import 'foundation-sites';

class TestLocations extends React.Component {

  componentDidMount() {
      $(document).foundation();
  }

  render() {
    return (
        <div>
            <div className="test-loaction-header">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <h3>List of identified area’s for testing or demonstration of RPAS</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="test-loaction-content">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <h2>North India</h2>
            
                            <ul className="accordion" data-accordion data-allow-all-closed="true">
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Uttar Pradesh</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=26.607500,81.011667" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Sultanpur</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=26.247778,82.042500" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Uttarakhand</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Sakkhanpur Farm</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=29.304167,79.051389" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Punjab</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Phagwara</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=31.283333, 75.800000" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h2>South India</h2>
            
                            <ul className="accordion" data-accordion data-allow-all-closed="true">
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Tamil Nadu</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Vellore</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=12.908611,79.066667" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Salem</h3>
                                                        <p>Pullagoundanpatti</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=11.480278,77.721944" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Coimbatore</h3>
                                                        <p>Chettipalayam</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=10.913056,77.036667" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Erode</h3>
                                                        <p>Nambiyur</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=11.357778,77.320556" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Karnataka</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Chitradurga</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=14.388056,76.571944" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Coorg</h3>
                                                        <p>Choudigudi Estate</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=12.123611,76.061667" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Ganimangala Village</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=12.217222,76.625833" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Kerala</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Munnar</h3>
                                                        <p>Devikulam</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=10.056389,78.119722" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Idukki</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=9.918889,77.102222" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Telangana</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Hyderabad</h3>
                                                        <p>Mulugu Village</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=17.728056,78.700556" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
            
                            <h2>East &amp; North East India</h2>
            
                            <ul className="accordion" data-accordion data-allow-all-closed="true">
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Arunachal Pradesh</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Daporijo Airfield</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=27.985278,94.221667" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Assam</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Sonapur</h3>
                                                        <p>Betkuchi</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=26.141389,91.954722" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Sivasagar</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=26.982500,94.642222" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <h2>West</h2>

                            <ul className="accordion" data-accordion data-allow-all-closed="true">
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Gujarat</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Surendranagar</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=22.773889,71.667222" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Maharashtra</Link>
                                    <div className="accordion-content" data-tab-content>
                                        <div className="locations">
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Shirpur Airport</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=21.328611,74.961111" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Amravati</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=20.896667,77.775000" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Aurangabad</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=19.950000,75.250000" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Ahmednagar</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=19.095000,74.749444" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>

                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Satara</h3>
                                                        <p></p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a target="_blank" href="https://www.google.com/maps/search/?api=1&query=17.680278,74.018056" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default TestLocations;