import React from 'react';
import DroneDetails from './DroneDetails'

class  LocalDroneAcquisitionApplicationReview extends React.Component {
    render() {
        return (
        <div className="application-preview">
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
        </div>
        );
      }

}

export default LocalDroneAcquisitionApplication;