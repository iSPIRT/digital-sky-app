import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import ResetPassword from '../components/ResetPassword';
import { resetPassword } from '../actions/resetPasswordActions';

import { history } from '../store/configureStore';


class ResetPasswordPage extends React.Component {

    resetPassword(dispatch) {
        return payload => dispatch(resetPassword(payload));
    }

    render(){
        const { resettingPassword, resetPasswordSuccess, loggedIn, errors } = this.props;
        if(resetPasswordSuccess){
            return (
                <div>
                     <p>Your password was successfully reset</p>
                     <Link to="/login" >Login</Link>
                </div>
            );
        }
        if(loggedIn){
            history.push('/home');
        }
        const queryParams = queryString.parse(this.props.location.search)
        return <ResetPassword token={queryParams.token} resettingPassword={resettingPassword}  errors={errors} resetPassword={this.resetPassword(this.props.dispatch)}/>

    }
}

function mapStateToProps(state) {
     const { resettingPassword, resetPasswordSuccess, errors } = state.resetPassword;
     const { loggedIn } = state.authentication;
     return {
        resettingPassword,
        resetPasswordSuccess,
        loggedIn,
        errors
     };
}

export default connect(
  mapStateToProps
)(ResetPasswordPage)