import React from 'react';

import { Link } from 'react-router-dom'

import logo from '../img/digitalsky-logo.svg';
// import hambargarClose from '../img/hambargar-close.svg';
// import hambargar from '../img/hambargar.svg';

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
                <div className="grid-container">
                    <div className="grid-wrap">
                        <Link to="/">
                            <div className="site-logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </Link>
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