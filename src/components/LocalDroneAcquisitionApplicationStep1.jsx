import React from 'react';
import DroneDetails from './DroneDetails';

class LocalDroneAcquisitionApplicationStep1 extends React.Component {

    constructor() {
        super();
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

        return (
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        <label>Name of Applicant
                            <input type="text" name="nameOfApplicant" ref="nameOfApplicant" placeholder="Full Name" defaultValue= { this.props.applicationForm.applicant }/>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Address of Applicant
                            <input type="text" name="applicantAddressLine1" ref="applicantAddressLine1"  placeholder="Address Line1" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.lineOne : undefined}/>
                            <input type="text" name="applicantAddressLine2" ref="applicantAddressLine2" placeholder=" Address Line2" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.lineTwo : undefined}/>
                            <input type="text" name="applicantAddressCity" ref="applicantAddressCity" placeholder="City" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.city : undefined }/>
                            <input type="text" name="applicantAddressState" ref="applicantAddressState" placeholder="State" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.state : undefined }/>
                            <input type="text" name="applicantAddressCountry" ref="applicantAddressCountry" placeholder="Country" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.country : undefined}/>
                            <input type="text" name="applicantAddressPincode" ref="applicantAddressPincode" placeholder="Pincode" defaultValue= { this.props.applicationForm.applicantAddress? this.props.applicationForm.applicantAddress.pincode : undefined} />
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Nationality
                            <select name="applicantNationality" ref="applicantNationality" defaultValue= { this.props.applicationForm.applicantNationality }>
                                { nationalityOptions }
                            </select>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Category
                            <select name="applicantCategory" ref="applicantCategory" defaultValue= { this.props.applicationForm.applicantCategory } disabled>{ categoryOptions }</select>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <DroneDetails name="droneDetails" ref="droneDetails" nationalityOptions={ this.props.nationalityOptions } details = { this.props.applicationForm }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocalDroneAcquisitionApplicationStep1;