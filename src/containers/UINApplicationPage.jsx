import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'

import UINApplicationStep1 from '../components/UINApplicationStep1';
import UINApplicationStep2 from '../components/UINApplicationStep2';
import UINApplicationReview from '../components/UINApplicationReview';
import UINApplicationView from '../components/UINApplicationView';
import HeaderApplicationForm from '../components/HeaderApplicationForm';

import { createUINApplicationAction, editUINApplicationAction, applicationFormLoadedAction, loadUINApplicationAction, } from '../actions/uinApplicationActions';
import { formStepReduceAction } from '../actions/applicationFormStepActions';
import { downloadFile } from '../actions/downloadFileActions';

class UINApplicationPage extends React.Component {
   
    constructor(props) {
        super(props);
        this.removeStep = this.removeStep.bind(this);
        this.createForm = this.createForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[],
            step: 1
        }
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.applicationForm.id){
            this.props.dispatch(loadUINApplicationAction(applicationId));
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({saved: false});
        this.setState({formErrors: []});
    }

    removeStep() {
        this.props.dispatch(formStepReduceAction());
    }

    createForm(applicationForm) {
        this.props.dispatch(createUINApplicationAction(applicationForm));
    }

    updateForm(applicationForm, id) {
        this.props.dispatch(editUINApplicationAction(applicationForm, id));
    }

    downloadDocument(documentName){
        const filePath = "applicationForm/UINApplication/"+this.props.applicationForm.id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {
        const { saving, saved, errors, applicationForm} = this.props;
        const { nationalityOptions, modeOfAcquisitionOptions } = this.state;

        const step = applicationForm.status && applicationForm.status  !== 'DRAFT' ? 4 : this.props.step;
        
        return (
            <div className="page-form">
               { step && step < 4 && <HeaderApplicationForm applicationType="UIN Application" step= { step }/> }
                {(() => {
                    switch(step) {
                        case 1: 
                            return(
                                <UINApplicationStep1 name="applicationStep1" 
                                    saving={ saving } saved={ saved } errors={ errors } 
                                    applicationForm={ applicationForm }
                                    createForm={ this.createForm } updateForm={ this.updateForm }
                                    step= { step } goBack={ this.removeStep } 
                                    downloadDocument= { this.downloadDocument }
                                />
                            );
                        case 2:
                            return(
                                <UINApplicationStep2 name="applicationStep2" 
                                    nationalityOptions = { nationalityOptions }
                                    modeOfAcquisitionOptions={ modeOfAcquisitionOptions } 
                                    saving={ saving } saved={ saved } errors={ errors } applicationForm={ applicationForm }
                                    updateForm={ this.updateForm }
                                    step= { step } goBack={ this.removeStep }
                                    downloadDocument= { this.downloadDocument } 
                                />
                            );
                        case 3:
                            return(
                                <UINApplicationReview name="applicationReview" applicationForm={ applicationForm } updateForm={ this.updateForm } 
                                    step= { step } errors={ errors } saved={ saved } saving={ saving } goBack={ this.removeStep }
                                    downloadDocument= { this.downloadDocument } 
                                />
                            );  
                        case 4:
                        default: return(
                            <div id="application-preview">
                                <div className="grid-container">
                                    <div className="grid-x grid-padding-x">
                                            <div className="large-12 cell">
                                                <h2>UIN Application</h2>
                                            </div>
                                        <UINApplicationView application= { applicationForm } downloadDocument = { this.downloadDocument } />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })()} 
            </div>           
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, applicationForm } = state.uinApplications;
    const { step } = state.formStepChange
    return {
       saving,
       saved,
       errors,
       applicationForm,
       step
    };
}

export default connect(
 mapStateToProps
)(UINApplicationPage)
