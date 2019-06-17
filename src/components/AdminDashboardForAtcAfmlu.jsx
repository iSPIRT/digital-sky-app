import React from 'react';

import FormErrors from '../components/FormErrors';

import view from '../img/view.svg';

import { FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';

class Applications extends React.Component {

    applicationStatusClass(status) {
        var cssClass = 'application';
        if(status ===  'APPROVEDBYATC' || status ===  'APPROVEDBYAFMLU'){
            cssClass = 'application status-accepted';
        } else if (status=== "REJECTEDBYATC" || status ===  'REJECTEDBYAFMLU'){
            cssClass = 'application status-declined';
        }
        return cssClass;
    }

    render() {
        const {applications} = this.props;
        if(!applications) return null;
        if(applications.length < 1) return <p> No Applications to Show </p>;
        return applications.map((application) =>
            <div className={this.applicationStatusClass(application.status)}>
                <div className="details">
                    <div className="wrap">
                        <h3>{application.applicant}</h3>
                        <p>{application.submittedDate}</p>
                        <p>ID: {application.id}</p>
                    </div>
                </div>
                <div className="go-to-location">
                    <a onClick={(e) => this.props.applicationSelected(application.id)} className="button"><img src={view} alt="view"/></a>
                </div>
            </div>
       );
   }
}

class AdminDashboardForAtcAfmlu extends React.Component {

    constructor(props) {
        super(props);        
        this.applicationSelected = this.applicationSelected.bind(this);
        this.cssClassMenu = this.cssClassMenu.bind(this);
    }

    applicationSelected(applicationId){
        this.props.applicationSelected(applicationId);
    }

    cssClassMenu(applicationType){
        const {selectedApplicationType} = this.props;
        return selectedApplicationType === applicationType ? 'operator active' : 'operator';
    }

    render() {
        const {applications} = this.props;
        const {errors} = this.props;
        return (
            <div>
                <div className="admin-header">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <ul className="menu">                                    
                                    <li><a onClick={(e) =>  null} className={this.cssClassMenu(FLY_DRONE_PERMISSION_APPLICATION)}><span>Permission Applications</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-dashboard">
                    <section id="all-applications-admin">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <FormErrors errors = {errors}/>
                                    <div className="applications">
                                        <Applications applications={applications} applicationSelected={this.applicationSelected}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default AdminDashboardForAtcAfmlu;