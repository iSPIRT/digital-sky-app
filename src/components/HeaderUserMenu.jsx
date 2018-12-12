import React from 'react';
import { Link } from 'react-router-dom'

import user from '../img/user.svg';
import hambargarClose from '../img/hambargar-close.svg';

class HeaderUserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.onUserNavigationClick = this.onUserNavigationClick.bind(this);
        this.findprofile = this.findprofile.bind(this);        
    }

    onUserNavigationClick(){
        this.props.onUserNavigationClick(!this.props.userNavigationOpen);
    }

    findprofile(){
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');        
        const arr = [pilotProfileId,individualOperatorProfileId,organizationOperatorProfileId,manufacturerProfileId]
        if(arr.filter((id)=>id!=0).length > 1){
            return '/profile';
        }
        else if(pilotProfileId>0){
            return '/pilotProfile';
        }
        else if(individualOperatorProfileId>0){
            return '/individualOperatorProfile';
        }
        else if(organizationOperatorProfileId>0){
            return '/organizationOperatorProfile';
        }
        else if(manufacturerProfileId>0){
            return '/manufacturerProfile';
        }
        return null
    }

    render() {
        const {userNavigationOpen, siteNavigationOpen } = this.props;
        const pilotProfileId = localStorage.getItem('pilotProfileId');
        const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
        const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');
        const manufacturerProfileId = localStorage.getItem('manufacturerProfileId');
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
                        {
                            manufacturerProfileId>0 &&
                            <li><Link to="/dashboard">My RPAS Types</Link></li>
                        }
                        {
                            manufacturerProfileId>0 &&
                            <li><Link to="/droneType">Create New RPAS Types</Link></li> 
                        }
                        {
                            manufacturerProfileId==0 &&
                            <li><Link to="/dashboard">My Dashboard</Link></li> 
                        }
                        {/*
                            manufacturerProfileId==0 && 
                            <li><Link to="/occurrenceReport">Create Occurence Report</Link></li> 
                        */}
                        {this.findprofile()!=null && <li><Link to={this.findprofile()}>Edit My Profile</Link></li>}
                        <li><Link to="/logout" className="logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderUserMenu;