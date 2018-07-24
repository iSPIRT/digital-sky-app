import React from 'react';
import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import queryString from 'query-string'

import UAOPApplication from '../components/UAOPApplication';
import { createApplicationAction, applicationFormLoadedAction, loadApplicationAction, updateApplicationAction } from '../actions/uaopApplicationActions';

class UAOPApplicationPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(applicationFormLoadedAction());
        const queryParams = queryString.parse(this.props.location.search)
        const applicationId = queryParams.id
        if( applicationId && applicationId !== this.props.application.id){
            this.props.dispatch(loadApplicationAction(applicationId));
        }
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

        return <UAOPApplication
                    application={application}
                    savingApplication={savingApplication}
                    errors={errors}
                    createApplication={this.createApplication(this.props.dispatch)}
                    updateApplication={this.updateApplication(this.props.dispatch)}
                />

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