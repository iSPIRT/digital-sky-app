import React from 'react';

import { Link } from 'react-router-dom'


class Dashboard extends React.Component {
  render() {

    const pilotProfileId = localStorage.getItem('pilotProfileId');
    const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
    const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');

    const hasProfile = ( pilotProfileId > 0) || (individualOperatorProfileId > 0) ||(organizationOperatorProfileId > 0)

    return (
       <div class="page-dashboard">
            { !hasProfile &&
                    <section id="profile-status">
                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="large-12 cell">
                                    <br/>
                                    <br/>
                                    <p> Looks like you have not setup your profile</p>
                                    <Link to="/profile" class="button">Setup my Profile</Link>
                                </div>
                            </div>
                        </div>
                    </section>
            }
            <section id="application-status">
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                        <div class="large-12 cell">
                            <p> My applications</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default Dashboard;