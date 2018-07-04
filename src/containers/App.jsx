import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import AuthenticatedRoute  from './AuthenticatedRoute';
import LoginPage from '../containers/LoginPage';
import RegisterPage from '../containers/RegisterPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

class App extends React.Component {

    render() {
        const { loggedIn, user } = this.props;
        return (
            <div>
             <Router>
               <div>
                    <Header loggedIn={loggedIn} user={user}/>
                    <AuthenticatedRoute exact path="/home" loggedIn={loggedIn} component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Footer/>
                </div>
              </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn, user } = state.authentication;
    return {
        loggedIn,
        user
    };
}

const connectedApp = connect(mapStateToProps)(App);

export { connectedApp as App };
