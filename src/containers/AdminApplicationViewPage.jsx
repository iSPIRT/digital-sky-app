import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import { Link } from 'react-router-dom'

import FormErrors from './FormErrors';

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
            <div className="view-application">
                <div id="application-preview">
                    <div className="page-form">
                        <div className="grid-container">
                            {(() => {
                                switch(applicationType) {
                                    case UAOP_APPLICATION_APPLICATION:
                                    return (
                                        <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>UAOP Application</h2>
                                                <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                                            </div>
                                            <FormErrors errors = {errors}/>
                                            { applicationType === UAOP_APPLICATION_APPLICATION && <UAOPApplicationView application={currentApplication} downloadDocument={this.downloadDocument}/> }
                                        </div>
                                    )
                                    case IMPORT_DRONE_APPLICATION:
                                    return (
                                        <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>Import Drone Application</h2>
                                                <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                                            </div>
                                            <FormErrors errors = {errors}/>
                                            { applicationType === IMPORT_DRONE_APPLICATION && <DroneAcquisitionApplicationView applicationForm={currentApplication} downloadDocument={this.downloadDocument} type="importDrone" /> }
                                        </div>
                                    )
                                    case UIN_APPLICATION:
                                    return (
                                        <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>UIN Application</h2>
                                                <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                                            </div>
                                            <FormErrors errors = {errors}/>
                                            { applicationType === UIN_APPLICATION && <UINApplicationView application={currentApplication} downloadDocument={this.downloadDocument} /> }
                                        </div>
                                    )
                                    case FLY_DRONE_PERMISSION_APPLICATION:
                                    return (
                                        <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>Fly Drone Permission Application</h2>
                                                <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                                            </div>
                                            <FormErrors errors = {errors}/>
                                            { applicationType === FLY_DRONE_PERMISSION_APPLICATION && <FlyDronePermissionApplicationView application={currentApplication} airspaceCategories={airspaceCategories} downloadDocument={this.downloadDocument} loadAirspaceCategories={this.loadAirspaceCategories}/> }
                                        </div>
                                    )
                                    case LOCAL_DRONE_ACQUISITION_APPLICATION:
                                    default:
                                    return (
                                        <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>Local Drone Acquisition Application</h2>
                                                <Link to={'/admin/dashboard?type='+applicationType}>Back</Link>
                                            </div>
                                            <FormErrors errors = {errors}/>
                                            { applicationType === LOCAL_DRONE_ACQUISITION_APPLICATION && <DroneAcquisitionApplicationView applicationForm={currentApplication} downloadDocument={this.downloadDocument} type="localDroneAcquisition" /> }
                                        </div>
                                    )
                                }
                            })()} 
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