import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FormErrors from './FormErrors';

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
        this.getFile =  this.getFile.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { applicationForm } = this.props;
        this.updateObjProp(applicationForm, value, name);
        this.setState({applicationForm: applicationForm});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }
    
    handleSubmit(event) {
        var applicationFormRefs = this.refs;
        var isLease = applicationFormRefs.acquisitionMode ==="LEASE" ;
        var acquisitionApplication= {...this.props.applicationForm,
            purposeOfOperation: applicationFormRefs.purpose.value,
            proposedBaseOfOperation: applicationFormRefs.baseOfOperation.value,
            acquisitionMode: applicationFormRefs.acquisitionMode.value,
            owner: isLease ? applicationFormRefs.owner.value : "",
            ownerAddress: isLease ? {  
                lineOne: applicationFormRefs.ownerAddressLine1.value,
                lineTwo:  applicationFormRefs.ownerAddressLine2.value,
                city: applicationFormRefs.ownerAddressCity.value,
                state: applicationFormRefs.ownerAddressState.value,
                country: applicationFormRefs.ownerAddressCountry.value,
                pincode: applicationFormRefs.ownerAddressPincode.value
            } : {},
            securityClearanceDoc: applicationFormRefs.securityClearanceDoc.value,
            status: "DRAFT",
        };

        event.preventDefault();

        var formData = new FormData();
        formData.append("securityClearanceDoc", applicationFormRefs.securityClearanceDoc.files[0], "securityClearanceDoc");
        formData.append("droneAcquisitionForm", JSON.stringify(acquisitionApplication)) ;
        this.props.updateForm(formData, this.props.applicationForm.id )
    }

    getFile() {
        this.props.getFile(this.props.applicationForm.id);
    }
    
    render() {
    
        const modeOfAcquisitionOptions = this.props.modeOfAcquisitionOptions.map(mode => {
            return (<option value={mode} key={mode}> {mode} </option>);
        });

        const { saving, saved, errors, applicationForm, goBack,applicationType} = this.props;
        const { formErrors, submitted } = this.state;
        var url = "https://localhost:9443/api/applicationForm/"+applicationType+"/getFile/";
        if(applicationForm.id) {
            url += applicationForm.id +"/securityClearanceDoc";
        }

        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>{ this.props.applicationType === "Importing Drones" ? "Mode of acquisition" : "Mode of import"}
                                    <select name="acquisitionMode" ref="acquisitionMode" value = { applicationForm.acquisitionMode } onChange= { this.handleChange }>
                                    { modeOfAcquisitionOptions }
                                    </select>
                                </label>
                            </div>
                                { (applicationForm.acquisitionMode === "LEASE"  || applicationForm.acquisitionMode) === null ?
                                    (<div className="large-12 cell">
                                        <div className="large-12 cell">
                                            <label>Name of Owner
                                            <input type="text" defaultValue={ applicationForm? applicationForm.owner : undefined }  name="owner" placeholder="Full Name" ref="owner"/>
                                            </label>
                                        </div>
                                        <div className="large-12 cell">
                                            <label>Address of Owner
                                                <input type="text" name="ownerAddressLine1" ref="ownerAddressLine1" placeholder="Address Line1" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineOne : undefined} />
                                                <input type="text" name="ownerAddressLine2" ref="ownerAddressLine2" placeholder=" Address Line2" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.lineTwo : undefined}/>
                                                <input type="text" name="ownerAddressCity" ref="ownerAddressCity" placeholder="City" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.city : undefined}/>
                                                <input type="text" name="ownerAddressState" ref="ownerAddressState" placeholder="State" defaultValue={ applicationForm.ownerAddress? applicationForm.ownerAddress.state : undefined}/>
                                                <input type="text" name="ownerAddressCountry" ref="ownerAddressCountry" placeholder="Country" defaultValue={ applicationForm.country? applicationForm.ownerAddress.country : undefined}/>
                                                <input type="text" name="ownerAddressPincode" ref="ownerAddressPincode" placeholder="Pincode" defaultValue={ applicationForm.pincode? applicationForm.ownerAddress.pincode : undefined}/>
                                            </label>
                                        </div>
                                    </div>) : <div></div>
                                }
                            <div className="large-12 cell">
                                <label>Purpose of Operation of RPA
                                    <input type="text" name="purpose" ref="purpose" defaultValue={ applicationForm? applicationForm.purposeOfOperation : undefined }/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Proposed Base of Operation
                                    <input type="text" name="baseOfOperation" ref="baseOfOperation" defaultValue={ applicationForm? applicationForm.proposedBaseOfOperation : undefined } />
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Upload <br/>Security Clearance Document</label>
                                    <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" name="securityClearanceDoc" ref="securityClearanceDoc" />
                                        <span> 
                                            { applicationForm  && applicationForm.securityClearanceDoc !="" &&  applicationForm.securityClearanceDoc != null ?
                                                <div>
                                                    <p> <a href = { url }  download  target="_blank"> Security Clearance Document </a> </p>
                                                </div> :
                                                <div> </div>
                                            }
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterApplicationForm step= { this.props.step } saving= { saving } goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}   

export default DroneAcquisitionApplicationStep2;