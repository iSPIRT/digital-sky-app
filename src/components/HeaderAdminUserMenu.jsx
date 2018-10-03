import React from 'react';
import { Link } from 'react-router-dom'

import user from '../img/user.svg';
import hambargarClose from '../img/hambargar-close.svg';

class HeaderAdminUserMenu extends React.Component {

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
                    <p>Admin</p>
                </div>
                <div className="close-wrap">
                    <img src={hambargarClose} alt="hambargarClose"/>
                    <p>Close</p>
                </div>

                <div className="the-user-navigation">
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/admin/blogList">Manage Blog List</Link></li>
                        <li><Link to="/admin/airspaceCategoryList">Manage Airspace Categories</Link></li>
                        <li><Link to="/logout" className="logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderAdminUserMenu;