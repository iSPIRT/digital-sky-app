import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../img/logo.svg';

class HeaderLogo extends React.Component {
  render() {
    return (
        <Link to="/">
            <div className="site-logo" style="width: calc(100% - 70px);">
                <img src={logo} alt="logo"/>
            </div>
        </Link>
    );
  }
}

export default HeaderLogo;
