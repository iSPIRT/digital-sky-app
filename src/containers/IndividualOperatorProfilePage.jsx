import React from 'react';
import { connect } from 'react-redux'

import { INDIVIDUAL_OPERATOR_TYPE } from '../constants/operatorType';

import { history } from '../store/configureStore';

import IndividualOperatorProfile from '../components/IndividualOperatorProfile';
import { createOperatorProfileAction, operatorProfileFormLoaded, loadOperatorProfile, updateOperatorProfileAction } from '../actions/operatorProfileActions';

class IndividualOperatorProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(operatorProfileFormLoaded());
        const operatorProfileId = localStorage.getItem('individualOperatorProfileId');
        if( operatorProfileId>0 && this.props.operatorProfileSaved && this.props.profile.empty ){
            this.props.dispatch(loadOperatorProfile(INDIVIDUAL_OPERATOR_TYPE, operatorProfileId));
        }
    }

    setupOperatorProfile(dispatch) {
        return operatorProfile => dispatch(createOperatorProfileAction(INDIVIDUAL_OPERATOR_TYPE, operatorProfile));
    }

    updateOperatorProfile(dispatch) {
        const operatorProfileId = localStorage.getItem('individualOperatorProfileId');
        return operatorProfile => dispatch(updateOperatorProfileAction(INDIVIDUAL_OPERATOR_TYPE, operatorProfileId, operatorProfile));
    }

    render(){
        if(localStorage.getItem('organizationOperatorProfileId') > 0){
             history.push('/profile');
             return <div/>
        }
        const { savingOperatorProfile, operatorProfileSaved, profile, errors } = this.props;
        return <IndividualOperatorProfile
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
)(IndividualOperatorProfilePage)