import React from 'react';

import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import queryString from 'query-string'

import FlyDronePermissionApplicationStep1 from '../components/FlyDronePermissionApplicationStep1';
import FlyDronePermissionApplicationStep2 from '../components/FlyDronePermissionApplicationStep2';
import FlyDronePermissionApplicationStep3 from '../components/FlyDronePermissionApplicationStep3';
import { loadApplicationsAction, createApplicationAction, updateApplicationAction } from '../actions/flyDronePermissionApplicationActions';
import { loadUserAirspaceCategoriesAction, loadUserAirspaceCategoriesByHeightAction} from '../actions/userAirspaceCategoryActions';
import { downloadFile } from '../actions/downloadFileActions';
import {loadPilotProfile, pilotProfileFormLoaded} from "../actions/pilotProfileActions";


class FlyDronePermissionApplicationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1
        };

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.createApplication = this.createApplication.bind(this);
        this.updateApplication = this.updateApplication.bind(this);
        this.findApplicationId = this.findApplicationId.bind(this);
        this.findDroneId = this.findDroneId.bind(this);
        this.loadAirspaceCategories = this.loadAirspaceCategories.bind(this);
        this.loadAirspaceCategoriesByHeight = this.loadAirspaceCategoriesByHeight.bind(this);

        const applicationId = this.findApplicationId();
        const droneId = this.findDroneId();
        if(!droneId){
            history.push("/dashboard")
        }

        this.props.dispatch(pilotProfileFormLoaded());
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        if( this.props.pilotProfileSaved && this.props.profile.empty ){
            this.props.dispatch(loadPilotProfile(pilotProfileId));
        }

        if( applicationId && this.props.applications.length === 0 ){
            this.props.dispatch(loadApplicationsAction(droneId));
        }
    }

    downloadDocument(documentName){
        const applicationId = this.findApplicationId();
        const filePath = "applicationForm/flyDronePermissionApplication/"+applicationId+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    findApplicationId(){
        const queryParams = queryString.parse(this.props.location.search)
        return queryParams.id
    }

    findDroneId(){
        const queryParams = queryString.parse(this.props.location.search)
        return queryParams.droneId
    }

    nextStep(){
        this.setState({currentStep: (this.state.currentStep+1)});
    }

    previousStep(){
        this.setState({currentStep: (this.state.currentStep-1)});
    }

    loadAirspaceCategories(application) {
        return this.props.dispatch(loadUserAirspaceCategoriesAction(application));
    }

    loadAirspaceCategoriesByHeight(application) {
        return this.props.dispatch(loadUserAirspaceCategoriesByHeightAction(application));
    }

    createApplication(application) {
        return this.props.dispatch(createApplicationAction(application));
    }

    updateApplication(applicationId, application) {
        return this.props.dispatch(updateApplicationAction(applicationId, application));
    }

    render(){

        const { savingApplication, applications, errors, airspaceCategories,profile } = this.props;

        const applicationId = this.findApplicationId();

        const droneId = this.findDroneId();

        var application = {
            droneId: parseInt(droneId, 0),
            id: "0",
            pilotBusinessIdentifier:profile?profile.businessIdentifier:""
        };

        if(applicationId) {
            application =  applications.find( application => application.id === applicationId )
        }

        if(!application) return <p>Invalid Application</p>;

        var {currentStep} = this.state;

        if(application && application.status && application.status  !== 'DRAFT'){
            currentStep = 3;
        }
        switch (currentStep) {
            case 1:
                return <FlyDronePermissionApplicationStep1
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            nextStep={this.nextStep}
                            createApplication={this.createApplication}
                            updateApplication={this.updateApplication}
                        />
            case 2:
                return <FlyDronePermissionApplicationStep2
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            updateApplication={this.updateApplication}
                            loadAirspaceCategories= {this.loadAirspaceCategories}
                            airspaceCategories= {airspaceCategories}
                        />
            default:
                return <FlyDronePermissionApplicationStep3
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            previousStep={this.previousStep}
                            updateApplication={this.updateApplication}
                            downloadDocument={this.downloadDocument}
                            loadAirspaceCategories= {this.loadAirspaceCategoriesByHeight}
                            airspaceCategories= {airspaceCategories}
                        />
        }
    }
}

function mapStateToProps(state) {
     const { savingApplication, errors, applications } = state.flyDronePermissionApplications;
     const {pilotProfileSaved,profile}=state.pilotProfile;
     const { airspaceCategories } = state.userAirspaceCategory;
     var allErrors = [...errors, ...state.userAirspaceCategory.errors];
     return {
        savingApplication,
        applications,
         profile,
         pilotProfileSaved,
        airspaceCategories,
        errors: allErrors,
     };
}
export default connect(
  mapStateToProps
)(FlyDronePermissionApplicationPage)