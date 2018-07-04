import React from 'react';
import { connect } from 'react-redux'

import Login from '../components/Login';
import { loginAction } from '../actions/loginActions';

class LoginPage extends React.Component {

    login(dispatch) {
        return credentials => dispatch(loginAction(credentials));
    }

    render() {
        const { loginActionInProgress, loggedIn, errors } = this.props;
        if(loggedIn){
            return (
                <div>Login Success</div>
            );
        }
        return <Login loginActionInProgress={loginActionInProgress} errors={errors} loginUser={this.login(this.props.dispatch)}/>
    }
}

function mapStateToProps(state) {
     const { loginActionInProgress, loggedIn, errors } = state.authentication;
     return {
        loginActionInProgress,
        loggedIn,
        errors
     };
}

export default connect(
  mapStateToProps
)(LoginPage)