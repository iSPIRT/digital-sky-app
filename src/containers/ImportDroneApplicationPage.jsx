import React from 'react';
import { connect } from 'react-redux';

import DroneAcquisitionApplicationStep1 from '../components/DroneAcquisitionApplicationStep1';
import DroneAcquisitionApplicationStep2 from '../components/DroneAcquisitionApplicationStep2';
import DroneAcquisitionApplicationReview from '../components/DroneAcquisitionApplicationReview';
import HeaderApplicationForm from '../components/HeaderApplicationForm';
import Dashboard from '../components/Dashboard';

import { createImportDroneApplicationAction, editImportDroneApplicationAction } from '../actions/importDroneApplicationActions';
import { formStepReduceAction } from '../actions/applicationFormStepActions';
import { downloadFile } from '../actions/downloadFileActions';

class ImportDroneApplicationPage extends React.Component {
   
    constructor() {
        super();
        this.removeStep = this.removeStep.bind(this);
        this.createForm = this.createForm.bind(this);
        this.updateForm = this.updateForm.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            categoryOptions : ['EXISTING_UAOP_HOLDER','UAOP_APPLICANT','WITHOUT_UAOP'],
            modeOfAcquisitionOptions : ['LEASE', 'PURCHASE'],
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
        this.props.dispatch(createImportDroneApplicationAction(applicationForm));
    }

    updateForm(applicationForm, id) {
        this.props.dispatch(editImportDroneApplicationAction(applicationForm, id));
    }

    downloadDocument(id, documentName){
        const filePath = "applicationForm/importDroneApplication/"+id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render() {
        const { saving, saved, errors, currentApplicationForm, step} = this.props;
        return (
            <div className="page-form">
                <HeaderApplicationForm applicationType="Importing Drones" step= { step }/>   
                {(() => {
                    switch(step) {
                        case 1: 
                            return(<DroneAcquisitionApplicationStep1 name="applicationStep1" ref="applicationStep1"
                                categoryOptions={ this.state.categoryOptions } 
                                nationalityOptions={ this.state.nationalityOptions }
                                saving={ saving } saved={ saved } errors={ errors } 
                                applicationForm={ currentApplicationForm }
                                createForm={ this.createForm } updateForm={ this.updateForm }
                                step= { step } goBack={ this.removeStep } applicationType="importDrone" />);
                        case 2:
                            return(<DroneAcquisitionApplicationStep2 name="applicationStep2" ref="applicationStep2"
                                modeOfAcquisitionOptions={ this.state.modeOfAcquisitionOptions } 
                                saving={ saving } saved={ saved } errors={ errors } applicationForm={ currentApplicationForm }
                                updateForm={ this.updateForm }
                                step= { step } goBack={ this.removeStep }
                                downloadDocument= { this.downloadDocument } />);
                        case 3:
                            return(<DroneAcquisitionApplicationReview name="applicationReview" applicationForm={ currentApplicationForm } updateForm={ this.updateForm } 
                                step= { step } errors={ errors } saved={ saved } saving={ saving } goBack={ this.removeStep } applicationType="importDrone"
                                downloadDocument= { this.downloadDocument } />);  
                        default: return(<Dashboard />)
                    }
                })()} 
            </div>           
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, currentApplicationForm } = state.saveImportDroneApplication;
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
)(ImportDroneApplicationPage)
