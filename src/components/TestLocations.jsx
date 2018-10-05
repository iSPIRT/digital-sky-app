import React from 'react';

import { Link } from 'react-router-dom'

import locationButton from '../img/location-button-icon.svg';

class TestLocations extends React.Component {
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">New Delhi</Link>
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li className="accordion-item" data-accordion-item>
                                    <Link to="#" className="accordion-title">Goa</Link>
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
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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
                                                        <h3>Lucknow</h3>
                                                        <p>Shivgarh Resorts</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7273295,80.8387206" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Lucknow</h3>
                                                        <p>Chaudhary Charan Singh International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=26.7617317,80.885655" className="button"><img src={locationButton} alt="locationButton" /></a>
                                                </div>
                                            </div>
            
                                            <div className="location">
                                                <div className="details">
                                                    <div className="wrap">
                                                        <h3>Varanasi</h3>
                                                        <p>Lal Bahadur Shastri International Airport</p>
                                                    </div>
                                                </div>
                                                <div className="go-to-location">
                                                    <a href="https://www.google.com/maps/search/?api=1&query=25.4487677,82.8567959" className="button"><img src={locationButton} alt="locationButton" /></a>
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