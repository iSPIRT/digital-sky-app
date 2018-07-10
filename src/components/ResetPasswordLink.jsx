import React from 'react';
import { Link } from 'react-router-dom'

class ResetPasswordLink extends React.Component {

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
        const email = this.refs.email.value
        this.props.sendResetPasswordLink({ email });
    }


    render() {
        const { sendingResetPasswordLink, errors} = this.props;
        const { formErrors } = this.state;
        return (
            <div>
                <h2>Reset Password</h2>
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                { formErrors && formErrors.length > 0 && <p>{formErrors.toString()}</p> }
                <form name="resetPasswordLinkForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" ref="email"/>
                    </div>
                    <div>
                        <input type="submit" name="Submit"/>
                        {
                           sendingResetPasswordLink && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default ResetPasswordLink;