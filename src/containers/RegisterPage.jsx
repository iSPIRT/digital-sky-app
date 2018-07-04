import React from 'react';
import { connect } from 'react-redux'

import Register from '../components/Register';
import { registerUserAction } from '../actions/registrationActions';

class RegisterPage extends React.Component {

    registerUser(dispatch) {
        return user => dispatch(registerUserAction(user));
    }

    render(){
        const { registering, registered, errors, user } = this.props;
        if(registered){
            return (
                <div>Registration Successful...</div>
            );
        }
        return <Register registering={registering} user={user} errors={errors} registerUser={this.registerUser(this.props.dispatch)}/>

    }
}

function mapStateToProps(state) {
     const { registering, registered, errors, user } = state.registration;
     return {
        registering,
        registered,
        errors,
        user
     };
}

export default connect(
  mapStateToProps
)(RegisterPage)