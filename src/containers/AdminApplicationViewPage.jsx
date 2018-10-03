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

import { approveApplicationsAction } from '../actions/adminActions';

import { loadUserAirspaceCategoriesAction} from '../actions/userAirspaceCategoryActions';

import { loadApplicationsAction } from '../actions/adminActions';


class AdminApplicationViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.updateApplicationStatus = this.updateApplicationStatus.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        this.loadAirspaceCategories = this.loadAirspaceCategories.bind(this);
        this.state = {
            applicationType: queryParams.type,
            applicationId: queryParams.id
        }
        if(!this.props.adminApplications[queryParams.type]){
            this.props.dispatch(loadApplicationsAction(queryParams.type));
        }
    }

    downloadDocument(documentName){
        const filePath = "applicationForm/"+this.state.applicationType+"/"+this.state.applicationId+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    loadAirspaceCategories() {
        return this.props.dispatch(loadUserAirspaceCategoriesAction());
    }

    updateApplicationStatus(status, event){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: this.state.applicationId,
            status
        };

        this.props.dispatch(approveApplicationsAction(this.state.applicationType, this.state.applicationId, approveRequestBody));
    }

    render() {
        const {applicationType, applicationId} = this.state;
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
                            { applicationType === LOCAL_DRONE_ACQUISITION_APPLICATION && <label className="page-heading">Local Drone Acquisition Application</label> }
                            { applicationType === IMPORT_DRONE_APPLICATION && <label className="page-heading">Import Drone Application</label> }
                            { applicationType === UIN_APPLICATION && <label className="page-heading">UIN Application</label> }
                            { applicationType === FLY_DRONE_PERMISSION_APPLICATION && <label className="page-heading">Fly Drone Permission Application</label> }
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
                            { applicationType === FLY_DRONE_PERMISSION_APPLICATION && <FlyDronePermissionApplicationView application={currentApplication} airspaceCategories={airspaceCategories} downloadDocument={this.downloadDocument} loadAirspaceCategories={this.loadAirspaceCategories}/> }
                        </div>
                     </div>
                </div>
                {   currentApplication.status === 'SUBMITTED' &&
                    <div className="view-application-footer">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <a onClick={(e) =>  this.updateApplicationStatus('APPROVED', e)} className="button button-accept">Accept Application</a>
                                    <a onClick={(e) =>  this.updateApplicationStatus('REJECTED', e)} className="button button-deny">Deny Application</a>
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