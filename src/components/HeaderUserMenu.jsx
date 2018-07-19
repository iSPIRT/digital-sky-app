import React from 'react';
import { Link } from 'react-router-dom'

import user from '../img/user.svg';
import hambargarClose from '../img/hambargar-close.svg';

class HeaderUserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.onUserNavigationClick = this.onUserNavigationClick.bind(this);
    }

    onUserNavigationClick(){
        this.props.onUserNavigationClick(!this.props.userNavigationOpen);
    }

    render() {
        const {userNavigationOpen, siteNavigationOpen } = this.props;
        return (
            <div className={ userNavigationOpen && !siteNavigationOpen ? 'user-nav dashboard open' : 'user-nav dashboard'} onClick={this.onUserNavigationClick}>
                <div className="open-wrap">
                    <img src={user} alt="user"/>
                    <p>User</p>
                </div>
                <div className="close-wrap">
                    <img src={hambargarClose} alt="hambargarClose"/>
                    <p>Close</p>
                </div>

                <div className="the-user-navigation">
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="apply-for.php">Apply now</Link></li>
                        <li><Link to="dashboard.php">Dashboard</Link></li>
                        <li><Link to="#">My drones</Link></li>
                        <li><Link to="#">Occurance report</Link></li>
                        <li><Link to="#">Application Status</Link></li>
                        <li><Link to="#">Edit user settings</Link></li>
                        <li><Link to="/logout" className="logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderUserMenu;