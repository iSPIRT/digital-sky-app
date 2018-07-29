import React from 'react';

class DroneDetails extends React.Component {
  
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    // dateChange = (event)=> {
    //     this.refs.yearOfManufacture.value = new Date(event.target.value).getFullYear();
    //     this.handleChange(event);
    // }
    
    handleChange(event) {

        if(this.props.onChange) {
            this.props.onChange(event);
        }
    }
    
    render(){
                
        const wingTypes = ["Fixed", "Rotary"]
        
        const { nationalityOptions} = this.props;
        
        let nationalitySelectOptions = nationalityOptions.map(nationality => {
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
                        <input type="text" name="manufacturer"  defaultValue={ droneDetails && droneDetails.manufacturer } onChange = { this.handleChange }/>
                    </label>
                </div>
                {/* <div className="large-12 cell">
                    <label>Address of Manufacturer
                        <input type="text" name="manufacturerAddress.lineOne" placeholder="Address line 1" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.lineOne } onChange = { this.handleChange }/>
                        <input type="text" name="manufacturerAddress.lineTwo" placeholder="Address line 2" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.lineTwo } onChange = { this.handleChange }/>
                        <input type="text" name="manufacturerAddress.city"  placeholder="City" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.city } onChange = { this.handleChange }/>
                        <input type="text" name="manufacturerAddress.state" placeholder="State" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.state } onChange = { this.handleChange }/>
                        <input type="text" name="manufacturerAddress.country"  placeholder="Country" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.country } onChange = { this.handleChange }/>
                        <input type="text" name="manufacturerAddress.pincode" placeholder="Pincode" defaultValue={ droneDetails && droneDetails.manufacturerAddress && droneDetails.manufacturerAddress.pincode } onChange = { this.handleChange }/>
                    </label>
                </div> */}
                <div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        <select name="manufacturerNationality"  defaultValue= { droneDetails.manufacturerNationality } onChange = { this.handleChange }>
                            { nationalitySelectOptions }
                        </select>
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model No.
                        <input type="text" name="modelNo"  defaultValue= { droneDetails && droneDetails.modelNo } onChange = { this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Serial No.
                        <input type="text" name="serialNo" defaultValue= { droneDetails && droneDetails.serialNo} onChange = { this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Date of Manufacture
                        <input type="date" name="dateOfManufacture" defaultValue= { droneDetails && droneDetails.dateOfManufacture } onChange = { this.handleChange } />
                    </label>
                </div>
                {/* <div className="large-12 cell">
                    <label>Year of Manufacture
                        <input type="text" name="yearOfManufacture" defaultValue= { droneDetails && droneDetails.yearOfManufacture } readOnly/>
                    </label>
                </div> */}
                <div className="large-12 cell">
                    <label>Wing type <br/>
                        <select name="wingType" value= { droneDetails.wingType } onChange = { this.handleChange }>
                            { wingTypeOptions }
                        </select>   
                    </label>
                </div>
                <div className="large-12 cell">
                    <label className="checkbox">Is New
                        <input type="checkbox" name="isNew" checked = { droneDetails && droneDetails.isNew } onChange = { this.handleChange }/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight (including Payload) in kgs
                        <input type="number" name="maxTakeOffWeight"  placeholder="Weight in kgs" defaultValue = { droneDetails && droneDetails.maxTakeOffWeight !==0 && droneDetails.maxTakeOffWeight} onChange = { this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable (in meters)
                        <input type="number" name="maxHeightAttainable" placeholder="Height in ms" defaultValue= { droneDetails && droneDetails.maxHeightAttainable!== 0 && droneDetails.maxHeightAttainable} onChange = { this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Details of compatible payload
                        <textarea name="payloadDetails" rows="2" defaultValue= { droneDetails && droneDetails.payloadDetails} onChange = { this.handleChange }/>
                    </label>
                </div>
            </div>
        );
    }
}

export default DroneDetails;