import React from 'react';

class DroneAcquisitionDroneTypeDetailsForm extends React.Component {
  
    constructor(props) {
        super(props);
        this.updateDroneDetails = this.updateDroneDetails.bind(this);
        this.onChangeOfDroneType = this.onChangeOfDroneType.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedDroneType : {}
        }
        this.selDroneType = {};
    }
    
    onChangeOfDroneType(event) {
        if(event.target.value !=-1) {
            var newlySelectedDroneTypes = this.props.droneTypes.filter( drone => event.target.value == drone.id );
            this.setState({selectedDroneType: newlySelectedDroneTypes[0]});
            this.updateDroneDetails(newlySelectedDroneTypes[0]);
        }
    }

    handleChange(event) {
        if(this.props.onChange) {
            this.props.onChange(event);
        }
    }

    // dateChange = (event)=> {
    //     this.refs.yearOfManufacture.value = new Date(event.target.value).getFullYear();
    //     this.handleChange(event);
    // }
    
    updateDroneDetails(droneDetails) {
        if(this.props.updateDroneDetails) {
            this.props.updateDroneDetails(droneDetails);
        }
    }
    
    render(){
        const wingTypes = ["Fixed", "Rotary"];
      
        const { nationalityOptions, droneTypes, isReadOnly, application, droneTypeDisabled, selectedDroneTypeId } = this.props;

        let nationalitySelectOptions = nationalityOptions.map(nationality => {
            return (<option value={ nationality } key={ nationality }> { nationality } </option>)
        });

        let wingTypeOptions = wingTypes.map(wingType => {
            return (<option value={ wingType } key={ wingType }> { wingType } </option>)
        });

        let droneTypeOptions = droneTypes.map(droneType => {   
            return (<option value={ droneType.id } key={ droneType.id }> { droneType.modelName } </option>)
        });
        
        var selectedDroneType;
        //selected by user
        if(this.state.selectedDroneType && this.state.selectedDroneType.id) {
            selectedDroneType = this.state.selectedDroneType;
        }// an existing created form
        else if(application && application.droneTypeId){   
            var selectedDroneTypes=  droneTypes.filter( droneType => droneType.id == application.droneTypeId );
            selectedDroneType = selectedDroneTypes[0];
        } //new UIN form with droneType id coming from operatorDrone
        else if(selectedDroneTypeId) {
            var selectedDroneTypes =  droneTypes.filter( droneType => droneType.id == selectedDroneTypeId);
            selectedDroneType = selectedDroneTypes[0];
        }
        return(
            <div>
                 { isReadOnly && <div className="large-12 cell">
                        <label>Drone Type
                        <select name="droneType" onChange = { this.onChangeOfDroneType } 
                                value = { selectedDroneType && selectedDroneType.id } 
                                disabled={ droneTypeDisabled }>
                                { (!selectedDroneType || !selectedDroneType.modelName) && <option default key="-1" value="-1">Select</option> }
                                { droneTypeOptions }
                        </select>
                        </label>
                    </div>
                 }
                <div className="large-12 cell">
                    <label>Name of Manufacturer
                        <input type="text" name="manufacturer"  value={ selectedDroneType && selectedDroneType.manufacturer } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
               <div className="large-12 cell">
                    <label>Address of Manufacturer
                        <input type="text" name="manufacturerAddress.lineOne" placeholder="Address line 1" value ={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.lineOne } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.lineTwo" placeholder="Address line 2" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.lineTwo } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.city"  placeholder="City" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.city } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.state" placeholder="State" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.state } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.country"  placeholder="Country" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.country } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.pinCode" placeholder="Pincode" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.pinCode } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div> 
                <div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        {/* <select name="manufacturerNationality"  value= { selectedDroneType && selectedDroneType.manufacturerNationality } onChange = { this.handleChange }  disabled = { isReadOnly }>
                            { (!selectedDroneType || !selectedDroneType.manufacturerNationality) && <option default key="-1" value="-1"> </option> }
                            { nationalitySelectOptions }
                        </select> */}
                        <input type="text" name="manufacturerNationality" placeholder="Manufacturer Nationality" value ={ selectedDroneType && selectedDroneType.manufacturerNationality } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model Name
                        <input type="text" name="modelName"  value= { selectedDroneType && selectedDroneType.modelName } onChange = { this.handleChange } readOnly = { isReadOnly }/>   
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model No.
                        <input type="text" name="modelNo"  value= { selectedDroneType && selectedDroneType.modelNo } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Serial No.
                        <input type="text" name="serialNo" value= { selectedDroneType && selectedDroneType.serialNo} onChange = { this.handleChange } readOnly = { isReadOnly } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Date of Manufacture
                        <input type="text" placeholder="DD-MM-YYYY" name="dateOfManufacture" value= { selectedDroneType && selectedDroneType.dateOfManufacture } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                {/* <div className="large-12 cell">
                    <label>Year of Manufacture
                        <input type="text" name="yearOfManufacture" defaultValue= { droneDetails && droneDetails.yearOfManufacture } readOnly/>
                    </label>
                </div> */}
                <div className="large-12 cell">
                    <label>Wing type <br/>
                        <select name="wingType" value= { selectedDroneType && selectedDroneType.wingType } onChange = { this.handleChange } disabled = { isReadOnly }>
                            { (!selectedDroneType || !selectedDroneType.wingType) && <option default key="-1" value="-1">Select</option> }
                            { wingTypeOptions }
                        </select>   
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight (including Payload) in kgs
                        <input type="number" name="maxTakeOffWeight"  placeholder="Weight in kgs" value = { selectedDroneType && selectedDroneType.maxTakeOffWeight !==0 && selectedDroneType.maxTakeOffWeight } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable (in meters)
                        <input type="number" name="maxHeightAttainable" placeholder="Height in ms" value= { selectedDroneType && selectedDroneType.maxHeightAttainable!== 0 && selectedDroneType.maxHeightAttainable } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Details of compatible payload
                        <textarea name="compatiblePayload" rows="2" value= { selectedDroneType && selectedDroneType.compatiblePayload } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
            </div>
        );
    }
}

export default DroneAcquisitionDroneTypeDetailsForm;