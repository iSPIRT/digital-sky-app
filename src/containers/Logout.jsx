import React from 'react';
import { connect } from 'react-redux'
import { history } from '../store/configureStore';

import { logoutAction } from '../actions/loginActions';


class Logout extends React.Component {

    componentWillMount () {
           this.props.dispatch(logoutAction());
           history.push('/');
       }

       render () {
           return null;
       }
}



export default connect()(Logout);