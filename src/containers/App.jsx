import React from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import AuthenticatedRoute  from './AuthenticatedRoute';
import LoginPage from '../containers/LoginPage';
import RegisterPage from '../containers/RegisterPage';
import ResetPasswordLinkPage from '../containers/ResetPasswordLinkPage';
import ResetPasswordPage from '../containers/ResetPasswordPage';
import Logout from '../containers/Logout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

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
                    <AuthenticatedRoute exact path="/logout" loggedIn={loggedIn} component={Logout} />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/resetPasswordLink" component={ResetPasswordLinkPage} />
                    <Route path="/resetPassword" component={ResetPasswordPage} />
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
