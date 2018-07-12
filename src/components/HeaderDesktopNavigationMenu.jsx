import React from 'react';
import { Link } from 'react-router-dom'

class HeaderDesktopNavigationMenu extends React.Component {
  render() {
    return (
        <div className="desktop-site-navigation">
            <ul className="menu">
                <li>
                    <Link to="/">
                    Home</Link></li>
                <li>
                    <Link to="#">
                    Application Process</Link></li>
                <li>
                    <Link to="#">
                    Know the requirements</Link></li>
                <li>
                    <Link to="#">
                    Operating restrictions</Link></li>
            </ul>
        </div>
    );
  }
}

export default HeaderDesktopNavigationMenu;