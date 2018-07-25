import React from 'react';
import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import queryString from 'query-string'

import UAOPApplicationStep1 from '../components/UAOPApplicationStep1';
import UAOPApplicationStep2 from '../components/UAOPApplicationStep2';
import UAOPApplicationStep3 from '../components/UAOPApplicationStep3';
import { createApplicationAction, applicationFormLoadedAction, loadApplicationAction, updateApplicationAction } from '../actions/uaopApplicationActions';

import { downloadFile } from '../actions/downloadFileActions';

class UAOPApplicationPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1
        };

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);

        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.application.id){
            this.props.dispatch(loadApplicationAction(applicationId));
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.application.status && nextProps.application.status  !== 'DRAFT'){
            this.setState({currentStep: 3});
        }
    }

    downloadDocument(documentName){
        const filePath = "applicationForm/uaopApplication/"+this.props.application.id+"/document/"+documentName;
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    nextStep(){
        this.setState({currentStep: (this.state.currentStep+1)});
        console.log("");
    }

    previousStep(){
        this.setState({currentStep: (this.state.currentStep-1)});
         console.log("");
    }

    createApplication(dispatch) {
        return multiformData => dispatch(createApplicationAction(multiformData));
    }

    updateApplication(dispatch) {
        return (applicationId, multiformData) => dispatch(updateApplicationAction(applicationId, multiformData));
    }

    render(){
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const operatorProfileExist = (individualOperatorProfileId > 0  || organizationOperatorProfileId > 0);

        if(!operatorProfileExist){
            history.push('/profile');
            return <div/>
        }

        const { savingApplication, application, errors } = this.props;

        const {currentStep} = this.state;

        switch (currentStep) {
            case 1:
                return <UAOPApplicationStep1
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            nextStep={this.nextStep}
                            createApplication={this.createApplication(this.props.dispatch)}
                            updateApplication={this.updateApplication(this.props.dispatch)}
                        />
            case 2:
                return <UAOPApplicationStep2
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            updateApplication={this.updateApplication(this.props.dispatch)}
                        />
            default:
                return <UAOPApplicationStep3
                            application={application}
                            savingApplication={savingApplication}
                            errors={errors}
                            previousStep={this.previousStep}
                            updateApplication={this.updateApplication(this.props.dispatch)}
                            downloadDocument={this.downloadDocument}
                        />
        }
    }
}

function mapStateToProps(state) {
     const { savingApplication, errors } = state.uaopApplications;
     const application = state.uaopApplications.currentApplication;
     return {
        savingApplication,
        application,
        errors
     };
}

export default connect(
  mapStateToProps
)(UAOPApplicationPage)