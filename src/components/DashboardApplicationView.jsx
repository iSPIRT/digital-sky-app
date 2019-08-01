import React from 'react';

import { Link } from 'react-router-dom'

class DashboardApplicationView extends React.Component {

    constructor(props) {
        super(props);
        this.applicationsMarkup = this.applicationsMarkup.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle: false
        }
    }

    toggle(event) {
        this.setState({toggle:!this.state.toggle});
    }

    applicationStatusClass(status){
        if(!status || status === 'DRAFT'  ) return 'status status-draft';
        if(status === 'SUBMITTED'  ) return 'status status-process';
        if(status === 'APPROVED'  ) return 'status status-accepted';
        if(status === 'REJECTED'  ) return 'status status-declined';
    }

    applicationDate(application){
        const { status } = application;
        if(!status || status === 'DRAFT'  ) return 'Last Modified On:'+application.updatedDate;
        if(status === 'SUBMITTED'  ) return 'Submitted On:'+application.submittedDate;
        if(status === 'APPROVED'  ) return 'Accepted On:'+application.approvalDateDate;
        if(status === 'REJECTED'  ) return 'Rejected On:'+application.approvalDateDate;
    }

    applicationAction(status){
        if(!status || status === 'DRAFT'  ) return 'Edit';
        return 'View'
    }

    applicationLink(application){
        if(application.type === 'ImportDroneApplication') return '/importDroneApplication?id='+application.id;
        if(application.type === 'LocalDroneAcquisitionApplication') return '/localDroneAcquisitionApplication?id='+application.id;
        if(application.type === 'UAOPApplication') return '/uaopApplication?id='+application.id;
        if(application.type === 'UINApplication') return '/uinApplication?id='+application.id;
    }

    applicationsMarkup(applications) {

        return applications.map((application) =>
                                {
                                    const applicationType=application.type.replace(/([A-Z])/g, " $1");
                                    return <div className={this.applicationStatusClass(application.status)} data-equalizer>
                                            <div className="details" data-equalizer-watch>
                                                <p className="title">{application.status}</p>
                                                <p className="info">{applicationType}</p>
                                                <p className="meta">{this.applicationDate(application)}</p>
                                                <p className="meta">ID: {application.id}</p>
                                            </div>
                                            <div className="action" data-equalizer-watch>
                                                <Link to={this.applicationLink(application)} className="button">{this.applicationAction(application.status)}</Link>
                                            </div>
                                       </div>
                                }
        )
    }


    render() {
        const {applications} = this.props;
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
        const hasPilotProfile = ( pilotProfileId > 0)
        const hasManufacturerProfile = ( manufacturerProfileId > 0 );
        const toggle = this.state.toggle
        if(!applications) return null;
        if(applications.length < 1){
            return  <div className="application no-data">
                        <p>Once you’ve applied for a RPA, you will see your application statuses here.</p>
                        <a onClick={this.toggle} className="button">Apply now</a>
                        <div className="reveal-overlay" style={{display: toggle?'block':'none',top:'21px'}}>
                            <div className="reveal" id="application-status-modal" style={{display: toggle?'block':'none',top:'21px'}} aria-hidden={toggle?"false":"true"} data-reveal>
                            {
                                (hasPilotProfile || hasOperatorProfile) && <Link to="/localDroneAcquisitionApplication" className="button">Apply here for Local RPA</Link>
                            }
                            {
                                (hasPilotProfile || hasOperatorProfile) && <Link to="/importDroneApplication" className="button">Apply here to Import RPA</Link>
                            }
                            {
                                hasOperatorProfile && <Link to="/uaopApplication" className="button">Apply here for UAOP</Link>
                            }
                            {
                                hasManufacturerProfile && <Link to="/droneType" className="button">Create New RPAS Types</Link>
                            }
                                <button className="close-button" data-close aria-label="Close modal" type="button" onClick={this.toggle}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>;
        }
        return  (
            <div className="all-status">
                    {this.applicationsMarkup(applications)}
            </div>
        );
    }
}

export default DashboardApplicationView;