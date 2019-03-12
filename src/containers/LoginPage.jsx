import React from 'react';
import { connect } from 'react-redux'

import Login from '../components/Login';
import { loginAction, loginFormLoaded } from '../actions/loginActions';

import { history } from '../store/configureStore';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(loginFormLoaded());
    }

    login(dispatch) {
        return credentials => dispatch(loginAction(credentials));
    }

    render() {
        const { loggingIn, loggedIn, errors } = this.props;
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
        const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
        const isAtcAdmin = JSON.parse(localStorage.getItem('isAtcAdmin'));
        const isAfmluAdmin = JSON.parse(localStorage.getItem('isAfmluAdmin'));
        const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
        const hasPilotProfile = ( pilotProfileId > 0)
        const hasManufacturerProfile = ( manufacturerProfileId > 0 );
        if(loggedIn && !isAdmin && !isAtcAdmin && !isAfmluAdmin && !hasPilotProfile && !hasManufacturerProfile && !hasOperatorProfile){
            history.push('/profile');
            return null;
        }
        else if(loggedIn){
            history.push('/dashboard');
            return null;
        }
        else{
            return <Login loggingIn={loggingIn} errors={errors} loginUser={this.login(this.props.dispatch)}/>
        }
    }
}

function mapStateToProps(state) {
     const { loggingIn, loggedIn, errors } = state.authentication;
     return {
        loggingIn,
        loggedIn,
        errors
     };
}

export default connect(
  mapStateToProps
)(LoginPage)