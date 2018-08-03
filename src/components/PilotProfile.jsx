import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom'

class PilotProfile extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            profile: {
                addressList:[
                    {
                        lineOne: '',
                        lineTwo: '',
                        city: '',
                        state: '',
                        country: '',
                        pinCode: ''
                    }
                ]
            }
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if(!nextProps.profile.empty){
            this.setState({profile: nextProps.profile});
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { profile } = this.state;
        this.updateObjProp(profile, value, name);
        this.setState({profile: profile});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
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
        this.setState({submitted: true});
        if(this.props.pilotProfileSaved){
            this.props.updatePilotProfile(this.state.profile);
        } else{
            this.props.setupPilotProfile(this.state.profile);
        }
    }


    render() {
        const { savingPilotProfile, pilotProfileSaved, errors} = this.props;
        const { formErrors, submitted, profile } = this.state;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Basic Pilot Profile</h2>
                        { submitted && ( !errors || errors.length === 0)  &&  pilotProfileSaved && <p> Successfully Saved Pilot Profile <br/></p>}
                        <p><Link to="/profile">Back to Main Profile</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="pilotProfileForm" onSubmit={this.handleSubmit}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">

                                <div className="large-12 cell">
                                    <label>Mobile Number
                                        <input type="text" placeholder="Mobile Number" name="mobileNumber" onChange={this.handleChange} value={profile.mobileNumber} maxLength="13" className={decorateInputClass(this.state.fieldErrors['mobileNumber'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='mobileNumber'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Date of Birth
                                        <input type="text" placeholder="DD-MM-YYYY" name="dateOfBirth" onChange={this.handleChange} value={profile.dateOfBirth} maxLength="10" className={decorateInputClass(this.state.fieldErrors['dateOfBirth'],[])} validate="required,dateOfBirth" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='dateOfBirth'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Country (Nationality)
                                        <input type="text" placeholder="country" name="country" onChange={this.handleChange} value={profile.country} className={decorateInputClass(this.state.fieldErrors['country'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='country'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Address
                                        <input type="text" placeholder="Line One" name="addressList.0.lineOne" onChange={this.handleChange} value={ profile.addressList && profile.addressList[0].lineOne} className={decorateInputClass(this.state.fieldErrors['addressList.0.lineOne'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.lineOne'/>

                                        <input type="text" placeholder="Line Two" name="addressList.0.lineTwo" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].lineTwo}/>

                                        <input type="text" placeholder="City Or Town" name="addressList.0.city" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].city} className={decorateInputClass(this.state.fieldErrors['addressList.0.city'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.city'/>

                                        <input type="text" placeholder="State" name="addressList.0.state" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].state} className={decorateInputClass(this.state.fieldErrors['addressList.0.state'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.state'/>

                                        <input type="text" placeholder="Country" name="addressList.0.country" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].country} className={decorateInputClass(this.state.fieldErrors['addressList.0.country'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.country'/>

                                        <input type="text" placeholder="Pin Code" name="addressList.0.pinCode" maxLength="8" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].pinCode} className={decorateInputClass(this.state.fieldErrors['addressList.0.pinCode'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.pinCode'/>
                                    </label>
                                </div>
                               <div className="large-12 cell">

                                    { submitted && ( !errors || errors.length === 0)  &&  pilotProfileSaved && <p> Successfully Saved Pilot Profile <br/></p>}

                                    <button type="submit" className="button" name="button">{pilotProfileSaved ? 'Update' : 'Submit' }</button>
                                    {
                                       savingPilotProfile && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
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

export default PilotProfile;