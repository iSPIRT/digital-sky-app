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
        if(user.isAdmin){            
            history.push('/admin/dashboard');
            return null
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