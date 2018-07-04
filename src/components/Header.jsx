import React from 'react';
import { Link } from 'react-router-dom'


class GuestHeader extends React.Component {
  render() {
    return (
        <div>
            <div><h1>DigitalSky</h1></div>
            <div>
                 <Link to="/login" >Login</Link>
            </div>
            <div>
                 <Link to="/register" >Register</Link>
            </div>
        </div>
    );
  }
}

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
        <div>
            <div><h1>DigitalSky</h1></div>
            <div>
                 <label>sample111</label>
            </div>
        </div>
    );
  }
}


class Header extends React.Component {
  render() {
    const {loggedIn} = this.props;
    if(loggedIn) {
        return <UserHeader user={this.props.user}/>
    }
    return <GuestHeader />
  }
}

export default Header;