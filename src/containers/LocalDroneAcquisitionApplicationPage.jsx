import { connect } from 'react-redux';

import { createLocalDroneAcquisitionApplicationAction, editLocalDroneAcquisitionApplicationAction, applicationFormLoadedAction, loadLocalDroneAcquisitionApplicationAction } from '../actions/localDroneAcquisitionApplicationActions';
import DroneAcquisitionApplicationPage from './DroneAcquisitionApplicationPage';

class LocalDroneAcqusitionApplicationPage extends DroneAcquisitionApplicationPage {
   
    constructor(props) {
        super(props,applicationFormLoadedAction,loadLocalDroneAcquisitionApplicationAction);
        this.headerText = "Acquisition of Local Drones";
        this.applicationType = "localDroneAcquisition";
        this.createApplicationAction = createLocalDroneAcquisitionApplicationAction;
        this.editApplicationAction = editLocalDroneAcquisitionApplicationAction;
        this.downloadDocumentBaseUrl = "applicationForm/localDroneAcquisitionApplication/";
    }
}

function mapStateToProps(state) {

    const { saving, saved, errors, currentApplicationForm } = state.localDroneAcquisitionApplications;
    const { droneTypes, metaDataErrors} = state.metaData;
    return {
       saving,
       saved,
       errors,
       currentApplicationForm,
       droneTypes,
       metaDataErrors
    };
}

export default connect(
 mapStateToProps
)(LocalDroneAcqusitionApplicationPage)
