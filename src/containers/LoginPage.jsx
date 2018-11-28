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
        const hasOperatorProfile = (individualOperatorProfileId > 0) || (organizationOperatorProfileId > 0)
        const hasPilotProfile = ( pilotProfileId > 0)
        const hasManufacturerProfile = ( manufacturerProfileId > 0 );
        if(loggedIn && !hasPilotProfile && !hasManufacturerProfile && !hasOperatorProfile ){
            history.push('/profile');
        }
        else if(loggedIn){
            history.push('/dashboard');
        }
        return <Login loggingIn={loggingIn} errors={errors} loginUser={this.login(this.props.dispatch)}/>
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