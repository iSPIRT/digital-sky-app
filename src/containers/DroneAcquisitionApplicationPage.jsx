import React from 'react';
import queryString from 'query-string'

import DroneAcquisitionApplicationStep1 from '../components/DroneAcquisitionApplicationStep1';
import DroneAcquisitionApplicationStep2 from '../components/DroneAcquisitionApplicationStep2';
import DroneAcquisitionApplicationStep3 from '../components/DroneAcquisitionApplicationStep3';
import HeaderApplicationForm from '../components/HeaderApplicationForm';
import { downloadFile } from '../actions/downloadFileActions';

class DroneAcquisitionApplicationPage extends React.Component {
   
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
            modeOfAcquisitionOptions : ['LEASE', 'PURCHASE'],
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[],
            currentStep: 1,
        }
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
        const { saving, saved, errors, currentApplicationForm} = this.props;
        const { currentStep } = this.state;

        return (
            <div className="page-form">
                <HeaderApplicationForm headerText= { this.headerText } step= { currentStep } applicationStatus = { currentApplicationForm.status } /> 
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
                                    step = { currentStep }
                                    applicationType= { this.applicationType }
                                    downloadDocument= { this.downloadDocument }
                                />
                            );  
                    }
                })()} 
            </div>           
        );
    }
}

export default DroneAcquisitionApplicationPage;