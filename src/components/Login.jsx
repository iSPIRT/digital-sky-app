import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const credentials = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };
        this.props.loginUser(credentials);

    }

    render() {
        const { loginActionInProgress, errors} = this.props;
        console.log(loginActionInProgress);
        return (
            <div>
                <h2>Login</h2>
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                <form name="loginForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" ref="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" ref="password" />
                    </div>
                    <div>
                        <input type="submit" name="Login"/>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;