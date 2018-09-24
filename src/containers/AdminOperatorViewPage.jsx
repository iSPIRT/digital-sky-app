import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import AdminOperatorView from '../components/AdminOperatorView'

import { viewOperatorProfile } from '../actions/adminActions';

import { INDIVIDUAL_OPERATOR_TYPE, ORGANIZATION_OPERATOR_TYPE } from "../constants/operatorType";

class AdminOperatorViewPage extends React.Component {

    constructor(props) {
        super(props);
        const queryParams = queryString.parse(this.props.location.search);
        const profileType = queryParams.profileType === 'INDIVIDUAL' ? INDIVIDUAL_OPERATOR_TYPE : ORGANIZATION_OPERATOR_TYPE;
        const profileId = queryParams.profileId;
        this.props.dispatch(viewOperatorProfile(profileType, profileId));
    }

    render() {
        const { operatorProfile, errors} = this.props;
        return <AdminOperatorView operatorProfile={operatorProfile} errors={errors}/>
    }
}

function mapStateToProps(state) {
     const { operatorProfile, errors } = state.adminView;
     return {
        operatorProfile,
        errors
     };
}

export default connect(
  mapStateToProps
)(AdminOperatorViewPage)