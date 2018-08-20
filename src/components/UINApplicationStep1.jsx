import React from 'react';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import UINOrganizationDocuments from './UINOrganizationDocuments';
import FooterApplicationForm from './FooterApplicationForm';
import FormErrors from './FormErrors';
import FieldError from './FieldError';

class UINApplicationStep1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.updateDroneDetails = this.updateDroneDetails.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            applicationForm: {},
            fieldErrors: {}
        };
    }

    componentWillReceiveProps(nextProps){
        const { errors } = nextProps;
        const {submitted } = this.state;
        this.setState({
            formErrors: []
        });
        if (submitted && ( !errors || errors.length === 0)  &&  (nextProps.applicationForm.id !== 0)){
            this.props.nextStep();
        }
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        } 
    }

    handleChange(event) {
        const { name, value, type } = event.target;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { applicationForm } = this.state;
            this.updateObjProp(applicationForm, value, name);
            this.setState({applicationForm: applicationForm});
        }
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
        if(this.state.importPermissionDoc !== undefined) {
            formData.append("importPermissionDoc", this.state.importPermissionDoc);
        }
         if(this.state.panCardDoc !== undefined) {
            formData.append("panCardDoc", this.state.panCardDoc);
        }
        if(this.state.securityClearanceDoc !== undefined) {
            formData.append("securityClearanceDoc", this.state.securityClearanceDoc);
        }
        if(this.state.dotPermissionDoc !== undefined) {
            formData.append("dotPermissionDoc", this.state.dotPermissionDoc);
        }
        if(this.state.etaDoc !== undefined) {
            formData.append("etaDoc", this.state.etaDoc);
        }
        if(this.state.cinDoc !== undefined) {
            formData.append("cinDoc", this.state.cinDoc);
        }
        if(this.state.gstinDoc !== undefined) {
            formData.append("gstinDoc", this.state.gstinDoc);
        }
        
        this.updateDroneDetails();
        formData.append("uinApplication", JSON.stringify(this.state.applicationForm));

        if(this.props.applicationForm.id !== undefined ){
            this.props.updateApplication(formData, this.props.applicationForm.id);
        } else{
            this.props.createApplication(formData);
        }
    }

    updateDroneDetails() {
        const { droneTypes, operatorDroneId, selectedDroneTypeId } = this.props;
        const { applicationForm } = this.state;
        var selectedDroneTypes=  droneTypes.filter( droneType => droneType.id == selectedDroneTypeId );
        const selectedDroneType = selectedDroneTypes[0];

        var modifiedApplication = this.setDroneTypeDetailsInApplication(selectedDroneType, operatorDroneId, applicationForm);
        this.setState({applicationForm: modifiedApplication});
    }

    setDroneTypeDetailsInApplication(droneType,operatorDroneId, application) {
        application["droneTypeId"] = droneType.id;
        application["operatorDroneId"] = operatorDroneId;
        application["manufacturer"] = droneType.manufacturer;
        application["manufacturerAddress"] = {
            lineOne: droneType.manufacturerAddress ? droneType.manufacturerAddress.lineOne : "",
            lineTwo: droneType.manufacturerAddress ? droneType.manufacturerAddress.lineTwo : "",
            city: droneType.manufacturerAddress ? droneType.manufacturerAddress.city : "",
            state: droneType.manufacturerAddress ? droneType.manufacturerAddress.state : "",
            country: droneType.manufacturerAddress ? droneType.manufacturerAddress.country : "",
            pincode: droneType.manufacturerAddress ? droneType.manufacturerAddress.pincode : ""
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
        application["droneCategoryType"] = droneType.droneCategoryType;
        application["regionOfOperation"] = droneType.regionOfOperation;
        application["purposeOfOperation"] = droneType.purposeOfOperation;
        application["engineType"] = droneType.engineType;
        application["enginePower"] = droneType.enginePower;
        application["engineCount"] = droneType.engineCount;
        application["fuelCapacity"] = droneType.fuelCapacity;
        application["propellerDetails"] = droneType.propellerDetails;
        application["maxEndurance"] = droneType.maxEndurance;
        application["maxRange"] = droneType.maxRange;
        application["maxSpeed"] = droneType.maxSpeed;
        application["maxHeightOfOperation"] = droneType.maxHeightOfOperation;
        application["hasGNSS"] = droneType.hasGNSS;
        application["dimensions"] = {
            length : droneType.dimensions ? droneType.dimensions.length : 0,
            breadth : droneType.dimensions? droneType.dimensions.breadth : 0,
            height: droneType.dimensions ? droneType.dimensions.height : 0
        }
        application["hasAutonomousFlightTerminationSystem"] = droneType.hasAutonomousFlightTerminationSystem;
        application["hasFlashingAntiCollisionStrobeLights"] = droneType.hasFlashingAntiCollisionStrobeLights;
        application["hasRFID_GSM_SIMCard"] = droneType.hasRFID_GSM_SIMCard;
        application["hasFlightController"] = droneType.hasFlightController;

        return application;
    }
    
    render() {
      
        const { saving,  applicationForm, step, errors} = this.props;

        const {  importPermissionDoc, panCardDoc, securityClearanceDoc, dotPermissionDoc, etaDoc, cinDoc, gstinDoc } = this.state;

        return (
            <div>
                <FormErrors errors = {errors}/>
                <form name="uinApplicationForm" onSubmit={ this.handleSaveApplication }>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of import permission / filled proforma for information of local acquisition
                                        <span>{ (importPermissionDoc && importPermissionDoc.name) || applicationForm.importPermissionDocName }</span>
                                    </label>
                                    <label htmlFor="importPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="importPermissionDoc" name="importPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <UINOrganizationDocuments applicationForm = { applicationForm } onChange= { this.handleChange } cinDoc = { cinDoc} gstinDoc = { gstinDoc } />
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of PanCard 
                                        <span>{ (panCardDoc && panCardDoc.name) || applicationForm.panCardDocName }</span>
                                    </label>
                                    <label htmlFor="panCardDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="panCardDoc" name="panCardDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of security clearance from MHA or self-attested copies of at least two out of three valid identity proofs viz. Passport, Driving License or Aadhar Card (in case of individual/Indian remote pilot
                                        <span>{ (securityClearanceDoc && securityClearanceDoc.name) || applicationForm.securityClearanceDocName }</span>
                                    </label>
                                    <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of Permission/ license from WPC Wing, Department of Telecommunication for usage of licensed frequencies used in RPA. (as applicable)
                                        <span>{ (dotPermissionDoc && dotPermissionDoc.name) ||  applicationForm.dotPermissionDocName}</span>
                                    </label>
                                    <label htmlFor="dotPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="dotPermissionDoc" name="dotPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of ETA from WPC Wing, Department of Telecommunication for RPA operating in de-licensed frequency band(s) (as applicable)
                                        <span>{ (etaDoc && etaDoc.name) || applicationForm.etaDocName }</span>
                                    </label>
                                    <label htmlFor="etaDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="etaDoc" name="etaDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <label className="help-wrap">Details of fees paid </label>
                                <input type="text" name="feeDetails" placeholder="Details of Fees" value= { applicationForm.feeDetails } onChange={ this.handleChange } maxLength="100" className={decorateInputClass(this.state.fieldErrors['feeDetails'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                <FieldError fieldErrors={this.state.fieldErrors} field='feeDetails'/>
                            </div>
                        </div>
                    </div>
                    <FooterApplicationForm step= { step } saving= { saving }   />
                </form>
            </div>  
        );
    }
}

export default UINApplicationStep1;