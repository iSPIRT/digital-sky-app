import React from 'react';
import { connect } from 'react-redux'

import ManufacturerProfile from '../components/ManufacturerProfile';
import { createManufacturerProfileAction, manufacturerProfileFormLoaded, loadManufacturerProfile, updateManufacturerProfileAction } from '../actions/manufacturerProfileActions';

class ManufacturerProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(manufacturerProfileFormLoaded());
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        if( manufacturerProfileId>0 && this.props.manufacturerProfileSaved && this.props.profile.empty ){
            this.props.dispatch(loadManufacturerProfile(manufacturerProfileId));
        }
    }

    setupManufacturerProfile(dispatch) {
        return manufacturerProfile => dispatch(createManufacturerProfileAction(manufacturerProfile));
    }

    updateManufacturerProfile(dispatch) {
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        return manufacturerProfile => dispatch(updateManufacturerProfileAction(manufacturerProfileId, manufacturerProfile));
    }

    render(){
        const { savingManufacturerProfile, manufacturerProfileSaved, profile, errors } = this.props;
        return <ManufacturerProfile
                    profile={profile}
                    manufacturerProfileSaved={manufacturerProfileSaved}
                    savingManufacturerProfile={savingManufacturerProfile}
                    errors={errors}
                    setupManufacturerProfile={this.setupManufacturerProfile(this.props.dispatch)}
                    updateManufacturerProfile={this.updateManufacturerProfile(this.props.dispatch)}
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