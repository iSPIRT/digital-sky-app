import React from 'react';

import HeaderLogo from '../components/HeaderLogo';
import HeaderLoginMenu from '../components/HeaderLoginMenu';
import HeaderUserMenu from '../components/HeaderUserMenu';
import HeaderDesktopNavigationMenu from '../components/HeaderDesktopNavigationMenu';
import HeaderSiteNavigationMenu from '../components/HeaderSiteNavigationMenu';

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
        this.setState({siteNavigationOpen: value});
    }

    onUserNavigationClick(value){
       this.setState({userNavigationOpen: value});

    }

    render() {
        const {loggedIn, homepage, stickyHeader} = this.props;
        const {siteNavigationOpen, userNavigationOpen} = this.state;
        const siteHeaderClass = 'site-header '+ (stickyHeader ? 'sticky ' : '') + (homepage ? 'homepage ' : '') + ( (siteNavigationOpen || userNavigationOpen) ? 'menu-open' : '');
        return(
            <header className={siteHeaderClass}>
                <HeaderLogo/>
                { loggedIn ? <HeaderUserMenu userNavigationOpen={userNavigationOpen} siteNavigationOpen={siteNavigationOpen} onUserNavigationClick={this.onUserNavigationClick} />:  <HeaderLoginMenu/> }
                <HeaderSiteNavigationMenu userNavigationOpen={userNavigationOpen} siteNavigationOpen={siteNavigationOpen} onSiteNavigationClick={this.onSiteNavigationClick}/>
                <HeaderDesktopNavigationMenu/>
            </header>
        );
  }
}

export default Header;