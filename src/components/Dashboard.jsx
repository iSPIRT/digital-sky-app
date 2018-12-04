import React from 'react';

import { Link } from 'react-router-dom'

import FormErrors from '../components/FormErrors';

import DashboardApplicationView from './DashboardApplicationView';
import DashBoardOperatorDroneView from './DashboardOperatorDroneView';

class Dashboard extends React.Component {
  
    render() {

    const pilotProfileId = localStorage.getItem('pilotProfileId');
    const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
    const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
    const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
    const username = localStorage.getItem('userName');

    const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
    const hasPilotProfile = ( pilotProfileId > 0)
    const hasManufacturerProfile = ( manufacturerProfileId > 0 );
    const { errors, applications, operatorDrones } = this.props;
    
    return (
            <div>
                <div>
                    <div className="page-header dashboard-header">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-6 cell">
                                    <div className="buttons-wrap">
                                    {
                                        !hasPilotProfile && !hasManufacturerProfile && !hasOperatorProfile &&
                                        <Link to="/profile" className="button">Apply for a license</Link>
                                    }
                                    {
                                        (hasPilotProfile || hasOperatorProfile) &&
                                        <Link to="/localDroneAcquisitionApplication" className="button">Apply here for Local Drone</Link>
                                    }
                                    {
                                        (hasPilotProfile || hasOperatorProfile) &&
                                        <Link to="/importDroneApplication" className="button">Apply here to Import Drones</Link>
                                    }
                                    {
                                        hasOperatorProfile &&
                                        <Link to="/uaopApplication" className="button">Apply here for UAOP Licence</Link>
                                    }
                                    {
                                        hasManufacturerProfile &&
                                        <Link to="/droneType" className="button">Create New RPAS Types</Link>
                                    }
                                    </div>
                                </div>
                                < div className = "large-6 cell show-for-large" > 
                                    <div className="dashboard-tite-wrap">
                                        <div className="show-for-medium">
                                            <h2 className="user-name">{username && username}</h2>
                                            <h5 className="user-id">ID: {username && username.split(' ').join('_')}@digitalsky</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                </div>
                <br/>
                <div className="grid-container">
                    <div className="page-dashboard">
                        <section id="application-status">
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                {  hasOperatorProfile &&
                                    <div className="large-6 cell">
                                        <h3> Application Status</h3>
                                        <FormErrors errors = {errors}/>
                                        <DashboardApplicationView applications={applications}/>
                                    </div>
                                }
                                {  hasOperatorProfile &&
                                    <div className="large-6 cell my-drones">
                                        <h3>My Drones</h3>
                                        <FormErrors errors = {errors}/>
                                        <DashBoardOperatorDroneView operatorDrones={operatorDrones} droneSelected={this.droneSelected}/>
                                    </div>
                                }
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {/* < section id = "occurence-report" > 
                    <div class="grid-container">
                        <div class="grid-x grid-padding-x">
                            <div class="large-6 cell">
                                <h3>Occurence Report</h3>
                                <p>When an issue occurs during a drone flight, please report below.</p>
                                <a href="#" class="button button-light-red">Report now</a>
                            </div>
                        </div>
                    </div> 
                </section> */}
            </div>
    );
  } 
}

export default Dashboard;