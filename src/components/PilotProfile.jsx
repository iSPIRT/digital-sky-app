import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom'

import DatePicker from 'react-datepicker';

import moment from 'moment';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class PilotProfile extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.handleChangeDateOfBirth = this.handleChangeDateOfBirth.bind(this);
        this.handleDroneSelect = this.handleDroneSelect.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            profile: {
                droneCategoryTypes: [],
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
            if(!this.state.dateOfBirth && nextProps.profile.dateOfBirth){
                this.setState({dateOfBirth: moment(nextProps.profile.dateOfBirth, 'DD-MM-YYYY')})
            }
        }
    }

    handleChangeDateOfBirth(dateOfBirth){
        this.setState({dateOfBirth: dateOfBirth});
    }

    handleChange(event) {
        debugger
        const { name, value, type } = event.target;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { profile } = this.state;
            this.updateObjProp(profile, value, name);
            this.setState({profile: profile});
        }
    }

    selectCountry(event){
        const { profile } = this.state;
        this.state.profile.addressList[0].country=event;
        this.setState({profile:profile})
    }

    selectRegion(event){
        const { profile } = this.state;
        this.state.profile.addressList[0].state=event;
        this.setState({profile:profile})
    }

    handleDroneSelect(event) {
        const { name, value, type } = event.target;
        var index = this.state.profile.droneCategoryTypes.indexOf(value);
        if(index>-1){
            this.state.profile.droneCategoryTypes.splice(index,1);
        }
        else{
            this.state.profile.droneCategoryTypes.push(value)
        }
        this.setState(this.state);
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

        const formErrors = [];

        if(!this.state.dateOfBirth){
            formErrors.push("Please select date of birth");
        }

        if(this.state.profile.droneCategoryTypes.size<1){
            formErrors.push("Please select a drone category");
        }

        if(formErrors.length > 0){
            this.setState({formErrors});
            return;
        }

        this.setState({submitted: true});
        const formData = new FormData();
        formData.append("trainingCertificateDocument", this.state.trainingCertificateDoc)
        const {profile} = this.state;
        profile.dateOfBirth = this.state.dateOfBirth.format('DD-MM-YYYY');
        formData.append("pilotPayload", JSON.stringify(profile))
        debugger
        if(this.props.pilotProfileSaved){
            this.props.updatePilotProfile(formData);
        } else{
            this.props.setupPilotProfile(formData);
        }
    }


    render() {
        const { savingPilotProfile, pilotProfileSaved, errors} = this.props;
        const { formErrors, submitted, profile, trainingCertificateDoc } = this.state;
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
                                {  profile &&  profile.id &&
                                    <div className="large-12 cell">
                                        <label>Id
                                            <p>{profile.businessIdentifier}</p>
                                        </label>
                                    </div>
                                }
                                <div className="large-12 cell">
                                    <label>Mobile Number
                                        <input type="text" placeholder="Mobile Number" name="mobileNumber" onChange={this.handleChange} value={profile.mobileNumber} maxLength="13" className={decorateInputClass(this.state.fieldErrors['mobileNumber'],[])} validate="required,mobileNumber" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='mobileNumber'/>
                                    </label>
                                </div>
                                <div className="large-3 cell">
                                    <label>Date of Birth</label>
                                </div>

                                <div className="large-8 cell-fix dob">
                                    <DatePicker
                                        selected={this.state.dateOfBirth}
                                        onChange={this.handleChangeDateOfBirth}
                                        dateFormat="DD-MM-YYYY"
                                        maxDate={moment().add(-10,"years")}
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                    <br/>
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

                                        <RegionDropdown type="text" placeholder="State" name="addressList.0.state" onChange={this.selectRegion} value={profile.addressList && profile.addressList[0].state} className={decorateInputClass(this.state.fieldErrors['addressList.0.state'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} country={profile.addressList && profile.addressList[0].country}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.state'/>

                                        <CountryDropdown type="text" placeholder="Country" name="addressList.0.country" onChange={this.selectCountry} value={profile.addressList && profile.addressList[0].country} className={decorateInputClass(this.state.fieldErrors['addressList.0.country'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.country'/>

                                        <input type="text" placeholder="Pin Code" name="addressList.0.pinCode" maxLength="8" onChange={this.handleChange} value={profile.addressList && profile.addressList[0].pinCode} className={decorateInputClass(this.state.fieldErrors['addressList.0.pinCode'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='addressList.0.pinCode'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                        <label>Upload your <br /> Training Certificate
                                            { pilotProfileSaved && profile.trainingCertificateDocName &&
                                                <p><a onClick={(e) =>  this.props.downloadDocument(profile.trainingCertificateDocName)}>{profile.trainingCertificateDocName}</a></p>
                                            }
                                            <p>{trainingCertificateDoc && trainingCertificateDoc.name}</p>
                                        </label>
                                         <label htmlFor="trainingCertificateDoc" className="button button-file-upload">Upload File</label>
                                         <input type="file" id="trainingCertificateDoc" name="trainingCertificateDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                </div>
                                <div className="large-12 cell" id="drone-category">
                                    <label className="main">Drone Category</label>
                                    <div className="category-wrap">
                                        <label className="radio">Nano
                                            <span className="info">Less than or equal to <br/>250 grams</span>
                                            <input type="checkbox" value="NANO" checked={this.state.profile.droneCategoryTypes && this.state.profile.droneCategoryTypes.indexOf('NANO') > -1 } name="droneCategory" onChange={this.handleDroneSelect}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                
                                    <div className="category-wrap">
                                        <label className="radio">Micro
                                            <span className="info">Greater than 250 grams and <br/>less than or equal to 2 kg</span>
                                            <input type="checkbox" value="MICRO" checked={this.state.profile.droneCategoryTypes && this.state.profile.droneCategoryTypes.indexOf('MICRO') > -1 } name="droneCategory" onChange={this.handleDroneSelect}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                
                                    <div className="category-wrap">
                                        <label className="radio">Small
                                            <span className="info">Greater than 2 kg and less <br/>than or equal to 25 kg</span>
                                            <input type="checkbox" value="SMALL" checked={this.state.profile.droneCategoryTypes && this.state.profile.droneCategoryTypes.indexOf('SMALL') > -1} name="droneCategory" onChange={this.handleDroneSelect}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                
                                    <div className="category-wrap">
                                        <label className="radio">Medium
                                            <span className="info">Greater than 25 kg and less <br/>than or equal to 150 kg</span>
                                            <input type="checkbox" value="MEDIUM" checked={this.state.profile.droneCategoryTypes && this.state.profile.droneCategoryTypes.indexOf('MEDIUM') > -1} name="droneCategory" onChange={this.handleDroneSelect}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                
                                    <div className="category-wrap">
                                        <label className="radio">Large
                                            <span className="info">Greater than <br/>150 kg</span>
                                            <input type="checkbox" value="LARGE" checked={this.state.profile.droneCategoryTypes && this.state.profile.droneCategoryTypes.indexOf('LARGE') > -1 } name="droneCategory" onChange={this.handleDroneSelect}/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
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