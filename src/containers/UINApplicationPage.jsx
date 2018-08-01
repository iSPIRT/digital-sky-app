import React from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string'

import UINApplicationStep1 from '../components/UINApplicationStep1';
import UINApplicationStep2 from '../components/UINApplicationStep2';
import UINApplicationStep3 from '../components/UINApplicationStep3';
import HeaderApplicationForm from '../components/HeaderApplicationForm';

import { createUINApplicationAction, editUINApplicationAction, applicationFormLoadedAction, loadUINApplicationAction } from '../actions/uinApplicationActions';

import { downloadFile } from '../actions/downloadFileActions';

class UINApplicationPage extends React.Component {
   
    constructor(props) {
        super(props);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.createApplication = this.createApplication.bind(this);
        this.updateApplication = this.updateApplication.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[],
            currentStep: 1
        }
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.applicationForm.id){
            this.props.dispatch(loadUINApplicationAction(applicationId));
        }
    }

    nextStep(){
        this.setState({currentStep: (this.state.currentStep+1)});
    }

    previousStep(){
        this.setState({currentStep: (this.state.currentStep-1)});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.applicationForm.status && nextProps.applicationForm.status  !== 'DRAFT'){
            this.setState({currentStep: 3});
        }
    }

    createApplication(applicationForm) {
        this.props.dispatch(createUINApplicationAction(applicationForm));
    }

    updateApplication(applicationForm, id) {
        this.props.dispatch(editUINApplicationAction(applicationForm, id));
    }

    downloadDocument(documentName){
        const filePath = "applicationForm/uinApplication/"+this.props.applicationForm.id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {

        const { saving, saved, errors, applicationForm} = this.props;
        const { nationalityOptions, modeOfAcquisitionOptions } = this.state;

        const {currentStep} = this.state;
        return (
            <div className="page-form">
                <HeaderApplicationForm headerText="UIN Application" step= { currentStep } applicationStatus = { applicationForm.status } /> 
                {(() => {
                    switch(currentStep) {
                        case 1: 
                            return(
                                <UINApplicationStep1 name="applicationStep1" 
                                    saving={ saving } saved={ saved } errors={ errors } 
                                    applicationForm={ applicationForm }
                                    createApplication={ this.createApplication } updateApplication={ this.updateApplication }
                                    nextStep={ this.nextStep }
                                    step = { currentStep }
                                    downloadDocument= { this.downloadDocument }
                                />
                            );
                        case 2:
                            return(
                                <UINApplicationStep2 name="applicationStep2" 
                                    nationalityOptions = { nationalityOptions }
                                    modeOfAcquisitionOptions={ modeOfAcquisitionOptions } 
                                    saving={ saving } saved={ saved } errors={ errors } 
                                    applicationForm={ applicationForm }
                                    updateApplication={ this.updateApplication }
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    step = { currentStep }
                                    downloadDocument= { this.downloadDocument } 
                                />
                            );
                        case 3:
                        default:
                            return(
                                <UINApplicationStep3 name="applicationReview" 
                                    applicationForm={ applicationForm } 
                                    updateApplication={ this.updateApplication }
                                    errors={ errors } saved={ saved } saving={ saving } 
                                    previousStep={this.previousStep}
                                    step = { currentStep }
                                    downloadDocument= { this.downloadDocument } 
                                />
                            );  
                    }
                })()}     
            </div>           
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, applicationForm } = state.uinApplications;
    return {
       saving,
       saved,
       errors,
       applicationForm
    };
}

export default connect(
 mapStateToProps
)(UINApplicationPage)
