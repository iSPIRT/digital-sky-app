import React from 'react';
import { connect } from 'react-redux'

import ResetPasswordLink from '../components/ResetPasswordLink';
import { sendResetPasswordLink, resetPasswordFormLoaded } from '../actions/resetPasswordActions';

import { history } from '../store/configureStore';


class ResetPasswordLinkPage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(resetPasswordFormLoaded());
    }

    sendResetPasswordLink(dispatch) {
        return email => dispatch(sendResetPasswordLink(email));
    }

    render(){
        const { sendingResetPasswordLink, sentResetPasswordLink, loggedIn, errors } = this.props;
        if(sentResetPasswordLink){
            return (
                 <div className="page-header">
                   <div className="grid-container">
                     <div className="grid-x grid-padding-x">
                       <div className="large-12 cell">
                         <h2>Please check your email for reset password link</h2>
                       </div>
                     </div>
                   </div>
                 </div>
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