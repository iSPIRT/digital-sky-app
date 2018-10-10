import React from 'react';

import queryString from 'query-string'

import DroneAcquisitionApplicationStep1 from '../components/DroneAcquisitionApplicationStep1';
import DroneAcquisitionApplicationStep2 from '../components/DroneAcquisitionApplicationStep2';
import DroneAcquisitionApplicationStep3 from '../components/DroneAcquisitionApplicationStep3';

import { INDIVIDUAL_OPERATOR_TYPE, ORGANIZATION_OPERATOR_TYPE } from '../constants/operatorType';

import { downloadFile } from '../actions/downloadFileActions';
import { loadMetaDataAction } from '../actions/metaDataActions';
import { loadOperatorProfile } from '../actions/operatorProfileActions';
import { loadUserDetailsAction } from '../actions/userActions';

export default class DroneAcquisitionApplicationPage extends React.Component {
   
    constructor(props, applicationFormLoadedAction,loadApplicationAction ) {
        super(props);
        this.props = props;
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.createApplication = this.createApplication.bind(this);
        this.updateApplication = this.updateApplication.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            categoryOptions : ['EXISTING_UAOP_HOLDER','UAOP_APPLICANT','WITHOUT_UAOP'],
            modeOfAcquisitionOptions : ['PURCHASE','LEASE'],
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[],
            currentStep: 1,
        }
        this.props.dispatch(loadMetaDataAction());
        var operatorType, operatorProfileId;
        if(localStorage.getItem('individualOperatorProfileId') > 0 ) {
            operatorProfileId = localStorage.getItem('individualOperatorProfileId');
            operatorType = INDIVIDUAL_OPERATOR_TYPE;
        } else  {
            operatorProfileId = localStorage.getItem('organizationOperatorProfileId');
            operatorType = ORGANIZATION_OPERATOR_TYPE;
        };
        this.props.dispatch(loadOperatorProfile(operatorType, operatorProfileId));
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.currentApplicationForm.id){
            this.props.dispatch(loadApplicationAction(applicationId));
        }
    }

    nextStep(){
        this.setState({currentStep: (this.state.currentStep+1)});
    }

    previousStep(){
        this.setState({currentStep: (this.state.currentStep-1)});
    }

    componentWillMount() {
        if(this.props.user && this.props.user.id ) {
            const userId = this.props.user.id;
            this.props.dispatch(loadUserDetailsAction(userId));
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.currentApplicationForm.status && nextProps.currentApplicationForm.status  !== 'DRAFT'){
            this.setState({currentStep: 3});
        }
    }

    createApplication(application) {
        this.props.dispatch(this.createApplicationAction(application));
    }

    updateApplication(application, id) {
        this.props.dispatch(this.editApplicationAction(application, id));
    }

    downloadDocument(documentName){
        const filePath = this.downloadDocumentBaseUrl + this.props.currentApplicationForm.id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {
        const { saving, saved, errors, currentApplicationForm, droneTypes, profile, userDetails} = this.props;
        const { currentStep } = this.state;

        return (
            <div className="page-form">
                {(() => {
                    switch(currentStep) {
                        case 1: 
                            return(
                                <DroneAcquisitionApplicationStep1 name="applicationStep1" 
                                    categoryOptions={ this.state.categoryOptions } 
                                    nationalityOptions={ this.state.nationalityOptions }
                                    saving={ saving } saved={ saved } errors={ errors } 
                                    applicationForm={ currentApplicationForm }
                                    createApplication={ this.createApplication } updateApplication={ this.updateApplication }
                                    nextStep={ this.nextStep }
                                    step = { currentStep }
                                    droneTypes = { droneTypes }
                                    operatorProfile = { profile }
                                    user = { userDetails }
                                    headerText = { this.headerText }
                                />
                            );
                        case 2:
                            return(
                                <DroneAcquisitionApplicationStep2 name="applicationStep2"
                                    modeOfAcquisitionOptions={ this.state.modeOfAcquisitionOptions } 
                                    saving={ saving } saved={ saved } errors={ errors }
                                    applicationForm={ currentApplicationForm }
                                    updateApplication={ this.updateApplication }
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    step = { currentStep }
                                    applicationType= { this.applicationType }
                                    downloadDocument= { this.downloadDocument } 
                                    headerText = { this.headerText }
                                />
                            );
                        case 3:
                        default:
                            return(
                                <DroneAcquisitionApplicationStep3 name="applicationReview" 
                                    applicationForm={ currentApplicationForm } 
                                    updateApplication={ this.updateApplication } 
                                    step= { currentStep } errors={ errors } saved={ saved } 
                                    saving={ saving } previousStep={this.previousStep}
                                    applicationType= { this.applicationType }
                                    downloadDocument= { this.downloadDocument }
                                    headerText = { this.headerText }
                                />
                            );  
                    }
                })()} 
            </div>           
        );
    }
}


