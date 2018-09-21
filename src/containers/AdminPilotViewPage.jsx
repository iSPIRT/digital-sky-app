import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import AdminPilotView from '../components/AdminPilotView'

import { downloadFile } from '../actions/downloadFileActions';

import { viewPilotProfile } from '../actions/adminActions';

class AdminPilotViewPage extends React.Component {

    constructor(props) {
        super(props);
        this.downloadTrainingCertificate = this.downloadTrainingCertificate.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        const profileId = queryParams.profileId;
        this.props.dispatch(viewPilotProfile(profileId));
    }

    downloadTrainingCertificate(){
        const filePath = "pilot/"+this.props.pilotProfile.id+"/trainingCertificate";
        this.props.dispatch(downloadFile(filePath, this.props.pilotProfile.trainingCertificateDocName));
    }

    render() {
        const { pilotProfile, errors} = this.props;
        return <AdminPilotView pilotProfile={pilotProfile} errors={errors} downloadTrainingCertificate={this.downloadTrainingCertificate} />
    }
}

function mapStateToProps(state) {
     const { pilotProfile, errors } = state.adminView;
     return {
        pilotProfile,
        errors
     };
}

export default connect(
  mapStateToProps
)(AdminPilotViewPage)