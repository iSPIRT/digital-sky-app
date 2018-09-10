import React from 'react';

import { connect } from 'react-redux';

import queryString from 'query-string'

import { history } from '../store/configureStore';

import FlyDronePermissionApplications from '../components/FlyDronePermissionApplications';

import { loadApplicationsAction, } from '../actions/flyDronePermissionApplicationActions';


class FlyDronePermissionApplicationsPage extends React.Component {

    constructor(props) {
        super(props);
        this.findDroneId = this.findDroneId.bind(this);
        const droneId = this.findDroneId();
        if(!droneId){
            history.push("/dashboard")
        }
        this.props.dispatch(loadApplicationsAction(droneId));
    }

    findDroneId(){
        const queryParams = queryString.parse(this.props.location.search)
        return parseInt(queryParams.droneId, 10);
    }

    render() {
        const { errors, applications } = this.props;
        const droneId = this.findDroneId();
        return <FlyDronePermissionApplications errors={errors} droneId={droneId} applications={applications}/>
    }
}

function mapStateToProps(state) {
     const { errors, applications } = state.flyDronePermissionApplications;
     return {
        applications,
        errors
     };
}

export default connect(
  mapStateToProps
)(FlyDronePermissionApplicationsPage)