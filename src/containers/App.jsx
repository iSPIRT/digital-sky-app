import React from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import AuthenticatedRoute  from './AuthenticatedRoute';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ResetPasswordLinkPage from './ResetPasswordLinkPage';
import ResetPasswordPage from './ResetPasswordPage';
import LocalDroneAcquisitionApplicationPage from './LocalDroneAcquisitionApplicationPage';
import Logout from './Logout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import UserProfilePage from '../containers/UserProfilePage';
import PilotProfilePage from '../containers/PilotProfilePage';
import IndividualOperatorProfilePage from '../containers/IndividualOperatorProfilePage';
import OrganizationOperatorProfilePage from '../containers/OrganizationOperatorProfilePage';

import { history } from '../store/configureStore';

import $ from 'jquery';

import 'foundation-sites';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stickyHeader: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        $(document).foundation();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event){
        if(window.scrollY > 550){
            this.setState({stickyHeader: true});
        }
        if(window.scrollY < 551){
            this.setState({stickyHeader: false});
        }
    }

    render() {
        const { loggedIn, user } = this.props;
        const { stickyHeader } = this.state;
        return (
            <div>
             <Router history={history}>
               <div>
                    <Header stickyHeader={stickyHeader} homepage='true' loggedIn={loggedIn} user={user}/>
                    <AuthenticatedRoute exact path="/dashboard" loggedIn={loggedIn} component={Dashboard} />
                    <AuthenticatedRoute exact path="/profile" loggedIn={loggedIn} component={UserProfilePage} />
                    <AuthenticatedRoute exact path="/pilotProfile" loggedIn={loggedIn} component={PilotProfilePage} />
                    <AuthenticatedRoute exact path="/individualOperatorProfile" loggedIn={loggedIn} component={IndividualOperatorProfilePage} />
                    <AuthenticatedRoute exact path="/organizationOperatorProfile" loggedIn={loggedIn} component={OrganizationOperatorProfilePage} />
                    <AuthenticatedRoute exact path="/logout" loggedIn={loggedIn} component={Logout} />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/resetPasswordLink" component={ResetPasswordLinkPage} />
                    <Route path="/resetPassword" component={ResetPasswordPage} />
                    <Route path="/localDroneAcquisitionApplication" component={LocalDroneAcquisitionApplicationPage} />
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
