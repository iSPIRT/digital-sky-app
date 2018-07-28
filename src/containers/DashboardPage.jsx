import React from 'react';
import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import { loadApplicationsAction } from '../actions/userActions';


import Dashboard from '../components/Dashboard';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        const { user } = this.props;
        console.log("");
        if( user && user.id > 0 && !user.isAdmin){
            this.props.dispatch(loadApplicationsAction());
        }
    }

    render() {
        const { user, applications, errors} = this.props;
        if(user.isAdmin){
            history.push('/admin/dashboard');
        }
        return <Dashboard applications={applications} errors={errors}/>
    }
}

function mapStateToProps(state) {
     const { user} = state.authentication;
     const {applications, errors } = state.userApplications;
     return {
        user,
        applications,
        errors
     };
}

export default connect(
  mapStateToProps
)(DashboardPage)