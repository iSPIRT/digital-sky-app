import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'

import DroneAcquisitionApplicationStep1 from '../components/DroneAcquisitionApplicationStep1';
import DroneAcquisitionApplicationStep2 from '../components/DroneAcquisitionApplicationStep2';
import DroneAcquisitionApplicationReview from '../components/DroneAcquisitionApplicationReview';
import DroneAcquisitionApplicationView from '../components/DroneAcquisitionApplicationView';
import HeaderApplicationForm from '../components/HeaderApplicationForm';

import { createImportDroneApplicationAction, editImportDroneApplicationAction, applicationFormLoadedAction, loadImportDroneApplicationAction } from '../actions/importDroneApplicationActions';
import { formStepReduceAction } from '../actions/applicationFormStepActions';
import { downloadFile } from '../actions/downloadFileActions';

class ImportDroneApplicationPage extends React.Component {
   
    constructor(props) {
        super(props);
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
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.currentApplicationForm.id){
            this.props.dispatch(loadImportDroneApplicationAction(applicationId));
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
        const { saving, saved, errors, currentApplicationForm} = this.props;
        const step = currentApplicationForm.status && currentApplicationForm.status  !== 'DRAFT' ? 4 : this.props.step;

        return (
            <div className="page-form">
                { step && step < 4 && <HeaderApplicationForm applicationType="Local Drones Acquisition" step= { step }/> }   
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
                                downloadDocument= { this.downloadDocument } applicationType="importDrone"/>);
                        case 3:
                            return(<DroneAcquisitionApplicationReview name="applicationReview" applicationForm={ currentApplicationForm } updateForm={ this.updateForm } 
                                step= { step } errors={ errors } saved={ saved } saving={ saving } goBack={ this.removeStep } applicationType="importDrone"
                                downloadDocument= { this.downloadDocument } />);  
                                case 4:
                                default: return(
                                    <div id="application-preview">
                                        <div className="grid-container">
                                            <div className="grid-x grid-padding-x">
                                                    <div className="large-12 cell">
                                                        <h2>Import Drone Application</h2>
                                                    </div>
                                                <DroneAcquisitionApplicationView applicationForm= { currentApplicationForm } downloadDocument = { this.downloadDocument } />
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

    const { saving, saved, errors, currentApplicationForm } = state.importDroneApplications;
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
