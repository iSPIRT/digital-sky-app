import React from 'react';

class DroneDetails extends React.Component {
  
    dateChange = (event)=> {
        this.refs.yearOfManufacture.value = new Date(event.target.value).getFullYear();
    }
    
    render(){
                
        const wingTypes = ["Fixed", "Rotary"]
        
        let nationalityOptions = this.props.nationalityOptions.map(nationality => {
                return (<option value={ nationality } key={ nationality }> { nationality } </option>)
        });

        let wingTypeOptions = wingTypes.map(wingType => {
            return (<option value={ wingType } key={ wingType }> { wingType } </option>)
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
                        <input type="text" name="manufacturerAddressLine1" ref="manufacturerAddressLine1"  placeholder="Address line 1" defaultValue={ droneDetails && droneDetails.manufacturerAddress ? droneDetails.manufacturerAddress.lineOne : undefined }/>
                        <input type="text" name="manufacturerAddressLine2" ref="manufacturerAddressLine2" placeholder="Address line 2" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.lineTwo : undefined} />
                        <input type="text" name="manufacturerAddressCity"  ref="manufacturerAddressCity" placeholder="City" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.city : undefined }/>
                        <input type="text" name="manufacturerAddressState" ref="manufacturerAddressState" placeholder="State" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.state : undefined }/>
                        <input type="text" name="manufacturerAddressCountry" ref="manufacturerAddressCountry" placeholder="Country" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.country : undefined }/>
                        <input type="text" name="manufacturerAddressPincode" ref="manufacturerAddressPincode" placeholder="Pincode" defaultValue={ droneDetails && droneDetails.manufacturerAddress? droneDetails.manufacturerAddress.pincode : undefined }/>
                    </label>
                </div>
                `<div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        <select name="manufacturerNationality" ref="manufacturerNationality"   value= { droneDetails.manufacturerNationality } onChange = { this.props.onChange }>
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
                    <label>Wing type <br/>
                        <select name="wingType" ref="wingType"   value= { droneDetails.wingType } onChange = { this.props.onChange }>
                            { wingTypeOptions }
                        </select>   
                    </label>
                </div>
                <div className="large-12 cell">
                    <label className="checkbox">Is New
                        <input type="checkbox" ref="isNew" name="isNew" checked = { droneDetails && droneDetails.isNew } onChange={ this.props.onChange }/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight (including Payload) 
                        <input type="number" name="maxTakeOffWeight" min="5.0" placeholder="Weight in gms" ref="maxTakeOffWeight" defaultValue = { droneDetails && droneDetails.maxTakeOffWeight ? droneDetails.maxTakeOffWeight: undefined}/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable
                        <input type="number" name="maxHeight" min="10" placeholder="Height in ms" ref="maxHeight" defaultValue= { droneDetails && droneDetails.maxHeightAttainable ? droneDetails.maxHeightAttainable: undefined }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Details of compatible payload
                        <textarea name="payload" rows="2" ref="payload" defaultValue= { droneDetails && droneDetails.payloadDetails ? droneDetails.payloadDetails : undefined}/>
                    </label>
                </div>`
            </div>
        );
    }
}

export default DroneDetails;