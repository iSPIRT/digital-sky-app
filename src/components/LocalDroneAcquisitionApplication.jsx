import React from 'react';
import DroneDetails from './DroneDetails'

class  LocalDroneAcquisitionApplication extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            saved: false,
            formErrors:[]
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({saved: false});
        this.setState({formErrors: []});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        const droneDetails = this.refs.droneDetails.refs;
        const acquisitionApplication = {
            applicant: this.refs.nameOfApplicant.value,
            submittedDate: Date.now(),
            lastModifiedDate: Date.now(),
            //applicantEmail: this.refs.email.value,
            //applicantAddress:
            //applicantPhone: this.
            applicantNationality: this.refs.applicantNationality.value,
            //applicantType: this.refs.applicantCategory.value,
            manufacturer: droneDetails.nameOfManufacturer.value,
            //manufacturerAddress:
            modelNo: droneDetails.modelNo.value,
            serialNo: droneDetails.serialNo.value,
            dateOfManufacture: droneDetails.dateOfManufacture.value,
            //yearOfManufacture: droneDetails.dateOfManufacture.value.getFullYear(),
            fixedWing: (droneDetails.wingType.value === "Fixed" ? true : false),
            isNew: droneDetails.isNew.checked,
            maxTakeOffWeight: droneDetails.maxTakeOffWeight.value,
            maxHeightAttainable: droneDetails.maxHeight.value,
            payloadDetails: droneDetails.payload.value,
            purposeOfOperation: this.refs.purpose.value,
            proposedBaseOfOperation: this.refs.baseOfOperation.value,
            acquisitionMode: this.refs.modeOfAcquisition.value,
            //securityClearanceDoc: this.refs.securityClearanceDoc.value,
            //etaClearanceDoc: this.refs.etaClearanceDoc.value
        };
        // const acquisitionApplication =  {
        //     submittedDate : "2018",
        //     applicant : "Archana",
        //     applicantType : "INDIVIDUAL",
        //     status : "DRAFT",
            // applicantAddress : { 
            //     lineOne : "House no:23",
            //     lineTwo :  "Some Apartment",
            //     city : "Bangalore", 
            //     country : "India" 
            // },
            // applicantEmail : "archana@someorganisation.com",
            // applicantPhone : "8898009090",
            // applicantNationality : "Indian",
            // manufacturer : "Some Drone Manufacturer",
            // modelNo : "xyz",
            // serialNo : "111",
            // dateOfManufacture : "2008-02-12",
            // yearOfManufacture : "2008",
            // fixedWing : "true",
            // new : "true",
            // maxTakeOffWeight: "100.0",
            // maxHeightAttainable : "500",
            // payloadDetails : "None",
            //acquisitionMode : "LEASE",
            // purposeOfOperation : "Educational",
            // proposedBaseOfOperation : "Haryana"
        // }
        this.props.createLocalDroneAcquisitionApplication(acquisitionApplication);
    }
    
    render() {
    const categoryOptions = this.props.categoryOptions.map(category => {
        return (<option value={category} key={category}> {category} </option>);
    });

    const modeOfAcquisitionOptions = this.props.modeOfAcquisitionOptions.map(mode => {
        return (<option value={mode} key={mode}> {mode} </option>);
    });

    const nationalityOptions = this.props.nationalityOptions.map(nationality => {
        return (<option value={nationality} key={nationality}> {nationality} </option>);
    });

    const { saving, errors} = this.props;
    const { formErrors } = this.state;

        return (
            <div className="page-form">
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                { formErrors && formErrors.length > 0 && <p>{formErrors.toString()}</p> }
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>Name of Applicant
                                    <input type="text" name="nameOfApplicant" ref="nameOfApplicant" placeholder="Full Name"/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Address of Applicant
                                    <input type="text" name="applicantAddressLine1" ref="applicantAddressLine1" placeholder="Address Line1"/>
                                    <input type="text" name="applicantAddressLine2" ref="applicantAddressLine2" placeholder=" Address Line2"/>
                                    <input type="text" name="applicantAddressCity" ref="applicantAddressCity" placeholder="City"/>
                                    <input type="text" name="applicantAddressState" ref="applicantAddressState" placeholder="State"/>
                                    <input type="text" name="applicantAddressCountry" ref="applicantAddressCountry" placeholder="Country"/>
                                    <input type="text" name="applicantAddressPincode" ref="applicantAddressPincode" placeholder="Pincode"/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Nationality
                                    <select name="applicantNationality" ref="applicantNationality">
                                        {nationalityOptions}
                                    </select>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Category
                                    <select name="applicantCategory" ref="applicantCategory" disabled>{categoryOptions}</select>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <DroneDetails name="droneDetails" ref="droneDetails" nationalityOptions={this.props.nationalityOptions} />
                            </div>
                            <div className="large-12 cell">
                                <label>Mode ofAcquisition
                                    <select name="modeOfAcquisition" ref="modeOfAcquisition">{modeOfAcquisitionOptions}</select>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Name of Owner
                                    <input type="text" name="nameOfOwner" ref="nameOfOwner" placeholder="Full Name"/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Address of Owner
                                    <input type="text" name="ownerAddressLine1" ref="ownerAddressLine1" placeholder="Address Line1"/>
                                    <input type="text" name="ownerAddressLine2" ref="ownerAddressLine2" placeholder=" Address Line2"/>
                                    <input type="text" name="ownerAddressCity" ref="ownerAddressState"  placeholder="City"/>
                                    <input type="text" name="ownerAddressState" ref="ownerAddressState" placeholder="State"/>
                                    <input type="text" name="ownerAddressCountry" ref="ownerAddressCountry" placeholder="Country"/>
                                    <input type="text" name="ownerAddressPincode" ref="ownerAddressPincode" placeholder="Pincode"/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Purpose of Operation of RPA
                                    <input type="text" name="purpose" ref="purpose" />
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Proposed Base of Operation
                                    <input type="text" name="baseOfOperation" ref="baseOfOperation" />
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Upload <br/>Security Clearance Document</label>
                                     {/* <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label> */}
                                    <input type="file" name="securityClearanceDoc" ref="securityClearanceDoc"  />
                                </div>
                            </div>
                            {/* <div className="large-12 cell">
                                <label>Copy of ETA Clearance
                                    <input type="file" name="etaClearanceDoc" ref="etaClearanceDoc" />
                                </label>
                            </div> */}
                            <div className="large-12 cell">
                                <button type="submit" className="button" name="button">Save &amp; Continue</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LocalDroneAcquisitionApplication;