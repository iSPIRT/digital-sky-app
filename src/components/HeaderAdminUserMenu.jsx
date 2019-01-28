import React from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';

import user from '../img/user.svg';
import hambargarClose from '../img/hambargar-close.svg';
import { checkAdminAction } from '../actions/loginActions';

class HeaderAdminUserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.onUserNavigationClick = this.onUserNavigationClick.bind(this);
        this.state={
            isAdmin:true
        }
        this.props.dispatch(checkAdminAction(localStorage.getItem('accessToken')));
    }

    onUserNavigationClick(){
        this.props.onUserNavigationClick(!this.props.userNavigationOpen);
    }

    componentWillReceiveProps(){
        if(this.props.adminCheck)
            this.setState({isAdmin:true})
        else
            this.setState({isAdmin:false})
    }

    render() {
        const {userNavigationOpen, siteNavigationOpen } = this.props;
        const { isAdmin } = this.state;
        return (
            <div className={ userNavigationOpen && !siteNavigationOpen ? 'user-nav dashboard open' : 'user-nav dashboard'} onClick={this.onUserNavigationClick}>
                <div className="open-wrap">
                    <img src={user} alt="user"/>                    
                    {isAdmin==true?<p>Admin</p>:<p>User</p>}
                </div>
                <div className="close-wrap">
                    <img src={hambargarClose} alt="hambargarClose"/>
                    <p>Close</p>
                </div>

                <div className="the-user-navigation">
                    <ul>
                        {isAdmin?<li><Link to="/admin/droneType">RPA Types</Link></li>:null}
                        {isAdmin?<li><Link to="/dashboard">Dashboard</Link></li>:null}
                        {isAdmin?<li><Link to="/admin/blogList">Manage Blog List</Link></li>:null}
                        {isAdmin?<li><Link to="/admin/airspaceCategoryList">Manage Airspace Categories</Link></li>:null}
                        <li><Link to="/logout" className="logout">Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {    
    const { adminCheck } = state.adminTest;
    return {       
       adminCheck
    };
}
export default connect(
    mapStateToProps
)(HeaderAdminUserMenu)