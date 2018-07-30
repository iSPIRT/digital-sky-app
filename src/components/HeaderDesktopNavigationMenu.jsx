import React from 'react';
import { Link } from 'react-router-dom'

class HeaderDesktopNavigationMenu extends React.Component {
  render() {
    return (
        <div className="desktop-site-navigation">
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="#">Know Requirements</Link>
                </li>
                <li>
                    <Link to="#">Apply</Link>
                </li>
                <li>
                    <Link to="#">Operating Guidelines</Link>
                </li>
                <li>
                    <Link to="#">Regulations & Policies</Link>
                </li>
            </ul>
        </div>
    );
  }
}

export default HeaderDesktopNavigationMenu;