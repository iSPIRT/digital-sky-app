import React from 'react';
import { connect } from 'react-redux';

import queryString from 'query-string';

import UINApplicationStep1 from '../components/UINApplicationStep1';
import UINApplicationStep2 from '../components/UINApplicationStep2';
import UINApplicationStep3 from '../components/UINApplicationStep3';
import HeaderApplicationForm from '../components/HeaderApplicationForm';
import { loadMetaDataAction, loadDroneDeviceIds } from '../actions/metaDataActions';

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
            formErrors:[],
            currentStep: 1
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

    componentWillMount() {
        this.props.dispatch(loadMetaDataAction());
        this.props.dispatch(loadDroneDeviceIds());
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search);
        const applicationId = queryParams.id;
        this.setState({
                operatorDroneId: queryParams.operatorDroneId,
                selectedDroneTypeId: queryParams.selectedDroneTypeId
            });
        if( applicationId && applicationId !== this.props.applicationForm.id){
            this.props.dispatch(loadUINApplicationAction(applicationId));
        }
    }

    createApplication(applicationForm) {
        this.props.dispatch(createUINApplicationAction(applicationForm));
    }

    updateApplication(applicationForm, id) {
        this.props.dispatch(editUINApplicationAction(applicationForm, id));
    }

    downloadDocument(documentName) {
        const filePath = "applicationForm/uinApplication/"+this.props.applicationForm.id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {

        const { saving, saved, errors, applicationForm, droneTypes, deviceIds } = this.props;
        const { nationalityOptions, modeOfAcquisitionOptions, currentStep, selectedDroneTypeId, operatorDroneId } = this.state;

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
                                    selectedDroneTypeId =  { selectedDroneTypeId }
                                    droneTypes = { droneTypes }
                                    operatorDroneId = { operatorDroneId }
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
                                    nextStep={ this.nextStep }
                                    previousStep={this.previousStep}
                                    step = { currentStep }
                                    downloadDocument= { this.downloadDocument } 
                                    droneTypes = { droneTypes }
                                    selectedDroneTypeId =  { selectedDroneTypeId }
                                    operatorDroneId = { operatorDroneId }
                                    deviceIds = { deviceIds }
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
    const { droneTypes, deviceIds } = state.metaData;
    return {
       saving,
       saved,
       errors,
       applicationForm,
       droneTypes,
       deviceIds
    };
}

export default connect(
 mapStateToProps
)(UINApplicationPage)
