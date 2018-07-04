import React from 'react';
import { Link } from 'react-router-dom'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            fullName: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            confirmPassword: this.refs.confirmPassword.value
        };
        this.props.registerUser(user);

    }

    render() {
        const { registering, errors, user} = this.props;
        console.log(registering);
        return (
            <div>
                <h2>Register</h2>
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                <form name="registrationForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={user.name} ref="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={user.email} ref="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={user.password} ref="password" />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={user.confirmPassword} ref="confirmPassword"/>
                    </div>
                    <div>
                        <input type="submit" name="Submit"/>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;