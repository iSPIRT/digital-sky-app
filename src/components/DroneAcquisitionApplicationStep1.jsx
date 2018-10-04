import React from 'react';
import DroneAcquisitionDroneTypeDetailsForm from './DroneAcquisitionDroneTypeDetailsForm';
import FooterApplicationForm from './FooterApplicationForm';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';
import FieldError from '../components/FieldError';
//import FormErrors from './FormErrors';

class DroneAcquisitionApplicationStep1 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateDroneDetails =  this.updateDroneDetails.bind(this);
        this.validateFieldValue = this.validateFieldValue.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            valueChanged: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const { errors } = nextProps;
        this.setState({formErrors: []});
        const { submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (nextProps.applicationForm.id !== 0)){
            this.props.nextStep();
        }
        var form = this.props.applicationForm;
        if(!nextProps.applicationForm.id && !this.state.valueChanged) {
            if(nextProps.user && nextProps.user.fullName) {
                form.applicant = nextProps.user.fullName;
            }
            if(nextProps.operatorProfile && nextProps.operatorProfile.addressList) {
                form.applicantAddress.lineOne = nextProps.operatorProfile.addressList[0].lineOne;
                form.applicantAddress.lineTwo = nextProps.operatorProfile.addressList[0].lineTwo;
                form.applicantAddress.city = nextProps.operatorProfile.addressList[0].city;
                form.applicantAddress.state = nextProps.operatorProfile.addressList[0].state;
                form.applicantAddress.country = nextProps.operatorProfile.addressList[0].country;
                form.applicantAddress.pinCode = nextProps.operatorProfile.addressList[0].pinCode;
                form.applicantNationality = nextProps.operatorProfile.country;
            }
        }
        this.setState({applicationForm: form}); 
    }

    handleChange(event) {
        var { name, value } = event.target;
        if( event.target.type === 'select' && event.target.value === -1) return;
        const { applicationForm } = this.state;
        this.updateObjProp(applicationForm, value, name);
        if(!this.state.valueChanged) {
            this.setState({valueChanged : true});
        }
        this.setState({applicationForm: applicationForm});
    }
    
    updateDroneDetails(droneType) {
        var application = this.state.applicationForm;

        application["droneTypeId"] = droneType.id;
        application["manufacturer"] = droneType.manufacturer;
        application["manufacturerAddress"] = {
            lineOne: droneType.manufacturerAddress ? droneType.manufacturerAddress.lineOne : "",
            lineTwo: droneType.manufacturerAddress ? droneType.manufacturerAddress.lineTwo : "",
            city: droneType.manufacturerAddress ? droneType.manufacturerAddress.city : "",
            state: droneType.manufacturerAddress ? droneType.manufacturerAddress.state : "",
            country: droneType.manufacturerAddress ? droneType.manufacturerAddress.country : "",
            pinCode: droneType.manufacturerAddress ? droneType.manufacturerAddress.pinCode : ""
        }
        application["manufacturerNationality"] = droneType.manufacturerNationality;
        application["modelName"] = droneType.modelName ;
        application["modelNo"] = droneType.modelNo;
        application["serialNo"] = droneType.serialNo;
        application["dateOfManufacture"] = droneType.dateOfManufacture;
        application["wingType"] = droneType.wingType;
        application["maxTakeOffWeight"] = droneType.maxTakeOffWeight;
        application["maxHeightAttainable"] = droneType.maxHeightAttainable;
        application["compatiblePayload"] = droneType.compatiblePayload;

        this.setState({applicationForm: application});
    }

    updateObjProp(obj, value, propPath) {
        var [head, ...rest] = propPath.split('.');
        !rest.length
        ? obj[head] = value
        : this.updateObjProp(obj[head], value, rest.join("."));
    }

    validateFieldValue(target) {
        if(!target.readOnly) {
            this.setState({fieldErrors: validateField(this.state.fieldErrors, target)})
        }
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
        this.setState({submitted: true});
        var applicationString = JSON.stringify(this.state.applicationForm);

        if( this.props.applicationForm.id ) {
            var formData = new FormData();
            formData.append("droneAcquisitionForm", applicationString) ;
            this.props.updateApplication(formData, this.props.applicationForm.id )
        }
        else {
            this.props.createApplication(applicationString);
        }
    }
   
    render() {
        // const categoryOptions = this.props.categoryOptions.map(category => {
        //     return (<option value={category} key={category}> {category} </option>);
        // });

        // const nationalityOptions = this.props.nationalityOptions.map(nationality => {
        //     return (<option value={nationality} key={nationality}> {nationality} </option>);
        // });
        const { saving, step, droneTypes } = this.props;
        const { applicationForm } = this.state;
        const isReadOnly = true;
        
        if(!applicationForm) return null;
        return (
            <div>
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>Name of Applicant
                                    <input type="text" name="applicant" placeholder="Full Name" value= { applicationForm.applicant } onChange= { this.handleChange } maxLength="100" className={decorateInputClass(this.state.fieldErrors['applicant'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicant'/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Address of Applicant
                                    <input type="text" name="applicantAddress.lineOne" placeholder="Address Line1" value= { (applicationForm.applicantAddress && applicationForm.applicantAddress.lineOne)  } onChange= { this.handleChange } className={decorateInputClass(this.state.fieldErrors['applicantAddress.lineOne'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantAddress.lineOne'/>
                                    <input type="text" name="applicantAddress.lineTwo" placeholder=" Address Line2" value= { applicationForm.applicantAddress && applicationForm.applicantAddress.lineTwo } onChange= { this.handleChange }/>
                                    <input type="text" name="applicantAddress.city"  placeholder="City" value= { applicationForm.applicantAddress && applicationForm.applicantAddress.city } onChange= { this.handleChange } className={decorateInputClass(this.state.fieldErrors['applicantAddress.city'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantAddress.city'/>
                                    <input type="text" name="applicantAddress.state" placeholder="State" value= { applicationForm.applicantAddress && applicationForm.applicantAddress.state } onChange= { this.handleChange } className={decorateInputClass(this.state.fieldErrors['applicantAddress.state'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantAddress.state'/>
                                    <input type="text" name="applicantAddress.country" placeholder="Country" value= { applicationForm.applicantAddress && applicationForm.applicantAddress.country } onChange= { this.handleChange }  className={decorateInputClass(this.state.fieldErrors['applicantAddress.country'],[])} validate="required,alphabetsOnly" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantAddress.country'/>
                                    <input type="text" name="applicantAddress.pinCode" placeholder="PinCode" value= { applicationForm.applicantAddress && applicationForm.applicantAddress.pinCode } onChange= { this.handleChange } className={decorateInputClass(this.state.fieldErrors['applicantAddress.pinCode'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantAddress.pinCode'/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Nationality of Applicant
                                    {/* <select name="applicantNationality" value={ applicationForm.applicantNationality } onChange={ this.handleChange } >
                                        { !applicationForm.applicantNationality && <option default key="-1" value="-1">Select</option> }
                                        { nationalityOptions }
                                    </select> */}
                                    <input type="text" name="applicantNationality"  placeholder="Applicant Nationality" value= { applicationForm.applicantNationality } onChange= { this.handleChange } className={decorateInputClass(this.state.fieldErrors['applicantNationality'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='applicantNationality'/>
                                 </label>
                            </div>
                            {/* <div className="large-12 cell">
                                <label>Category
                                    <select name="applicantCategory" ref="applicantCategory" value= { applicationForm.applicantCategory } disabled>{ categoryOptions }</select>
                                </label>
                            </div> */}
                            <DroneAcquisitionDroneTypeDetailsForm name="droneDetails"
                                application = { applicationForm }
                                nationalityOptions = { this.props.nationalityOptions }
                                updateDroneDetails= { this.updateDroneDetails }
                                isReadOnly = { isReadOnly }
                                droneTypes = { droneTypes }
                                fieldErrors = { this.state.fieldErrors }
                                validateField =  { this.validateFieldValue }
                            />
                            <div className="large-12 cell">
                                <label>No of Drones
                                    <input type="number" name="noOfDrones" value= { (applicationForm && applicationForm.noOfDrones)} onChange = { this.handleChange } placeholder="Drone Count" min="1" className={decorateInputClass(this.state.fieldErrors['noOfDrones'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='noOfDrones'/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <FooterApplicationForm step= { step } saving= { saving } />
                </form>
            </div>  
        );
    }
}

export default DroneAcquisitionApplicationStep1;