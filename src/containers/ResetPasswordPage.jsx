import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import ResetPassword from '../components/ResetPassword';
import { resetPassword, resetPasswordFormLoaded } from '../actions/resetPasswordActions';

import { history } from '../store/configureStore';


class ResetPasswordPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(resetPasswordFormLoaded());
    }

    resetPassword(dispatch) {
        return payload => dispatch(resetPassword(payload));
    }

    render(){
        const { resettingPassword, resetPasswordSuccess, loggedIn, errors } = this.props;
        if(resetPasswordSuccess){
            return (
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Password Reset Successful</h2>
                        <p><Link to="/login">Sign In</Link></p>
                      </div>
                    </div>
                  </div>
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