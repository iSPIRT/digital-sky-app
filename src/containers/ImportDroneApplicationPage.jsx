import { connect } from 'react-redux';

import { createImportDroneApplicationAction, editImportDroneApplicationAction, applicationFormLoadedAction, loadImportDroneApplicationAction } from '../actions/importDroneApplicationActions';
import DroneAcquisitionApplicationPage from './DroneAcquisitionApplicationPage';

class ImportDroneApplicationPage extends DroneAcquisitionApplicationPage {
   
    constructor(props) {
        super(props,applicationFormLoadedAction,loadImportDroneApplicationAction);
        this.headerText = "Importing Drones";
        this.applicationType = "importDrone";
        this.createApplicationAction = createImportDroneApplicationAction;
        this.editApplicationAction = editImportDroneApplicationAction;
        this.downloadDocumentBaseUrl = "applicationForm/importDroneApplication/";
    }
}

function mapStateToProps(state) {

    const { saving, saved, errors, currentApplicationForm } = state.importDroneApplications;
    const { droneTypes, metaDataerrors} = state.metaData;
    return {
       saving,
       saved,
       errors,
       currentApplicationForm,
       droneTypes,
       metaDataerrors
    };
}

export default connect(
 mapStateToProps
)(ImportDroneApplicationPage)
