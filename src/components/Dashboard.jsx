import React from 'react';

import { Link } from 'react-router-dom'


class Dashboard extends React.Component {
  render() {

    const pilotProfileId = localStorage.getItem('pilotProfileId');
    const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
    const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');

    const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
    const hasPilotProfile = ( pilotProfileId > 0)

    return (
            <div>
                <div class="page-header dashboard-header">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                            <div class="large-12 cell">
                                {   !hasPilotProfile &&
                                    <div>
                                        <p> If you are pilot, setup your pilot profile to begin</p>
                                        <Link to="/profile" class="button">Setup my Pilot Profile</Link>
                                    </div>
                                }

                                {   hasPilotProfile &&
                                    <Link to="/profile" class="button">Update my Pilot Profile</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="page-header dashboard-header">
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                            <div class="large-12 cell">
                                {   !hasOperatorProfile &&
                                    <div>
                                        <p> If you are operator, setup your operator profile to begin</p>
                                        <Link to="/profile" class="button">Setup my Operator Profile</Link>
                                    </div>
                                }

                                {   hasOperatorProfile &&
                                    <div>
                                        <Link to="/profile" class="button">Update my Operator Profile</Link>
                                        <Link to="/localDroneAcquisitionApplication" class="button">Apply here for Local Drone Acquisition</Link>
                                        <Link to="/importDroneApplication" class="button">Apply here to Import Drones</Link>
                                        <Link to="/uaopApplication" class="button">Apply here to for UAOP Licence</Link>
                                        <Link to="/uinApplication" class="button">Apply here to for UIN</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-dashboard">
                    <section id="application-status">
                        <div class="grid-container">
                            <div class="grid-x grid-padding-x">
                                <div class="large-12 cell">
                                    <p> Application Status</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    );
  }
}

export default Dashboard;