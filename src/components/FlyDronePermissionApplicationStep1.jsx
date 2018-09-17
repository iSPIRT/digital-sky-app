import React from 'react';

import FormErrors from './FormErrors';

import { Link } from 'react-router-dom'

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

class FlyDronePermissionApplicationStep1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            application: this.props.application,
        };
    }

    componentWillReceiveProps(nextProps){
        const { application, errors, savingApplication } = nextProps;
        const {submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (application.id !== "0") && !savingApplication){
            this.props.nextStep();
        }
        const currentApplication = this.state.application;
        currentApplication.id = application.id;

        if(currentApplication.startDateTime){
            currentApplication.startDate = currentApplication.startDateTime.split(" ")[0]
            currentApplication.startTime = currentApplication.startDateTime.split(" ")[1].slice(0,5)
        }

        if(currentApplication.endDateTime) {
            currentApplication.endDate = currentApplication.endDateTime.split(" ")[0]
            currentApplication.endTime = currentApplication.endDateTime.split(" ")[1].slice(0,5)
        }
        this.setState({application: currentApplication});
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

        const {application} = this.state;
        application.startDateTime = application.startDate+" "+application.startTime+":00";
        application.startDate = undefined;
        application.startTime = undefined;

        application.endDateTime = application.endDate+" "+application.endTime+":00";
        application.endDate = undefined;
        application.endTime = undefined;

        if(this.props.application.id !== "0" ){
            this.props.updateApplication(this.props.application.id, application);
        } else{
            this.props.createApplication(application);
        }
    }

    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, application } = this.state;
        return (
            <div>
                <div className="page-form">
                    <form name="flyDronePermissionApplicationForm" onSubmit={this.handleSaveApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>Fly Drone Permission Application</h2>
                                    <FormErrors errors = {errors}/>
                                    <FormErrors errors = {formErrors}/>
                                    <p><Link to={'/flyDronePermissionApplications?droneId='+application.droneId}>Back To Applications</Link></p>
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
                                        <input type="text" placeholder="Pilot Id" name="pilotId" onChange={this.handleChange} value={application.pilotId} maxLength="20" className={decorateInputClass(this.state.fieldErrors['pilotId'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='pilotId'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Start Date
                                        <input type="text" placeholder="DD-MM-YYYY" name="startDate" onChange={this.handleChange} value={application.startDate} maxLength="20" className={decorateInputClass(this.state.fieldErrors['startDate'],[])} validate="futureDate" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='startDate'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Start Time
                                        <input type="text" placeholder="HH24:MM" name="startTime" onChange={this.handleChange} value={application.startTime} maxLength="20" className={decorateInputClass(this.state.fieldErrors['startTime'],[])} validate="time" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='startTime'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>End Date
                                        <input type="text" placeholder="DD-MM-YYYY" name="endDate" onChange={this.handleChange} value={application.endDate} maxLength="20" className={decorateInputClass(this.state.fieldErrors['endDate'],[])} validate="futureDate" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='endDate'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>End Time
                                        <input type="text" placeholder="HH24:MM" name="endTime" onChange={this.handleChange} value={application.endTime} maxLength="20" className={decorateInputClass(this.state.fieldErrors['endTime'],[])} validate="time" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='endTime'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Payload Weight In Kgs
                                        <input type="text" placeholder="0.0" name="payloadWeightInKg" onChange={this.handleChange} value={application.payloadWeightInKg} maxLength="5" className={decorateInputClass(this.state.fieldErrors['payloadWeightInKg'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='payloadWeightInKg'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Payload Details
                                        <input type="text" placeholder="" name="payloadDetails" onChange={this.handleChange} value={application.payloadDetails} maxLength="100" className={decorateInputClass(this.state.fieldErrors['payloadDetails'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='payloadDetails'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Purpose Of Flight
                                        <input type="text" placeholder="" name="flightPurpose" onChange={this.handleChange} value={application.flightPurpose} maxLength="100" className={decorateInputClass(this.state.fieldErrors['flightPurpose'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='flightPurpose'/>
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

export default FlyDronePermissionApplicationStep1;