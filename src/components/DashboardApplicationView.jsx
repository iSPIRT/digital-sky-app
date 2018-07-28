import React from 'react';

import { Link } from 'react-router-dom'

class DashboardApplicationView extends React.Component {

    constructor(props) {
        super(props);
        this.applicationsMarkup = this.applicationsMarkup.bind(this);
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
                                    return <div className={this.applicationStatusClass(application.status)} data-equalizer>
                                            <div className="details" data-equalizer-watch>
                                                <p className="title">{application.status}</p>
                                                <p className="info">{application.type}</p>
                                                <p className="meta">{this.applicationDate(application)}</p>
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
        if(!applications) return null;
        if(applications.length < 1) return <p> No Applications to Show </p>;
        return  (
            <div className="all-status">
                    {this.applicationsMarkup(applications)}
            </div>
        );
    }
}

export default DashboardApplicationView;