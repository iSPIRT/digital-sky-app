import React from 'react';
import { connect } from 'react-redux'

import PilotProfile from '../components/PilotProfile';
import { createPilotProfileAction, pilotProfileFormLoaded, loadPilotProfile, updatePilotProfileAction } from '../actions/pilotProfileActions';
import { downloadFile } from '../actions/downloadFileActions';

class PilotProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.props.dispatch(pilotProfileFormLoaded());
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        if( this.props.pilotProfileSaved && this.props.profile.empty ){
            this.props.dispatch(loadPilotProfile(pilotProfileId));
        }
    }

    setupPilotProfile(dispatch) {
        return pilotProfile => dispatch(createPilotProfileAction(pilotProfile));
    }

    updatePilotProfile(dispatch) {
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        return pilotProfile => dispatch(updatePilotProfileAction(pilotProfileId, pilotProfile));
    }

    downloadDocument(documentName){
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const filePath = "pilot/"+pilotProfileId+"/trainingCertificate";
        this.props.dispatch(downloadFile(filePath, documentName));
    }

    render(){
        const { savingPilotProfile, pilotProfileSaved, profile, errors } = this.props;
        return <PilotProfile
                    profile={profile}
                    pilotProfileSaved={pilotProfileSaved}
                    savingPilotProfile={savingPilotProfile}
                    errors={errors}
                    setupPilotProfile={this.setupPilotProfile(this.props.dispatch)}
                    updatePilotProfile={this.updatePilotProfile(this.props.dispatch)}
                    downloadDocument={this.downloadDocument}
                />

    }
}

function mapStateToProps(state) {
     const { savingPilotProfile, pilotProfileSaved, profile, errors } = state.pilotProfile;
     return {
        savingPilotProfile,
        pilotProfileSaved,
        profile,
        errors
     };
}

export default connect(
  mapStateToProps
)(PilotProfilePage)