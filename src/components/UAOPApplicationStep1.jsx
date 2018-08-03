import React from 'react';

import FormErrors from './FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

class UAOPApplicationStep1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            application: {},
        };
    }

    componentWillReceiveProps(nextProps){
        const { application, errors } = nextProps;
        const {submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0)){
            this.props.nextStep();
        }
        this.setState({formErrors: []});
        this.setState({application: nextProps.application});
    }

    handleChange(event) {
        const { name, value} = event.target;
        const { application } = this.state;
        this.updateObjProp(application, value, name);
        this.setState({application: application});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSaveApplication(event) {
        event.preventDefault();
        const fieldErrors = validateForm(event.target)
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }

        this.setState({submitted: true});
        const formData = new FormData();
        formData.append("uaopApplicationForm", JSON.stringify(this.state.application))
        if(this.props.application.id !== 0 ){
            this.props.updateApplication(this.props.application.id, formData);
        } else{
            this.props.createApplication(formData);
        }
    }

    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, application } = this.state;
        return (
            <div>
                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="uaopApplicationForm" onSubmit={this.handleSaveApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>UAOP Application</h2>
                                    <div className="form-steps">
                                        <ul>
                                            <li className="now step-1"><p>Step 1</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className="todo step-2"><p>Step 2</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className="todo step-3"><p>Step 3</p>
                                                <div className="circle"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="large-12 cell">
                                    <label>Name
                                        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={application.name} maxLength="100" className={decorateInputClass(this.state.fieldErrors['name'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='name'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Designation
                                        <input type="text" placeholder="Designation" name="designation" onChange={this.handleChange} value={application.designation} maxLength="20" />
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <button type="submit" className="button" name="button">Save & Continue</button>
                                    {
                                       savingApplication && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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

export default UAOPApplicationStep1;