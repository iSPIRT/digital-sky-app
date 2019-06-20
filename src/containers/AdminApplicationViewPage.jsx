import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import { Link } from 'react-router-dom'

import FormErrors from '../components/FormErrors';

import UAOPApplicationView from '../components/UAOPApplicationView'
import DroneAcquisitionApplicationView from '../components/DroneAcquisitionApplicationView';
import UINApplicationView from '../components/UINApplicationView';
import FlyDronePermissionApplicationView from '../components/FlyDronePermissionApplicationView';

import { UAOP_APPLICATION_APPLICATION, LOCAL_DRONE_ACQUISITION_APPLICATION, IMPORT_DRONE_APPLICATION, UIN_APPLICATION, FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';

import { downloadFile } from '../actions/downloadFileActions';

import { approveApplicationsAction,approveApplicationsByAtcAction,approveApplicationsByAfmluAction } from '../actions/adminActions';

import { loadUserAirspaceCategoriesByHeightAction} from '../actions/userAirspaceCategoryActions';

import { loadApplicationsAction } from '../actions/adminActions';


class AdminApplicationViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.updateApplicationStatus = this.updateApplicationStatus.bind(this);
        this.updateApplicationStatusAtc = this.updateApplicationStatusAtc.bind(this);
        this.updateApplicationStatusAfmlu = this.updateApplicationStatusAfmlu.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        this.loadAirspaceCategoriesByHeight = this.loadAirspaceCategoriesByHeight.bind(this);                        
        this.state = {
            applicationType: queryParams.type,
            applicationId: queryParams.id,
            isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
            isAtcAdmin: JSON.parse(localStorage.getItem('isAtcAdmin')),
            isAfmluAdmin: JSON.parse(localStorage.getItem('isAfmluAdmin'))
        }
        if(this.state.isAdmin && !this.props.adminApplications[queryParams.type]){
            this.props.dispatch(loadApplicationsAction(queryParams.type,"admin"));
        }
        else if(this.state.isAtcAdmin && !this.props.adminApplications[queryParams.type]){
            this.props.dispatch(loadApplicationsAction(queryParams.type,"atcAdmin"));
        }
        else if(this.state.isAfmluAdmin && !this.props.adminApplications[queryParams.type]){
            this.props.dispatch(loadApplicationsAction(queryParams.type,"afmluAdmin"));
        }
    }

    downloadDocument(documentName){
        const filePath = "applicationForm/"+this.state.applicationType+"/"+this.state.applicationId+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    loadAirspaceCategoriesByHeight(application) {
        return this.props.dispatch(loadUserAirspaceCategoriesByHeightAction(application));
    }

    updateApplicationStatus(status, event){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: this.state.applicationId,
            status
        };

        this.props.dispatch(approveApplicationsAction(this.state.applicationType, this.state.applicationId, approveRequestBody));
    }

    updateApplicationStatusAtc(status, event){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: this.state.applicationId,
            status
        };

        this.props.dispatch(approveApplicationsByAtcAction(this.state.applicationType, this.state.applicationId, approveRequestBody));
    }

    updateApplicationStatusAfmlu(status, event){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: this.state.applicationId,
            status
        };

        this.props.dispatch(approveApplicationsByAfmluAction(this.state.applicationType, this.state.applicationId, approveRequestBody));
    }

    render() {
        const {applicationType, applicationId, isAtcAdmin, isAfmluAdmin, isAdmin} = this.state;
        const applications = this.props.adminApplications[applicationType];
        const errors = this.props.adminApplications.errors;
        const {airspaceCategories} = this.props;
        
        if(!applications || applications.length === 0) return <div/>;

        const currentApplication =  applications.find( application => application.id === applicationId )

        return(
            <div id="view-application">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-5 cell">
                            { applicationType === UAOP_APPLICATION_APPLICATION && <label className="page-heading">UAOP Application</label> }
                            { applicationType === LOCAL_DRONE_ACQUISITION_APPLICATION && <label className="page-heading">Local RPA Acquisition Application</label> }
                            { applicationType === IMPORT_DRONE_APPLICATION && <label className="page-heading">Import RPA Application</label> }
                            { applicationType === UIN_APPLICATION && <label className="page-heading">UIN Application</label> }
                            { applicationType === FLY_DRONE_PERMISSION_APPLICATION && <label className="page-heading">Fly RPA Permission Application</label> }
                            <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                        </div>
                    </div>
                </div>
                <div id="application-preview">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <FormErrors errors = {errors}/>
                            { applicationType === UAOP_APPLICATION_APPLICATION && <UAOPApplicationView application={currentApplication} downloadDocument={this.downloadDocument}/> }
                            { applicationType === LOCAL_DRONE_ACQUISITION_APPLICATION && <DroneAcquisitionApplicationView applicationForm={currentApplication} downloadDocument={this.downloadDocument} type="localDroneAcquisition" /> }
                            { applicationType === IMPORT_DRONE_APPLICATION && <DroneAcquisitionApplicationView applicationForm={currentApplication} downloadDocument={this.downloadDocument} type="importDrone" /> }
                            { applicationType === UIN_APPLICATION && <UINApplicationView application={currentApplication} downloadDocument={this.downloadDocument} /> }
                            { applicationType === FLY_DRONE_PERMISSION_APPLICATION && <FlyDronePermissionApplicationView application={currentApplication} airspaceCategories={airspaceCategories} downloadDocument={this.downloadDocument} loadAirspaceCategories={this.loadAirspaceCategoriesByHeight}/> }
                        </div>
                     </div>
                </div>
                {   currentApplication.status === 'SUBMITTED' &&
                    <div className="view-application-footer admin-footer">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                { isAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatus('APPROVED', e)} className="button button-accept">Accept Application</a>
                                }
                                { isAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatus('REJECTED', e)} className="button button-deny">Deny Application</a>
                                }
                                { isAtcAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatusAtc('APPROVEDBYATC', e)} className="button button-accept">Accept Application</a>
                                }
                                { isAtcAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatusAtc('REJECTEDBYATC', e)} className="button button-deny">Deny Application</a>
                                }              
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {   currentApplication.status === 'APPROVEDBYATC' &&
                    <div className="view-application-footer admin-footer">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                { isAfmluAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatusAfmlu('APPROVEDBYAFMLU', e)} className="button button-accept">Accept Application</a>
                                }
                                { isAfmluAdmin &&
                                    <a href='.' onClick={(e) =>  this.updateApplicationStatusAfmlu('REJECTEDBYAFMLU', e)} className="button button-deny">Deny Application</a>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
     const { adminApplications } = state;
     const { airspaceCategories } = state.userAirspaceCategory;
     return {
        adminApplications,
        airspaceCategories
     };
}

export default connect(
  mapStateToProps
)(AdminApplicationViewPage)