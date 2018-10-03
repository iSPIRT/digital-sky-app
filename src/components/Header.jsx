import React from 'react';

import { Link } from 'react-router-dom'

import logo from '../img/logo.svg';
import hambargarClose from '../img/hambargar-close.svg';
import hambargar from '../img/hambargar.svg';

import HeaderLoginMenu from '../components/HeaderLoginMenu';
import HeaderUserMenu from '../components/HeaderUserMenu';
import HeaderAdminUserMenu from '../components/HeaderAdminUserMenu';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            siteNavigationOpen: false,
            userNavigationOpen: false
        };
        this.onSiteNavigationClick = this.onSiteNavigationClick.bind(this);
        this.onUserNavigationClick = this.onUserNavigationClick.bind(this);
    }

    onSiteNavigationClick(value){
        this.setState({siteNavigationOpen: !this.state.siteNavigationOpen});
    }

    onUserNavigationClick(value){
       this.setState({userNavigationOpen: value});

    }

    render() {
        const {loggedIn, user, homepage, stickyHeader} = this.props;
        const {siteNavigationOpen, userNavigationOpen} = this.state;
        const siteHeaderClass = 'site-header '+ (stickyHeader ? 'sticky ' : '') + (homepage ? 'homepage ' : '') + ( (siteNavigationOpen || userNavigationOpen) ? 'menu-open' : '');
        return(
            <header className={siteHeaderClass}>
                <div class="grid-container">
                    <div class="grid-wrap">
                        <Link to="/">
                            <div className="site-logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </Link>
                        <div class={ siteNavigationOpen ? 'site-nav open': 'site-nav' } onClick={this.onSiteNavigationClick}>
                            <div class="wrap">
                                <div class="open-wrap">
                                    <img src={hambargar} alt="hambargar"/>
                                    <p>Menu</p>
                                </div>
                                <div class="close-wrap">
                                    <img src={hambargarClose} alt="hambargarClose"/>
                                    <p>Close</p>
                                </div>

                                <div class="the-site-navigation">
                                    <ul>
                                        <li><Link to="/index">Home</Link></li>
                                        <li><Link to="#">Application Process</Link></li>
                                        <li><Link to="/know-requirements.php">Know the requirements</Link></li>
                                        <li><Link to="#">Operating restrictions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        { loggedIn && user.isAdmin && <HeaderAdminUserMenu userNavigationOpen={userNavigationOpen} siteNavigationOpen={siteNavigationOpen} onUserNavigationClick={this.onUserNavigationClick} /> }
                        { (loggedIn &&  !user.isAdmin) &&  <HeaderUserMenu userNavigationOpen={userNavigationOpen} siteNavigationOpen={siteNavigationOpen} onUserNavigationClick={this.onUserNavigationClick} /> }
                        { !loggedIn  &&  <HeaderLoginMenu/> }
                    </div>
                </div>
            </header>
        );
  }
}

export default Header;