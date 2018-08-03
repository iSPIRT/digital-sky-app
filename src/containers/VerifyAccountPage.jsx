import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { verifyAccountAction } from '../actions/userActions';

import { history } from '../store/configureStore';


class VerifyAccountPage extends React.Component {

    constructor(props) {
        super(props);
        const queryParams = queryString.parse(this.props.location.search)
        this.props.dispatch(verifyAccountAction({token: queryParams.token}));
    }


    render() {
        const { loggedIn, errors, accountVerified } = this.props;

        if(loggedIn){
            history.push('/dashboard');
        }

        if(accountVerified){
            return (
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <h2>Account verified</h2>
                            <p><Link to="/login">Sign In</Link></p>
                        </div>
                    </div>
                  </div>
                </div>
            );
        }

        if(errors.length > 0){
            return (
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <p>Invalid account verification link</p>
                        </div>
                    </div>
                  </div>
                </div>
            );

        }

        return (
            <div className="page-header">
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        <h2>Verification In Progress</h2>
                    </div>
                </div>
              </div>
            </div>
        );

    }
}

function mapStateToProps(state) {
     const { errors, accountVerified } = state.accountVerification;
     const { loggedIn } = state.authentication;
     return {
        loggedIn,
        accountVerified,
        errors
     };
}

export default connect(
  mapStateToProps
)(VerifyAccountPage)