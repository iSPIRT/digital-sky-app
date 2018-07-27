import React from 'react';

import FormErrors from '../components/FormErrors';

import view from '../img/view.svg';

import { LOCAL_DRONE_ACQUISITION_APPLICATION } from '../constants/applicationType';
import { IMPORT_DRONE_APPLICATION } from '../constants/applicationType';
import { UAOP_APPLICATION_APPLICATION } from '../constants/applicationType';
import { UIN_APPLICATION } from '../constants/applicationType';

function Applications(props) {
    const {applications} = props;
    if(!applications) return null;
    if(applications.length < 1) return <p> No Applications to Show </p>;
    return applications.map((application) =>
        <div className="application">
            <div className="details">
                <div className="wrap">
                    <h3>{application.applicant}</h3>
                    <p>{application.submittedDate}</p>
                </div>
            </div>
            <div className="go-to-location">
                <a onClick={(e) => props.applicationSelected(application.id)} className="button"><img src={view} alt="view"/></a>
            </div>
        </div>
   );
}
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        this.cssClassMenu = this.cssClassMenu.bind(this);
    }

    applicationTypeSelected(applicationType){
        this.props.applicationTypeSelected(applicationType);
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
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(LOCAL_DRONE_ACQUISITION_APPLICATION)} className={this.cssClassMenu(LOCAL_DRONE_ACQUISITION_APPLICATION)}><span>Local Drone Acquisition Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(IMPORT_DRONE_APPLICATION)} className={this.cssClassMenu(IMPORT_DRONE_APPLICATION)}><span>Import Drone Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(UAOP_APPLICATION_APPLICATION)} className={this.cssClassMenu(UAOP_APPLICATION_APPLICATION)}><span>UAOP Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(UIN_APPLICATION)} className={this.cssClassMenu(UIN_APPLICATION)}><span>UIN Applications</span></a></li>
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

export default AdminDashboard;