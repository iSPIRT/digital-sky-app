import React from 'react';
import { Link } from 'react-router-dom'


import hambargar from '../img/hambargar.svg';
import hambargarClose from '../img/hambargar-close.svg';


class HeaderSiteNavigationMenu extends React.Component {

    constructor(props) {
        super(props);
        this.onSiteNavigationClick = this.onSiteNavigationClick.bind(this);
    }

    onSiteNavigationClick(){
        this.props.onSiteNavigationClick(!this.props.siteNavigationOpen);
    }

    render() {

        const { userNavigationOpen, siteNavigationOpen } = this.props;

        return (
            <div className={ siteNavigationOpen  && !userNavigationOpen ? 'site-nav hide-for-large open' : 'site-nav hide-for-large'} onClick={this.onSiteNavigationClick}>
                <div className="wrap">
                    <div className="open-wrap">
                        <img src={hambargar} alt="hambargar"/>
                        <p>Menu</p>
                    </div>
                    <div className="close-wrap">
                        <img src={hambargarClose} alt="hambargarClose"/>
                        <p>Close</p>
                    </div>

                    <div className="the-site-navigation">
                        <ul>
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
                </div>
            </div>
        );
    }
}

export default HeaderSiteNavigationMenu;