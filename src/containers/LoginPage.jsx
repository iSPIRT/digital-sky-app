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
        if(loggedIn){
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