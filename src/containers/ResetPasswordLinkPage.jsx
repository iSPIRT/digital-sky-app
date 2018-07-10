import React from 'react';
import { connect } from 'react-redux'

import ResetPasswordLink from '../components/ResetPasswordLink';
import { sendResetPasswordLink } from '../actions/resetPasswordActions';

import { history } from '../store/configureStore';


class ResetPasswordLinkPage extends React.Component {

    sendResetPasswordLink(dispatch) {
        return email => dispatch(sendResetPasswordLink(email));
    }

    render(){
        const { sendingResetPasswordLink, sentResetPasswordLink, loggedIn, errors } = this.props;
        if(sentResetPasswordLink){
            return (
                <div>Please check your email</div>
            );
        }
        if(loggedIn){
            history.push('/home');
        }
        return <ResetPasswordLink sendingResetPasswordLink={sendingResetPasswordLink}  errors={errors} sendResetPasswordLink={this.sendResetPasswordLink(this.props.dispatch)}/>

    }
}

function mapStateToProps(state) {
     const { sendingResetPasswordLink, sentResetPasswordLink, errors } = state.resetPasswordLink;
     const { loggedIn } = state.authentication;
     return {
        sendingResetPasswordLink,
        sentResetPasswordLink,
        loggedIn,
        errors
     };
}

export default connect(
  mapStateToProps
)(ResetPasswordLinkPage)