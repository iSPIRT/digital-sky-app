import React from 'react';
import { connect } from 'react-redux'

import LocalDroneAcquisitionApplication from '../components/LocalDroneAcquisitionApplication';
import { createLocalDroneAcquisitionApplicationAction } from '../actions/localDroneAcquisitionApplicationActions';

class LocalDroneAcquisitionApplicationPage extends React.Component {
   
    constructor() {
        super();
        this.state = {
            categoryOptions : ['EXISTING_UAOP_HOLDER','UAOP_APPLICANT','WITHOUT_UAOP'],
            modeOfAcquisitionOptions : ['LEASE', 'PURCHASE'],
            nationalityOptions : ['Indian', 'Chinese', 'Korean']
        }
    }

    createLocalDroneAcquisitionApplication(dispatch) {
        return (applicationForm => dispatch(createLocalDroneAcquisitionApplicationAction(applicationForm)));
    }

    render() {
        const { saving, saved, errors, currentApplicationForm } = this.props;
        return(
            <LocalDroneAcquisitionApplication 
                categoryOptions={this.state.categoryOptions} 
                modeOfAcquisitionOptions={this.state.modeOfAcquisitionOptions} 
                nationalityOptions={this.state.nationalityOptions}
                createLocalDroneAcquisitionApplication={this.createLocalDroneAcquisitionApplication(this.props.dispatch)}
                saving={saving} errors={errors} 
            />
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, currentApplicationForm } = state.saveLocalDroneAcquisitionApplication;
    return {
       saving,
       saved,
       errors,
       currentApplicationForm
    };
}

export default connect(
 mapStateToProps
)(LocalDroneAcquisitionApplicationPage)
