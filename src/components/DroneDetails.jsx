import React from 'react';

class DroneDetails extends React.Component {
  
    dateChange = (event)=> {
        this.refs.yearOfManufacture.value = new Date(event.target.value).getFullYear();
    }
    
    render(){
                
        let nationalityOptions = this.props.nationalityOptions.map(nationality => {
                return (<option value={ nationality } key={ nationality }> { nationality } </option>)
        });

        var droneDetails = this.props.details;

        return(
            <div>
                <div className="large-12 cell">
                    <label>Name of Manufacturer
                        <input type="text" name="nameOfManufacturer" ref="nameOfManufacturer" defaultValue={ droneDetails? droneDetails.manufacturer : undefined}/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Address of Manufacturer
                        <input type="text" name="manufacturerAddressLine1" ref="manufacturerAddressLine1"  placeholder="Address line 1" defaultValue={ droneDetails && droneDetails.manufacturerAddress ? droneDetails.manufacturerAddress.line1 : undefined }/>
                        <input type="text" name="manufacturerAddressLine2" ref="manufacturerAddressLine2" placeholder="Address line 2" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.line2 : undefined} />
                        <input type="text" name="manufacturerAddressCity"  ref="manufacturerAddressCity" placeholder="City" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.city : undefined }/>
                        <input type="text" name="manufacturerAddressState" ref="manufacturerAddressState" placeholder="State" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.state : undefined }/>
                        <input type="text" name="manufacturerAddressCountry" ref="manufacturerAddressCountry" placeholder="Country" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.country : undefined }/>
                        <input type="text" name="manufacturerAddressPincode" ref="manufacturerAddressPincode" placeholder="Pincode" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.pincode : undefined }/>
                    </label>
                </div>
                `<div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        <select name="nationalityOfManufacturer" ref="nationalityOfManufacturer"   defaultValue= { droneDetails && droneDetails.manufacturerNationality?  droneDetails.manufacturerNationality: this.props.nationalityOptions[0] }>
                            { nationalityOptions }
                        </select>
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model No.
                        <input type="text" name="modelNo" ref="modelNo" defaultValue= { droneDetails? droneDetails.modelNo : undefined}/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Serial No.
                        <input type="text" name="serialNo" ref="serialNo" defaultValue= { droneDetails? droneDetails.serialNo : undefined} />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Date of Manufacture
                        <input type="date" name="dateOfManufacture" ref="dateOfManufacture" defaultValue= { droneDetails? droneDetails.dateOfManufacture : undefined} onChange = { this.dateChange } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Year of Manufacture
                        <input type="text" name="yearOfManufacture" ref="yearOfManufacture" defaultValue= { droneDetails? droneDetails.yearOfManufacture : undefined} readOnly/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <fieldset>
                        <label>Wing type <br/>
                            <input type="radio" name="wingType" value="Fixed" ref="wingType" />
                            <label htmlFor="Fixed">Fixed</label><br/>
                            <input type="radio" name="wingType" value="Rotary" ref="wingType" />
                            <label htmlFor="Rotary">Rotary</label>
                        </label>
                    </fieldset>
                </div>
                <div className="large-12 cell">
                    <label className="checkbox">Is New
                        <input type="checkbox" defaultChecked name="isNew" ref="isNew" checked = {droneDetails && droneDetails.isNew}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight
                        <input type="number" name="maxTakeOffWeight" min="5.0" placeholder="Weight in gms" ref="maxTakeOffWeight" defaultValue = { droneDetails && droneDetails.maxTakeOffWeight ? droneDetails.maxTakeOffWeight: undefined}/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable
                        <input type="number" name="maxHeight" min="10" placeholder="Height in ms" ref="maxHeight" defaultValue= { droneDetails && droneDetails.maxHeightAttainable ? droneDetails.maxHeightAttainable: undefined }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Payload DroneDetails
                        <textarea name="payload" rows="2" ref="payload" defaultValue= { droneDetails && droneDetails.payloadDetails ? droneDetails.payloadDetails : undefined}/>
                    </label>
                </div>`
            </div>
        );
    }
}

export default DroneDetails;