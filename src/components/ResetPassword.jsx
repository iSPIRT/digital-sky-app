import React from 'react';
import { Link } from 'react-router-dom'

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[]
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({submitted: false});
        this.setState({formErrors: []});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        const payload = {
            token: this.props.token,
            password: this.refs.password.value
        }
        if(this.refs.password.value !== this.refs.confirmPassword.value) {
            this.setState({formErrors: ['Passwords did not match']});
        } else {
            this.props.resetPassword(payload);
        }
    }


    render() {
        const { resettingPassword, errors} = this.props;
        const { formErrors } = this.state;
        return (
            <div>
                <h2>Reset Password</h2>
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                { formErrors && formErrors.length > 0 && <p>{formErrors.toString()}</p> }
                <form name="resetPassword" onSubmit={this.handleSubmit}>
                    <div>
                        <label>New Password</label>
                        <input type="password" name="password" ref="password"/>
                    </div>
                    <div>
                        <label>Confirm New Password</label>
                        <input type="password" name="confirmPassword" ref="confirmPassword"/>
                    </div>
                    <div>
                        <input type="submit" name="Submit"/>
                        {
                           resettingPassword && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default ResetPassword;