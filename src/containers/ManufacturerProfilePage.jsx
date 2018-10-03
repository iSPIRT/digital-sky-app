import React from 'react';
import { connect } from 'react-redux'

import ManufacturerProfile from '../components/ManufacturerProfile';
import { createManufacturerProfileAction, manufacturerProfileFormLoaded, loadManufacturerProfile, updateManufacturerProfileAction } from '../actions/manufacturerProfileActions';

class ManufacturerProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.setupManufacturerProfile = this.setupManufacturerProfile.bind(this);
        this.updateManufacturerProfile = this.updateManufacturerProfile.bind(this)
        this.props.dispatch(manufacturerProfileFormLoaded());
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        if( manufacturerProfileId>0 ){
            this.props.dispatch(loadManufacturerProfile(manufacturerProfileId));
        }
    }

    setupManufacturerProfile(manufacturerProfileFormData) {
        this.props.dispatch(createManufacturerProfileAction(manufacturerProfileFormData));
    }

    updateManufacturerProfile(manufacturerProfileFormData) {
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        this.props.dispatch(updateManufacturerProfileAction(manufacturerProfileId, manufacturerProfileFormData));
    }

    render(){
        const { savingManufacturerProfile, manufacturerProfileSaved, profile, errors } = this.props;
        return <ManufacturerProfile
                    profile={profile}
                    manufacturerProfileSaved={manufacturerProfileSaved}
                    savingManufacturerProfile={savingManufacturerProfile}
                    errors={errors}
                    setupManufacturerProfile={this.setupManufacturerProfile}
                    updateManufacturerProfile={this.updateManufacturerProfile}
                />
    }
}

function mapStateToProps(state) {
     const { savingManufacturerProfile, manufacturerProfileSaved, profile, errors } = state.manufacturerProfile;
     return {
        savingManufacturerProfile,
        manufacturerProfileSaved,
        profile,
        errors
     };
}

export default connect(
  mapStateToProps
)(ManufacturerProfilePage)