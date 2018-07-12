import React from 'react';
import { Link } from 'react-router-dom'

import user from '../img/user.svg';


class HeaderLoginMenu extends React.Component {
  render() {
    return (
        <Link to="/login">
            <div className="user-nav">
                <div className="wrap">
                    <img src={user} alt="user"/>
                    <p>Login</p>
                </div>
            </div>
        </Link>
    );
  }
}

export default HeaderLoginMenu;