import React from 'react';

import { Link } from 'react-router-dom'

class HomeSectionPressRelease extends React.Component {
  render() {
    return (
        <section id="press-releases">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        <h2>Press Releases</h2>
                        <div className="article large-6">
                            <a href="http://pib.nic.in/newsite/PrintRelease.aspx?relid=183093" target="_blank"><h4>Government announces Regulations for Drones</h4></a>
                            <div className="date">27 August 2018</div>
                        </div>
                        <div className="article large-6">
                            <a href="http://pib.nic.in/newsite/PrintRelease.aspx?relid=183093" target="_blank"><h4>Government announces Regulations for Drones</h4></a>
                            <div className="date">27 August 2018</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionPressRelease;