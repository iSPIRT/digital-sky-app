import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

class AdminAuthenticatedRoute extends Component {
  render() {
    const {loggedIn, user, component: Component, ...rest} = this.props;
    if( loggedIn && (user.isAdmin || user.isAtcAdmin || user.isAfmluAdmin )) {
      return <Route {...rest} render={(props) => <Component {...props }/>}/>
    } else {
      return <Route {...rest} render={(props) => <Redirect to={{pathname: '/login', state: {from: props.location}}} />}/>
    }
  }
}

export default AdminAuthenticatedRoute;