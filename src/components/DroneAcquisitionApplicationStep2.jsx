import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';

class DroneAcquisitionApplicationStep2 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[]
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
        const { name, value, type } = event.target;
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
        this.setState({submitted: true});
        
        var applicationString = JSON.stringify(this.state.applicationForm);

        if( this.props.applicationForm.id ) {
            var formData = new FormData();
            formData.append("securityClearanceDoc", this.state.securityClearanceDoc);
            formData.append("droneAcquisitionForm", applicationString) ;
            console.log(formData);
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
                            <label>{ aquisitionDisplay }
                                    <select name="acquisitionMode" ref="acquisitionMode" value = { applicationForm.acquisitionMode } onChange= { this.handleChange }>
                                    { modeOfAcquisitionOptions }
                                    </select>
                            </label>
                            </div>
                                { (applicationForm.acquisitionMode === "LEASE"  || applicationForm.acquisitionMode === null) ?
                                    (<div className="large-12 cell">
                                        <div className="large-12 cell">
                                            <label>Name of Owner
                                            <input type="text" defaultValue={ applicationForm? applicationForm.owner : undefined }  name="owner" placeholder="Full Name" ref="owner" onChange={this.handleChange}/>
                                            </label>
                                        </div>
                                        <div className="large-12 cell">
                                            <label>Address of Owner
                                                <input type="text" name="ownerAddressLine1" ref="ownerAddressLine1" placeholder="Address Line1" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineOne : undefined} onChange={this.handleChange} />
                                                <input type="text" name="ownerAddressLine2" ref="ownerAddressLine2" placeholder=" Address Line2" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineTwo : undefined} onChange={this.handleChange} />
                                                <input type="text" name="ownerAddressCity" ref="ownerAddressCity" placeholder="City" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.city : undefined} onChange={this.handleChange}/>
                                                <input type="text" name="ownerAddressState" ref="ownerAddressState" placeholder="State" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.state : undefined} onChange={this.handleChange} />
                                                <input type="text" name="ownerAddressCountry" ref="ownerAddressCountry" placeholder="Country" defaultValue={ applicationForm.country? applicationForm.ownerAddress.country : undefined} onChange={this.handleChange} />
                                                <input type="text" name="ownerAddressPincode" ref="ownerAddressPincode" placeholder="Pincode" defaultValue={ applicationForm.pincode? applicationForm.ownerAddress.pincode : undefined} onChange={this.handleChange} />
                                            </label>
                                        </div>
                                    </div>) : <div></div>
                                }
                            <div className="large-12 cell">
                                <label>Purpose of Operation of RPA
                                    <input type="text" name="purposeOfOperation" defaultValue={ applicationForm? applicationForm.purposeOfOperation : undefined } onChange={this.handleChange}/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Proposed Base of Operation
                                    <input type="text" name="proposedBaseOfOperation" defaultValue={ applicationForm? applicationForm.proposedBaseOfOperation : undefined } onChange={this.handleChange}/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Security Clearance Document
                                            <span>{ (securityClearanceDoc && securityClearanceDoc.name) || applicationForm.securityClearanceDocName }</span>
                                        </label>
                                        <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="securityClearanceDoc" ref="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={this.handleChange}/>
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