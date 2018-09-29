import React from 'react';

import { decorateInputClass} from '../helpers/formValidationHelpers';
import FieldError from "./FieldError";

import DroneAcquisitionDroneTypeDetailsForm from './DroneAcquisitionDroneTypeDetailsForm';

class DroneSpecForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateDroneSpec = this.updateDroneSpec.bind(this);
        this.state = {
            selectedDroneType : {}
        }
    }

    handleChange(event) {
         this.props.onChange(event);
    }

    updateDroneSpec(droneDetails) {
        this.setState({selectedDroneType: droneDetails});
        if(this.props.updateDroneDetails) {
            this.props.updateDroneDetails(droneDetails);
        }
    }

    render() {
        const rpaCategoryOptions = ["MICRO", "SMALL", "MEDIUM", "LARGE"];
        let rpaSelectCategoryOptions = rpaCategoryOptions.map(option => {
            return (<option value={ option } key={ option }> { option } </option>)
        });
        const  { application, droneTypes, isReadOnly, selectedDroneTypeId, droneTypeDisabled, droneType, fieldErrors } = this.props;
        const validateField = this.props.validateField ? this.props.validateField :  (e)=>{ return };
        var selectedDroneType;
        //used by Acquisition forms
        if(this.state.selectedDroneType && this.state.selectedDroneType.id) {
            selectedDroneType = this.state.selectedDroneType;
        }//used by UIN form
        else if(application && application.droneTypeId ){
            var selectedDroneTypes=  droneTypes.filter( droneType => droneType.id === application.droneTypeId );
            selectedDroneType = selectedDroneTypes[0];
        }//used by edit drone profile by admin after an edit
        else if(droneType) {
            selectedDroneType = droneType;
        }

        return (
            <div>
                <DroneAcquisitionDroneTypeDetailsForm
                            application = { application }
                            droneTypes = { droneTypes }
                            selectedDroneTypeId = { selectedDroneTypeId }
                            isReadOnly = { isReadOnly }
                            onChange= { this.handleChange }
                            updateDroneDetails= { this.updateDroneSpec }
                            droneTypeDisabled =  { droneTypeDisabled }
                            fieldErrors = { fieldErrors }
                            validateField = { validateField } 
                />
                <div className="large-12 cell">
                    <label>Drone Category
                        <select name="droneCategoryType" value={ selectedDroneType && selectedDroneType.droneCategoryType }  onChange={ this.handleChange } disabled = { isReadOnly } className={fieldErrors && decorateInputClass(fieldErrors['droneCategoryType'],[])} validate="required" onBlur={(e) => validateField(e.target)}>
                        { (!selectedDroneType || !selectedDroneType.droneCategoryType) && <option default key="-1" value="-1">Select</option> }
                            { rpaSelectCategoryOptions }
                        </select>
                        { fieldErrors && <FieldError fieldErrors={fieldErrors} field='droneCategoryType'/>  }
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Place & region of operation as per AAI FIR
                        <input type="text" name="proposedBaseOfOperation" placeholder="Region of operation" value= { selectedDroneType && selectedDroneType.proposedBaseOfOperation } onChange={ this.handleChange } readOnly = { isReadOnly } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Purpose of operation
                        <input type="text" name="purposeOfOperation" placeholder="Purpose of operation" value= { selectedDroneType && selectedDroneType.purposeOfOperation } onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Engine/Motor Type
                        <input type="text" name="engineType" placeholder="Engine type" value= { selectedDroneType && selectedDroneType.engineType } onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['engineType'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='engineType'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Engine/Motor Power Rating in (kW)
                        <input type="number" name="enginePower" placeholder="Engine/Motor Power Rating" value= { selectedDroneType && selectedDroneType.enginePower !==0 &&  selectedDroneType.enginePower } onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['engineType'],[])} validate="required" onBlur={(e) => validateField(e.target)} />
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='enginePower'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>No of Engines/Motors
                        <input type="number" name="engineCount" placeholder="No of engines" value= { selectedDroneType && selectedDroneType.engineCount !==0 &&  selectedDroneType.engineCount } onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['engineCount'],[])} validate="required" onBlur={(e) => validateField(e.target)} />
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='engineCount'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Total fuel capacity (kg)/Battery capacity (mAh)
                        <input type="number" name="fuelCapacity" placeholder="Fuel Capacity" value= { selectedDroneType && selectedDroneType.fuelCapacity !==0 &&  selectedDroneType.fuelCapacity } onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['fuelCapacity'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='fuelCapacity'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Propeller details
                        <textarea name="propellerDetails" rows="2"  value= { selectedDroneType && selectedDroneType.propellerDetails} onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Overall dimensions (l x b x h)
                        <table>
                            <tbody>
                                <tr>
                                <td><input type="number" name="dimensions.length" placeholder="length" maxLength="4"  max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.length!== 0 && selectedDroneType.dimensions.length}  onChange={this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['dimensions.length'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>  </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.breadth" placeholder="breadth" maxLength="4" max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.breadth!== 0 && selectedDroneType.dimensions.breadth}  onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['dimensions.breadth'],[])} validate="required" onBlur={(e) => validateField(e.target)}/> </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.height" maxLength="4"  placeholder="height" max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.height!== 0  && selectedDroneType.dimensions.height}  onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['dimensions.height'],[])} validate="required" onBlur={(e) => validateField(e.target)}/> </td>
                                </tr>
                            </tbody>
                        </table>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='dimensions.length'/>}
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='dimensions.breadth'/>}
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='dimensions.height'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Endurance (in minutes)
                        <input type="number" name="maxEndurance" placeholder="(in minutes)" value= { selectedDroneType && selectedDroneType.maxEndurance !==0 && selectedDroneType.maxEndurance} onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['maxEndurance'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='maxEndurance'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Range (in metres)
                        <input type="number" name="maxRange" placeholder="(in metres)" value= { selectedDroneType && selectedDroneType.maxRange!==0 && selectedDroneType.maxRange} onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['maxRange'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='maxRange'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Speed (in kmph)s
                        <input type="number" name="maxSpeed" placeholder="" value= { selectedDroneType && selectedDroneType.maxSpeed!==0 &&  selectedDroneType.maxSpeed } onChange={ this.handleChange } readOnly = { isReadOnly } className={ fieldErrors && decorateInputClass(fieldErrors['maxSpeed'],[])} validate="required" onBlur={(e) => validateField(e.target)}/>
                        {fieldErrors && <FieldError fieldErrors={fieldErrors} field='maxSpeed'/>}
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height of operations required (in metres)
                        <input type="number" name="maxHeightOfOperation" placeholder="" value= { selectedDroneType && selectedDroneType.maxHeightOfOperation !==0 &&  selectedDroneType.maxHeightOfOperation} onChange={ this.handleChange } readOnly = { isReadOnly } />
                    </label>
                </div>
            </div>
        )
    }
}

export default DroneSpecForm;