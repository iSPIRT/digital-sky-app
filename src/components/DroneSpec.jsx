import React from 'react';
import DroneDetails from './DroneDetails';

class DroneSpec extends React.Component {
    
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    render() {

        const rpaCategoryOptions = ["MICRO", "SMALL", "MEDIUM", "LARGE"];
        let rpaSelectCategoryOptions = rpaCategoryOptions.map(option => {
            return (<option value={ option } key={ option }> { option } </option>)
        });
        const  { nationalityOptions, applicationForm, droneTypes, isReadOnly } = this.props;
    
        return (
            <div>
                <DroneDetails nationalityOptions={ nationalityOptions } application = { applicationForm } onChange= { this.handleChange } droneTypes = { droneTypes } isReadOnly = { isReadOnly }/>
                <div className="large-12 cell">
                    <label>Drone Category
                        <select name="droneCategoryType" value={ applicationForm.droneCategoryType } onChange={ this.handleChange } >
                            { rpaSelectCategoryOptions }
                        </select>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Place & region of operation as per AAI FIR
                        <input type="text" name="regionOfOperation" placeholder="Region of operation" value= { applicationForm.regionOfOperation } onChange={ this.handleChange } readOnly = { true } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Purpose of operation
                        <input type="text" name="purposeOfOperation" placeholder="Purpose of operation" value= { applicationForm.purposeOfOperation } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Engine/Motor Type
                        <input type="text" name="engineType" placeholder="Engine type" value= { applicationForm.engineType } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Engine/Motor Power Rating in (kW)
                        <input type="number" name="enginePower" placeholder="Engine/Motor Power Rating" defaultValue= { applicationForm.enginePower !==0 &&  applicationForm.enginePower } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>No of Engines/Motors
                        <input type="number" name="engineCount" placeholder="No of engines" defaultValue= { applicationForm.engineCount !==0 &&  applicationForm.engineCount } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Total fuel capacity (kg)/Battery capacity (mAh)
                        <input type="number" name="fuelCapacity" placeholder="Fuel Capacity" defaultValue= { applicationForm.fuelCapacity !==0 &&  applicationForm.fuelCapacity } onChange={ this.handleChange }/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Propeller details
                        <textarea name="propellerDetails" rows="2"  defaultValue= { applicationForm.propellerDetails} onChange={ this.handleChange }/>    
                    </label>
                </div>
                {/* <div className="large-12 cell">
                    <label>Overall dimensions (l x b x h)
                        <table>
                            <tbody>
                                <tr>
                                <td><input type="number" name="dimensions.length" maxLength="4"  max="10000" defaultValue= { applicationForm.dimensions && applicationForm.dimensions.length }  onChange={this.handleChange } />  </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.breadth" maxLength="4" max="10000" defaultValue= { applicationForm.dimensions && applicationForm.dimensions.breadth }  onChange={ this.handleChange } /> </td>
                                <td> x </td>
                                <td><input type="number" name="dimensions.height" maxLength="4" max="10000" defaultValue= { applicationForm.dimensions && applicationForm.dimensions.height }  onChange={ this.handleChange } /> </td>
                                </tr>
                            </tbody>
                        </table>
                    </label>
                </div> */}
                <div className="large-12 cell">
                    <label>Maximum Endurance (in minutes)
                        <input type="number" name="maxEndurance" placeholder="(in minutes)" defaultValue= { applicationForm.maxEndurance !==0 && applicationForm.maxEndurance} onChange={ this.handleChange } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Range (in metres)
                        <input type="number" name="maxRange" placeholder="(in metres)" defaultValue= { applicationForm.maxRange!==0 && applicationForm.maxRange} onChange={ this.handleChange } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum Speed (in kmph)s
                        <input type="number" name="maxSpeed" placeholder="" defaultValue= { applicationForm.maxSpeed!==0 &&  applicationForm.maxSpeed } onChange={ this.handleChange } />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height of operations required (in metres)
                        <input type="number" name="maxHeightOfOperation" placeholder="" defaultValue= { applicationForm.maxHeightOfOperation !==0 &&  applicationForm.maxHeightOfOperation} onChange={ this.handleChange } />    
                    </label>
                </div>
            </div>
        )
    }
}

export default DroneSpec;