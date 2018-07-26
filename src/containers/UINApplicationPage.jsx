import React from 'react';
import { connect } from 'react-redux';

import UINApplicationStep1 from '../components/UINApplicationStep1';
import UINApplicationStep2 from '../components/UINApplicationStep2';
import UINApplicationReview from '../components/UINApplicationReview';
import HeaderApplicationForm from '../components/HeaderApplicationForm';
import Dashboard from '../components/Dashboard';

import { createUINApplicationAction, editUINApplicationAction } from '../actions/uinApplicationActions';
import { formStepReduceAction } from '../actions/applicationFormStepActions';
import { downloadFile } from '../actions/downloadFileActions';

class UINApplicationPage extends React.Component {
   
    constructor() {
        super();
        this.removeStep = this.removeStep.bind(this);
        this.createForm = this.createForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[]
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

    downloadDocument(id, documentName){
        const filePath = "applicationForm/UINApplication/"+id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {
        const { saving, saved, errors, currentApplicationForm, step} = this.props;
        const { nationalityOptions, modeOfAcquisitionOptions } = this.state;
        return (
            <div className="page-form">
                <HeaderApplicationForm applicationType="UIN Application" step= { step }/>   
                {(() => {
                    switch(step) {
                        case 1: 
                            return(<UINApplicationStep1 name="applicationStep1" 
                                saving={ saving } saved={ saved } errors={ errors } 
                                applicationForm={ currentApplicationForm }
                                createForm={ this.createForm } updateForm={ this.updateForm }
                                step= { step } goBack={ this.removeStep } />);
                        case 2:
                            return(<UINApplicationStep2 name="applicationStep2" 
                                nationalityOptions = { nationalityOptions }
                                modeOfAcquisitionOptions={ modeOfAcquisitionOptions } 
                                saving={ saving } saved={ saved } errors={ errors } applicationForm={ currentApplicationForm }
                                updateForm={ this.updateForm }
                                step= { step } goBack={ this.removeStep }
                                downloadDocument= { this.downloadDocument } />);
                        case 3:
                            return(<UINApplicationReview name="applicationReview" applicationForm={ currentApplicationForm } updateForm={ this.updateForm } 
                                step= { step } errors={ errors } saved={ saved } saving={ saving } goBack={ this.removeStep }
                                downloadDocument= { this.downloadDocument } />);  
                        default: return(<Dashboard />)
                    }
                })()} 
            </div>           
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, currentApplicationForm } = state.uinApplications;
    const { step } = state.formStepChange
    return {
       saving,
       saved,
       errors,
       currentApplicationForm,
       step
    };
}

export default connect(
 mapStateToProps
)(UINApplicationPage)
