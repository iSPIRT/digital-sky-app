import React from 'react';
import { connect } from 'react-redux'

import { history } from '../store/configureStore';

import Dashboard from '../components/Dashboard';

class DashboardPage extends React.Component {

    render() {
        const { user} = this.props;
        if(user.isAdmin){
            history.push('/admin/dashboard');
        }
        return <Dashboard/>
    }
}

function mapStateToProps(state) {
     const { user} = state.authentication;
     return {
        user
     };
}

export default connect(
  mapStateToProps
)(DashboardPage)