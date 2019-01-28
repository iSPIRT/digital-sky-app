import { connect } from 'react-redux';

import { createLocalDroneAcquisitionApplicationAction, editLocalDroneAcquisitionApplicationAction, applicationFormLoadedAction, loadLocalDroneAcquisitionApplicationAction } from '../actions/localDroneAcquisitionApplicationActions';
import DroneAcquisitionApplicationPage from './DroneAcquisitionApplicationPage';

class LocalDroneAcqusitionApplicationPage extends DroneAcquisitionApplicationPage {
   
    constructor(props) {
        super(props,applicationFormLoadedAction,loadLocalDroneAcquisitionApplicationAction);
        this.headerText = "Acquisition of Local RPA";
        this.applicationType = "localDroneAcquisition";
        this.createApplicationAction = createLocalDroneAcquisitionApplicationAction;
        this.editApplicationAction = editLocalDroneAcquisitionApplicationAction;
        this.downloadDocumentBaseUrl = "applicationForm/localDroneAcquisitionApplication/";
    }
}

function mapStateToProps(state) {

    const { saving, saved, errors, currentApplicationForm } = state.localDroneAcquisitionApplications;
    const { droneTypes, metaDataErrors} = state.metaData;
    const { userDetails } = state.user;
    const { user } = state.authentication;
    const { profile } = state.operatorProfile;
    return {
       saving,
       saved,
       errors,
       currentApplicationForm,
       droneTypes,
       metaDataErrors,
       profile,
       user,
       userDetails
    };
}

export default connect(
 mapStateToProps
)(LocalDroneAcqusitionApplicationPage)
