import React from 'react';

class LocalDroneAcquisitionApplicationStep2 extends React.Component {

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
                        <label>Mode ofAcquisition
                            <select name="modeOfAcquisition" ref="modeOfAcquisition" defaultValue>{ modeOfAcquisitionOptions }</select>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Name of Owner
                            <input type="text" defaultValue={ this.props.applicationForm? this.props.applicationForm.owner : undefined }  name="owner" placeholder="Full Name" ref="owner"/>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Address of Owner
                            <input type="text" name="ownerAddressLine1" ref="ownerAddressLine1" placeholder="Address Line1" defaultValue={ this.props.applicationForm.ownerAddress? this.props.applicationForm.ownerAddress.lineOne : undefined} />
                            <input type="text" name="ownerAddressLine2" ref="ownerAddressLine2" placeholder=" Address Line2" defaultValue={ this.props.applicationForm.ownerAddress? this.props.applicationForm.ownerAddress.lineTwo : undefined}/>
                            <input type="text" name="ownerAddressCity" ref="ownerAddressCity" placeholder="City" defaultValue={ this.props.applicationForm.ownerAddress? this.props.applicationForm.ownerAddress.city : undefined}/>
                            <input type="text" name="ownerAddressState" ref="ownerAddressState" placeholder="State" defaultValue={ this.props.applicationForm.ownerAddress? this.props.applicationForm.ownerAddress.state : undefined}/>
                            <input type="text" name="ownerAddressCountry" ref="ownerAddressCountry" placeholder="Country" defaultValue={ this.props.applicationForm.country? this.props.applicationForm.ownerAddress.country : undefined}/>
                            <input type="text" name="ownerAddressPincode" ref="ownerAddressPincode" placeholder="Pincode" defaultValue={ this.props.applicationForm.pincode? this.props.applicationForm.ownerAddress.pincode : undefined}/>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Purpose of Operation of RPA
                            <input type="text" name="purpose" ref="purpose" defaultValue={ this.props.applicationForm? this.props.applicationForm.purposeOfOperation : undefined }/>
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <label>Proposed Base of Operation
                            <input type="text" name="baseOfOperation" ref="baseOfOperation" defaultValue={ this.props.applicationForm? this.props.applicationForm.proposedBaseOfOperation : undefined } />
                        </label>
                    </div>
                    <div className="large-12 cell">
                        <div className="help-wrap">
                            <label>Upload <br/>Security Clearance Document</label>
                             <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                <input type="file" name="securityClearanceDoc" ref="securityClearanceDoc" />
                        </div>
                    </div>
                    {/* <div className="large-12 cell">
                        <label>Copy of ETA Clearance
                            <input type="file" name="etaClearanceDoc" ref="etaClearanceDoc" />
                        </label>
                    </div> */}
                </div>
            </div>
        );
    }
}   

export default LocalDroneAcquisitionApplicationStep2;