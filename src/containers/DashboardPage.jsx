import React from 'react';
import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import { loadApplicationsAction, loadDronesAction } from '../actions/userActions';


import Dashboard from '../components/Dashboard';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        const { user } = this.props;
        if( user && user.id > 0 && !user.isAdmin){
            if(!(user.manufacturerProfileId > 0) ) {
                this.props.dispatch(loadApplicationsAction());
            }
            if(user.individualOperatorProfileId > 0  || user.organizationOperatorProfileId > 0) {
                this.props.dispatch(loadDronesAction());
            }
        }
    }

    render() {
        const { user, applications, errors, drones} = this.props;
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
        const hasPilotProfile = ( pilotProfileId > 0)
        const hasManufacturerProfile = ( manufacturerProfileId > 0 );
        if(user.isAdmin || user.isAtcAdmin || user.isAfmluAdmin || user.isViewerAdmin){
            history.push('/admin/dashboard');
            return null
        }
        if(!hasManufacturerProfile && !hasOperatorProfile && !hasPilotProfile){
            history.push('/profile');
        }
        return <Dashboard applications={applications} operatorDrones={drones} errors={errors}/>
    }
}

function mapStateToProps(state) {
     const { user} = state.authentication;
     const {applications, errors, drones } = state.userApplications;
     return {
        user,
        applications,
        errors,
        drones
     };
}

export default connect(
  mapStateToProps
)(DashboardPage)