import React from 'react';
import { Link } from 'react-router-dom'

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {}

        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({submitted: false});
    }

    handleSubmit(event) {
        event.preventDefault();
        const fieldErrors = validateForm(event.target)
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }

        this.setState({fieldErrors:{}});

        const user = {
            fullName: this.refs.fullName.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        };

        const formErrors = [];

        if(this.refs.password.value !== this.refs.confirmPassword.value) {
            formErrors.push('Passwords did not match');
        }
        this.setState({formErrors});
        if( formErrors.length === 0 ) {
             this.setState({submitted: true});
             this.props.registerUser(user);
        }
    }

    render() {
        const { registering, errors} = this.props;
        const { formErrors } = this.state;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Hello</h2>
                        <p>Create an account below to continue<br/><Link to="/login">I’m already registered, sign in here</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="registrationForm" onSubmit={this.handleSubmit}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">

                                <div className="large-12 cell">
                                    <label>Full name
                                        <input type="text" placeholder="Full name" name="fullName" ref="fullName" className={decorateInputClass(this.state.fieldErrors['fullName'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='fullName'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Email
                                        <input type="text" placeholder="Email" name="email" ref="email" className={decorateInputClass(this.state.fieldErrors['email'],[])} validate="required,email" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='email'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Password
                                        <input type="password" placeholder="Password" name="password" ref="password" className={decorateInputClass(this.state.fieldErrors['password'],[])} validate="required,minLength8" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='password'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Confirm Password
                                        <input type="password" placeholder="Confirm Password" name="confirmPassword" ref="confirmPassword" className={decorateInputClass(this.state.fieldErrors['confirmPassword'],[])} validate="required,minLength8" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='confirmPassword'/>
                                    </label>
                                </div>
                                <div className="large-6 cell">
                                    <button type="submit" className="button" name="button">Sign Up</button>
                                    {
                                       registering && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;