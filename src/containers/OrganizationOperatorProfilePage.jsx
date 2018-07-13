import React from 'react';
import { connect } from 'react-redux'

import { ORGANIZATION_OPERATOR_TYPE } from '../constants/operatorType';

import { history } from '../store/configureStore';

import OrganizationOperatorProfile from '../components/OrganizationOperatorProfile';
import { createOperatorProfileAction, operatorProfileFormLoaded, loadOperatorProfile, updateOperatorProfileAction } from '../actions/operatorProfileActions';

class OrganizationOperatorProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(operatorProfileFormLoaded());
        const operatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        if( operatorProfileId>0 && this.props.operatorProfileSaved && this.props.profile.empty ){
            this.props.dispatch(loadOperatorProfile(ORGANIZATION_OPERATOR_TYPE, operatorProfileId));
        }
    }

    setupOperatorProfile(dispatch) {
        return operatorProfile => dispatch(createOperatorProfileAction(ORGANIZATION_OPERATOR_TYPE, operatorProfile));
    }

    updateOperatorProfile(dispatch) {
        const operatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        return operatorProfile => dispatch(updateOperatorProfileAction(ORGANIZATION_OPERATOR_TYPE, operatorProfileId, operatorProfile));
    }

    render(){
        if(localStorage.getItem('individualOperatorProfileId') > 0){
             history.push('/profile');
             return <div/>
        }
        const { savingOperatorProfile, operatorProfileSaved, profile, errors } = this.props;
        return <OrganizationOperatorProfile
                    profile={profile}
                    operatorProfileSaved={operatorProfileSaved}
                    savingOperatorProfile={savingOperatorProfile}
                    errors={errors}
                    setupOperatorProfile={this.setupOperatorProfile(this.props.dispatch)}
                    updateOperatorProfile={this.updateOperatorProfile(this.props.dispatch)}
                />

    }
}

function mapStateToProps(state) {
     const { savingOperatorProfile, operatorProfileSaved, profile, errors } = state.operatorProfile;
     return {
        savingOperatorProfile,
        operatorProfileSaved,
        profile,
        errors
     };
}

export default connect(
  mapStateToProps
)(OrganizationOperatorProfilePage)