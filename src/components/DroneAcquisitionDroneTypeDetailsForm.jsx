import React from 'react';

import { decorateInputClass } from '../helpers/formValidationHelpers';

import FieldError from './FieldError';

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
        if(event.target.value !== "-1") {
            var newlySelectedDroneTypes = this.props.droneTypes.filter( drone => event.target.value.toString() === drone.id.toString() );
            this.setState({selectedDroneType: newlySelectedDroneTypes[0]});
            this.updateDroneDetails(newlySelectedDroneTypes[0]);
        }
    }

    handleChange(event) {
        if(this.props.onChange) {
            this.props.onChange(event);
        }
    }

    updateDroneDetails(droneDetails) {
        if(this.props.updateDroneDetails) {
            this.props.updateDroneDetails(droneDetails);
        }
    }
    
    render(){
        const wingTypes = ["Fixed", "Rotary"];
        const {  droneTypes, isReadOnly, application, droneTypeDisabled, selectedDroneTypeId, fieldErrors } = this.props;

        const validateField = this.props.validateField ? this.props.validateField :  (e)=>{ return };

        let wingTypeOptions = wingTypes.map(wingType => {
            return (<option value={ wingType } key={ wingType }> { wingType } </option>)
        });

        let droneTypeOptions = droneTypes.map(droneType => {   
            return (<option value={ droneType.id } key={ droneType.id }> { droneType.modelName } </option>)
        });
        
        var selectedDroneTypes, selectedDroneType;
        //selected by user
        if(this.state.selectedDroneType && this.state.selectedDroneType.id) {
            selectedDroneType = this.state.selectedDroneType;
        }// an existing created form
        else if(application && application.droneTypeId){   
            selectedDroneTypes=  droneTypes.filter( droneType => droneType.id.toString() === application.droneTypeId.toString() );
            selectedDroneType = selectedDroneTypes[0];
        } //new UIN form with droneType id coming from operatorDrone
        else if(selectedDroneTypeId) {
            selectedDroneTypes =  droneTypes.filter( droneType => droneType.id.toString() === selectedDroneTypeId.toString());
            selectedDroneType = selectedDroneTypes[0];
        }
        return(
            <React.Fragment>
                 { isReadOnly && <div className="large-12 cell">
                        <label>RPA Type
                        <select name="droneType" onChange = { this.onChangeOfDroneType } 
                                value = { selectedDroneType && selectedDroneType.id } 
                                disabled={ droneTypeDisabled }
                                className={fieldErrors && decorateInputClass(fieldErrors['droneType'],[])} validate="required" onBlurCapture={(e) => validateField(e.target)} >
                                { (!selectedDroneType || !selectedDroneType.modelName) && <option default key="-1" value="-1">Select</option> }
                                { droneTypeOptions }
                        </select>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='droneType'/> }                        
                        {droneTypeOptions && droneTypeOptions.length==0 && <div className="large-12 cell"><p className="field-error-message compliant-message">We currently are awaiting manufacturers to be compliant to the system before you can acquire one</p></div>}
                        </label>
                    </div>
                 }                 
                 <div className="large-12 cell">
                    <label>Model Name
                        <input type="text" name="modelName"  value= { selectedDroneType && selectedDroneType.modelName } onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['modelName'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>   
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='modelName'/> }
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model No.
                        <input type="text" name="modelNo"  value= { selectedDroneType && selectedDroneType.modelNo } onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['modelNo'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='modelNo'/> }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Serial No.
                        <input type="text" name="serialNo" value= { selectedDroneType && selectedDroneType.serialNo} onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['serialNo'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='serialNo'/> }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Name of Manufacturer
                        <input type="text" name="manufacturer"  value={ selectedDroneType && selectedDroneType.manufacturer } onChange = { this.handleChange } readOnly = { isReadOnly } maxLength="100" className={ fieldErrors && decorateInputClass(fieldErrors['manufacturer'],[])} validate="required,alphabetsOnly" onBlur={(e) => validateField(e.target)} />
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturer'/> }
                    </label>
                </div>
               <div className="large-12 cell">
                    <label>Address of Manufacturer
                        <input type="text" name="manufacturerAddress.lineOne" placeholder="Address line 1" value ={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.lineOne } onChange = { this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['manufacturerAddress.lineOne'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerAddress.lineOne'/> }
                        <input type="text" name="manufacturerAddress.lineTwo" placeholder="Address line 2" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.lineTwo } onChange = { this.handleChange } readOnly = { isReadOnly }/>
                        <input type="text" name="manufacturerAddress.city"  placeholder="City" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.city } onChange = { this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['manufacturerAddress.city'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerAddress.city'/> }
                        <input type="text" name="manufacturerAddress.state" placeholder="State" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.state } onChange = { this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['manufacturerAddress.state'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerAddress.state'/> }
                        <input type="text" name="manufacturerAddress.country"  placeholder="Country" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.country } onChange = { this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['manufacturerAddress.country'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerAddress.country'/> }
                        <input type="text" name="manufacturerAddress.pinCode" placeholder="Pincode" value={ selectedDroneType && selectedDroneType.manufacturerAddress && selectedDroneType.manufacturerAddress.pinCode } maxLength="8"  onChange = { this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['manufacturerAddress.pinCode'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerAddress.pinCode'/> }
                    </label>
                </div> 
                <div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        <input type="text" name="manufacturerNationality" placeholder="Manufacturer Nationality" value ={ selectedDroneType && selectedDroneType.manufacturerNationality } onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['manufacturerNationality'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='manufacturerNationality'/> }
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Date of Manufacture
                        <input type="text" placeholder="DD-MM-YYYY" name="dateOfManufacture" value= { selectedDroneType && selectedDroneType.dateOfManufacture } onChange = { this.handleChange } readOnly = { isReadOnly } maxLength="10" className={fieldErrors && decorateInputClass(fieldErrors['dateOfManufacture'],[])} validate="required,dateOfManufacture" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='dateOfManufacture'/> }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Wing type <br/>
                        <select name="wingType" value= { selectedDroneType && selectedDroneType.wingType } onChange = { this.handleChange } disabled = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['wingType'],[])} validate="required" onBlur={(e) => validateField(e.target)}>
                            { (!selectedDroneType || !selectedDroneType.wingType) && <option default key="-1" value="-1">Select</option> }
                            { wingTypeOptions }
                        </select> 
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='wingType'/>  }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight (including Payload) in kgs
                        <input type="number" name="maxTakeOffWeight"  placeholder="Weight in kgs" value = { selectedDroneType && selectedDroneType.maxTakeOffWeight !==0 && selectedDroneType.maxTakeOffWeight } onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['maxTakeOffWeight'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='maxTakeOffWeight'/> }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable (in meters)
                        <input type="number" name="maxHeightAttainable" placeholder="Height in ms" value= { selectedDroneType && selectedDroneType.maxHeightAttainable!== 0 && selectedDroneType.maxHeightAttainable } onChange = { this.handleChange } readOnly = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['maxHeightAttainable'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='maxHeightAttainable'/> }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Details of compatible payload
                        <textarea name="compatiblePayload" rows="2" value= { selectedDroneType && selectedDroneType.compatiblePayload } onChange = { this.handleChange } readOnly = { isReadOnly } />
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='compatiblePayload'/> }
                    </label>
                </div>
           </React.Fragment>
        );
    }
}

export default DroneAcquisitionDroneTypeDetailsForm;