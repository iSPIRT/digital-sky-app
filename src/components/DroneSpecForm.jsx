import React from 'react';

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
       // alert("value" + event.target.attributes["multiple"] === undefined)
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
        const  { nationalityOptions, application, droneTypes, isReadOnly, selectedDroneTypeId, droneTypeDisabled, droneType } = this.props;
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
                            nationalityOptions={ nationalityOptions }
                            application = { application }
                            droneTypes = { droneTypes }
                            selectedDroneTypeId = { selectedDroneTypeId }
                            isReadOnly = { isReadOnly }
                            onChange= { this.handleChange }
                            updateDroneDetails= { this.updateDroneSpec }
                            droneTypeDisabled =  { droneTypeDisabled }/>
                <div className="large-12 cell">
                    <label>Drone Category
                        <select name="droneCategoryType" value={ selectedDroneType && selectedDroneType.droneCategoryType }  onChange={ this.handleChange } disabled = { isReadOnly }>
                        { (!selectedDroneType || !selectedDroneType.droneCategoryType) && <option default key="-1" value="-1">Select</option> }
                            { rpaSelectCategoryOptions }
                        </select>
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
                        <input type="text" name="engineType" placeholder="Engine type" value= { selectedDroneType && selectedDroneType.engineType } onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Engine/Motor Power Rating in (kW)
                        <input type="number" name="enginePower" placeholder="Engine/Motor Power Rating" value= { selectedDroneType && selectedDroneType.enginePower !==0 &&  selectedDroneType.enginePower } onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>No of Engines/Motors
                        <input type="number" name="engineCount" placeholder="No of engines" value= { selectedDroneType && selectedDroneType.engineCount !==0 &&  selectedDroneType.engineCount } onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Total fuel capacity (kg)/Battery capacity (mAh)
                        <input type="number" name="fuelCapacity" placeholder="Fuel Capacity" value= { selectedDroneType && selectedDroneType.fuelCapacity !==0 &&  selectedDroneType.fuelCapacity } onChange={ this.handleChange } readOnly = { isReadOnly }/>
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
                                <td><input type="number" name="dimensions.length" maxLength="4"  max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.length }  onChange={this.handleChange } readOnly = { isReadOnly }/>  </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.breadth" maxLength="4" max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.breadth }  onChange={ this.handleChange } readOnly = { isReadOnly }/> </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.height" maxLength="4" max="10000" value= { selectedDroneType && selectedDroneType.dimensions && selectedDroneType.dimensions.height }  onChange={ this.handleChange } readOnly = { isReadOnly }/> </td>
                                </tr>
                            </tbody>
                        </table>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Endurance (in minutes)
                        <input type="number" name="maxEndurance" placeholder="(in minutes)" value= { selectedDroneType && selectedDroneType.maxEndurance !==0 && selectedDroneType.maxEndurance} onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Range (in metres)
                        <input type="number" name="maxRange" placeholder="(in metres)" value= { selectedDroneType && selectedDroneType.maxRange!==0 && selectedDroneType.maxRange} onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Speed (in kmph)s
                        <input type="number" name="maxSpeed" placeholder="" value= { selectedDroneType && selectedDroneType.maxSpeed!==0 &&  selectedDroneType.maxSpeed } onChange={ this.handleChange } readOnly = { isReadOnly }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height of operations required (in metres)
                        <input type="number" name="maxHeightOfOperation" placeholder="" value= { selectedDroneType && selectedDroneType.maxHeightOfOperation !==0 &&  selectedDroneType.maxHeightOfOperation} onChange={ this.handleChange } readOnly = { isReadOnly } />
                    </label>
                </div>
                {/* <div className="large-12 cell">
                    <label> Select whichever applicable
                        <select multiple onChange={ this.handleChange } disabled = { isReadOnly } >
                        { !selectApplicableIsEmpty && <option default key="-1" value="-1"> Select</option> }
                            <option value={ selectedDroneType && selectedDroneType.hasGNSS } key="hasGNSS">GNSS (GPS) for horizontal and vertical position fixing</option>
                            <option value={ selectedDroneType && selectedDroneType.hasAutonomousFlightTerminationSystem }>Autonomous Flight Termination System or Return Home (RH) option</option>
                            <option value={ selectedDroneType && selectedDroneType.hasFlashingAntiCollisionStrobeLights }>Flashing anti-collision strobe lights</option>
                            <option value={ selectedDroneType && selectedDroneType.hasRFID_GSM_SIMCard }>RFID and GSM SIM Card/ NPNT compliant for APP based real time tracking (except for Nano and Micro category)</option>
                            <option value={ selectedDroneType && selectedDroneType.hasFlightController }>Flight Controller with flight data logging capability</option>
                        </select>
                    </label>
                </div> */}
            </div>
        )
    }
}

export default DroneSpecForm;