import React from 'react';
import { connect } from 'react-redux'

import Register from '../components/Register';
import { registerUserAction } from '../actions/registrationActions';

import { history } from '../store/configureStore';


class RegisterPage extends React.Component {

    registerUser(dispatch) {
        return user => dispatch(registerUserAction(user));
    }

    render(){
        const { registering, registered, loggedIn, errors } = this.props;
        if(registered){
            return (
                <div>Registration Successful...</div>
            );
        }
        if(loggedIn){
            history.push('/home');
        }
        return <Register registering={registering}  errors={errors} registerUser={this.registerUser(this.props.dispatch)}/>

    }
}

function mapStateToProps(state) {
     const { registering, registered, errors } = state.registration;
     const { loggedIn } = state.authentication;
     return {
        loggedIn,
        registering,
        registered,
        errors
     };
}

export default connect(
  mapStateToProps
)(RegisterPage)