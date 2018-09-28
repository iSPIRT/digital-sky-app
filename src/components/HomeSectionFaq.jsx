import React from 'react';

import { Link } from 'react-router-dom'

class HomeSectionFaq extends React.Component {
  render() {
    return (
        <section id="faq">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        <h2>FAQ</h2>
        
                        <ul className="accordion" data-accordion data-allow-all-closed="true">
                            <li className="accordion-item is-active" data-accordion-item>
                                <Link to="#" className="accordion-title">Frequently asked question 1</Link>
                                <div className="accordion-content" data-tab-content>
                                    <p>Panel 1. Lorem ipsum dolor</p>
                                </div>
                            </li>
                            <li className="accordion-item" data-accordion-item>
                                <Link to="#" className="accordion-title">Frequently asked question 2</Link>
                                <div className="accordion-content" data-tab-content>
                                    <p>Panel 2. Lorem ipsum dolor</p>
                                </div>
                            </li>
                            <li className="accordion-item" data-accordion-item>
                                <Link to="#" className="accordion-title">Lorem ipsum dolor sit amet</Link>
                                <div className="accordion-content" data-tab-content>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionFaq;