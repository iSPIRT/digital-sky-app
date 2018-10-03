import React from 'react';

import drone from '../img/drone.gif';

class HomeSectionIntro extends React.Component {
  render() {
    return (
        <section id="home-intro">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-6 cell large-order-1 intro-text">
                        <div className="wrap">
                            <h2 className="type-title-small">We monitor and administer the use of drones and unmanned aircrafts in India</h2>
                        </div>
                    </div>
                    <div className="large-6 cell large-order-2  illustrations">
                        <img src={drone} alt="drone" />
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionIntro;