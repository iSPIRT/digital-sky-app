import React from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import AuthenticatedRoute  from './AuthenticatedRoute';
import AdminAuthenticatedRoute  from './AdminAuthenticatedRoute';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ResetPasswordLinkPage from './ResetPasswordLinkPage';
import ResetPasswordPage from './ResetPasswordPage';
import ImportDroneApplicationPage from './ImportDroneApplicationPage';
import LocalDroneAcquisitionApplicationPage from './LocalDroneAcquisitionApplicationPage';
import DashboardPage from '../containers/DashboardPage';
import AdminDashboardPage from '../containers/AdminDashboardPage';
import AdminApplicationViewPage from '../containers/AdminApplicationViewPage';
import UserProfilePage from './UserProfilePage';
import PilotProfilePage from './PilotProfilePage';
import IndividualOperatorProfilePage from './IndividualOperatorProfilePage';
import OrganizationOperatorProfilePage from './OrganizationOperatorProfilePage';
import ManufacturerProfilePage from './ManufacturerProfilePage';
import UAOPApplicationPage from './UAOPApplicationPage';
import UINApplicationPage from './UINApplicationPage';
import VerifyAccountPage from './VerifyAccountPage';
import OperatorDroneProfilePage from './OperatorDroneProfilePage';
import AdminDashboardDroneTypePage from './AdminDashboardDroneTypePage';
import DroneProfilePage from './DroneProfilePage';
import AdminBlogPage from './AdminBlogPage';
import AdminBlogListPage from './AdminBlogListPage';
import AdminAirspaceCategoryPage from './AdminAirspaceCategoryPage';
import AdminAirspaceCategoryListPage from './AdminAirspaceCategoryListPage';
import OccurrenceReportPage from './OccurrenceReportPage';

import Logout from './Logout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

import ScrollToTop from './ScrollToTop'

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
                <ScrollToTop>
                    <Header stickyHeader={stickyHeader} homepage='true' loggedIn={loggedIn} user={user}/>

                    <AuthenticatedRoute exact path="/dashboard" loggedIn={loggedIn} component={DashboardPage} />
                    <AuthenticatedRoute exact path="/profile" loggedIn={loggedIn} component={UserProfilePage} />
                    <AuthenticatedRoute exact path="/pilotProfile" loggedIn={loggedIn} component={PilotProfilePage} />
                    <AuthenticatedRoute exact path="/individualOperatorProfile" loggedIn={loggedIn} component={IndividualOperatorProfilePage} />
                    <AuthenticatedRoute exact path="/organizationOperatorProfile" loggedIn={loggedIn} component={OrganizationOperatorProfilePage} />
                    <AuthenticatedRoute exact path="/manufacturerProfile" loggedIn={loggedIn} component={ManufacturerProfilePage} />
                    <AuthenticatedRoute exact path="/uaopApplication" loggedIn={loggedIn} component={UAOPApplicationPage} />
                    <AuthenticatedRoute exact path="/logout" loggedIn={loggedIn} component={Logout} />
                    <AuthenticatedRoute exact path="/localDroneAcquisitionApplication" component={LocalDroneAcquisitionApplicationPage} loggedIn={loggedIn}/>
                    <AuthenticatedRoute exact path="/importDroneApplication" component={ImportDroneApplicationPage} loggedIn={loggedIn}/>
                    <AuthenticatedRoute exact path="/uinApplication" component={UINApplicationPage} loggedIn={loggedIn}/>
                    <AuthenticatedRoute exact path="/operatorDrone" component={OperatorDroneProfilePage} loggedIn={loggedIn}/>
                    <AuthenticatedRoute exact path="/occurrenceReport" component={OccurrenceReportPage} loggedIn={loggedIn}/>

                    <AdminAuthenticatedRoute exact path="/droneType" loggedIn={loggedIn} user={user} component={DroneProfilePage} /> 
                    <AdminAuthenticatedRoute path="/admin/dashboard" loggedIn={loggedIn} user={user} component={AdminDashboardPage} />
                    <AdminAuthenticatedRoute path="/admin/application" loggedIn={loggedIn} user={user} component={AdminApplicationViewPage} />
                    <AdminAuthenticatedRoute path="/admin/droneType" loggedIn={loggedIn} user={user} component={AdminDashboardDroneTypePage} />
                    <AdminAuthenticatedRoute path="/admin/blog" loggedIn={loggedIn} user={user} component={AdminBlogPage} />
                    <AdminAuthenticatedRoute path="/admin/blogList" loggedIn={loggedIn} user={user} component={AdminBlogListPage} />
                    <AdminAuthenticatedRoute path="/admin/airspaceCategory" loggedIn={loggedIn} user={user} component={AdminAirspaceCategoryPage} />
                    <AdminAuthenticatedRoute path="/admin/airspaceCategoryList" loggedIn={loggedIn} user={user} component={AdminAirspaceCategoryListPage} />

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/resetPasswordLink" component={ResetPasswordLinkPage} />
                    <Route path="/resetPassword" component={ResetPasswordPage} />
                    <Route path="/verifyAccount" component={VerifyAccountPage} />

                    <Footer/>
                </ScrollToTop>
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
