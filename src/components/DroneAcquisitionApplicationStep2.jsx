import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';
import FieldError from '../components/FieldError';

class DroneAcquisitionApplicationStep2 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        const { errors } = nextProps;
        const { submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (nextProps.applicationForm.id !== 0)){
            this.props.nextStep();
        }
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        }
    }

    handleChange(event) {
        const { name, type } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const { applicationForm } = this.props;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
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
    
    downloadDocument(documentName) {
        this.props.downloadDocument(documentName)
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
            formData.append("securityClearanceDoc", this.state.securityClearanceDoc);
            formData.append("droneAcquisitionForm", applicationString) ;
            this.props.updateApplication(formData, this.props.applicationForm.id )
        }
    }
    
    render() {
    
        const modeOfAcquisitionOptions = this.props.modeOfAcquisitionOptions.map(mode => {
            return (<option value={mode} key={mode}> {mode} </option>);
        });
        const { saving, applicationForm, previousStep, step, applicationType} = this.props;
        const { securityClearanceDoc } = this.state;
        const aquisitionDisplay = applicationType === "importDrone" ? "Mode of import" : "Mode of acquisition";
        
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label className="checkbox">Is New
                                    <input type="checkbox" name="isNew" checked = { applicationForm? applicationForm.isNew : true } onChange = { this.handleChange } />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="large-12 cell">
                            <label>{ aquisitionDisplay }
                                    <select name="acquisitionMode" value = { applicationForm.acquisitionMode } onChange= { this.handleChange } >
                                    { modeOfAcquisitionOptions }
                                    </select>
                                    <FieldError fieldErrors={this.state.fieldErrors} field='acquisitionMode'/>
                            </label>
                            </div>
                                { applicationForm.acquisitionMode === "LEASE"  &&
                                    (<div className="large-12 cell">
                                        <div className="large-12 cell">
                                            <label>Name of Owner
                                            <input type="text" value={ applicationForm? applicationForm.owner : undefined }  name="owner" placeholder="Full Name" ref="owner" onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['owner'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                            <FieldError fieldErrors={this.state.fieldErrors} field='owner'/>
                                            </label>
                                        </div>
                                        <div className="large-12 cell">
                                            <label>Address of Owner
                                                <input type="text" name="ownerAddress.lineOne"  placeholder="Address Line1" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineOne : undefined} onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['ownerAddress.lineOne'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                                <FieldError fieldErrors={this.state.fieldErrors} field='ownerAddress.lineOne'/>
                                                <input type="text" name="ownerAddress.lineTwo" placeholder=" Address Line2" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineTwo : undefined} onChange={this.handleChange} />
                                                <input type="text" name="ownerAddress.city"  placeholder="City" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.city : undefined} onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['ownerAddress.city'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                                <FieldError fieldErrors={this.state.fieldErrors} field='ownerAddress.city'/>
                                                <input type="text" name="ownerAddress.state"  placeholder="State" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.state : undefined} onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['ownerAddress.state'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                                <FieldError fieldErrors={this.state.fieldErrors} field='ownerAddress.state'/>
                                                <input type="text" name="ownerAddress.country"  placeholder="Country" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.country : undefined} onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['ownerAddress.country'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                                <FieldError fieldErrors={this.state.fieldErrors} field='ownerAddress.country'/>
                                                <input type="text" name="ownerAddress.pinCode"  placeholder="Pincode" value={ applicationForm.ownerAddress? applicationForm.ownerAddress.pinCode : undefined} maxLength="8" onChange={this.handleChange} className={decorateInputClass(this.state.fieldErrors['ownerAddress.pinCode'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                                <FieldError fieldErrors={this.state.fieldErrors} field='ownerAddress.pinCode'/>
                                            </label>
                                        </div>
                                    </div>
                                    )
                                }
                            <div className="large-12 cell">
                                <label>Purpose of Operation
                                    <input type="text" name="purposeOfOperation" value={ applicationForm? applicationForm.purposeOfOperation : undefined } onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Proposed Base of Operation
                                    <input type="text" name="proposedBaseOfOperation" value={ applicationForm? applicationForm.proposedBaseOfOperation : undefined } onChange={this.handleChange} />
                                    <FieldError fieldErrors={this.state.fieldErrors} field='proposedBaseOfOperation'/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Security Clearance Document
                                            <p>{ (securityClearanceDoc && securityClearanceDoc.name) || applicationForm.securityClearanceDocName }</p>
                                        </label>
                                        <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={this.handleChange} accept=".pdf"/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='securityClearanceDoc'/>
                                 </div>
                                </div>
                            </div>
                        </div>
                    <FooterApplicationForm step= { step } saving= { saving } previousStep= { previousStep }/>
                </form>
            </div>  
        );
    }
}   

export default DroneAcquisitionApplicationStep2;