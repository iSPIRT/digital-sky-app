import React from 'react';

import { Link } from 'react-router-dom'

import FormErrors from '../components/FormErrors';

import DashboardApplicationView from './DashboardApplicationView';

class Dashboard extends React.Component {
  render() {

    const pilotProfileId = localStorage.getItem('pilotProfileId');
    const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
    const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');

    const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
    const hasPilotProfile = ( pilotProfileId > 0)
    const { errors, applications } = this.props;

    return (
            <div>
                <div className="page-header dashboard-header">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                {   !hasPilotProfile &&
                                    <div>
                                        <p> If you are pilot, setup your pilot profile to begin</p>
                                        <Link to="/profile" className="button">Setup my Pilot Profile</Link>
                                    </div>
                                }

                                {   hasPilotProfile &&
                                    <Link to="/profile" className="button">Update my Pilot Profile</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="page-header dashboard-header">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                {   !hasOperatorProfile &&
                                    <div>
                                        <p> If you are an operator, setup your operator profile to begin</p>
                                        <Link to="/profile" className="button">Setup my Operator Profile</Link>
                                    </div>
                                }

                                {   hasOperatorProfile &&
                                    <div>
                                        <Link to="/profile" className="button">Update my Operator Profile</Link>
                                        <Link to="/localDroneAcquisitionApplication" className="button">Apply here for Local Drone Acquisition</Link>
                                        <Link to="/importDroneApplication" className="button">Apply here to Import Drones</Link>
                                        <Link to="/uaopApplication" className="button">Apply here to for UAOP Licence</Link>
                                        <Link to="/uinApplication" className="button">Apply here to for UIN</Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-dashboard">
                    <section id="application-status">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2> Application Status</h2>
                                     <FormErrors errors = {errors}/>
                                     <DashboardApplicationView applications={applications}/>
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