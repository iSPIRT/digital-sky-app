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
        
                        <div className="article">
                            <Link to="#"><h4>New drone policy launched in India</h4></Link>
                            <div className="date">10 January 2018</div>
                        </div>
        
                        <div className="article">
                            <Link to="#"><h4>New drone policy launched in India</h4></Link>
                            <div className="date">10 January 2018</div>
                        </div>
        
                        <div className="article">
                            <Link to="#"><h4>New drone policy launched in India</h4></Link>
                            <div className="date">10 January 2018</div>
                        </div>
        
                        <Link to="#" className="button">Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HomeSectionPressRelease;