import React from 'react';
import DroneDetails from './DroneDetails';

const DroneSpec = (props) => {
    
    const rpaCategoryOptions = ["Micro", "Small", "Medium", "Large"];
        
    let rpaSelectCategoryOptions = rpaCategoryOptions.map(option => {
            return (<option value={ option } key={ option }> { option } </option>)
    });

    const  { nationalityOptions, applicationForm, handleChange } = props;
    return (
        <div>
            <DroneDetails nationalityOptions={ nationalityOptions } details = { applicationForm } onChange= { handleChange }/>
            <div className="large-12 cell">
                <label>Category of RPA
                    <select name="rpaOptions" value={ applicationForm.rpaCategory } onChange={ handleChange } >
                        { rpaSelectCategoryOptions }
                    </select>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Place & region of operation as per AAI FIR
                    <input type="text" name="region" placeholder="Region of operation" value= { applicationForm.regionOfOperation } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Purpose of operation
                    <input type="text" name="purpose" placeholder="Purpose of operation" value= { applicationForm.purposeOfOperation } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Engine/Motor Type
                    <input type="text" name="motorType" placeholder="Engine type" value= { applicationForm.engineType } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Engine/Motor Power Rating in (kW)
                    <input type="number" name="motorPower" placeholder="Engine/Motor Power Rating" value= { applicationForm.motorPower } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>No of Engines/Motors
                    <input type="number" name="engineCount" placeholder="No of engines" value= { applicationForm.engineCount } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Total fuel capacity (kg)/Battery capacity (mAh)
                    <input type="number" name="fuelCapacity" placeholder="Fuel Capacity" value= { applicationForm.fuelCapacity } onChange={ handleChange }/>
                </label>
            </div>
            <div className="large-12 cell">
                <label>Propeller details
                    <textarea name="propellerDetails" rows="2"  defaultValue= { applicationForm.propellerDetails} onChange={ handleChange }/>    
                </label>
            </div>
            <div className="large-12 cell">
                <label>Overall dimensions (l x b x h)
                <input type="number" name="dimension_l" value= { applicationForm.dimension_l }  onChange={ handleChange } /> x
                <input type="number" name="dimension_b" value= { applicationForm.dimension_b }  onChange={ handleChange } /> x
                <input type="number" name="dimension_h" value= { applicationForm.dimension_h }  onChange={ handleChange } />
                </label>
            </div>
            <div className="large-12 cell">
                <label>Maximum Endurance (in minutes)
                    <input type="number" name="maxEndurance" placeholder="(in minutes)" value= { applicationForm.maxEndurance } onChange={ handleChange } />
                </label>
            </div>
            <div className="large-12 cell">
                <label>Maximum Range (in metres)
                    <input type="number" name="maxRange" placeholder="(in metres)" value= { applicationForm.maxRange } onChange={ handleChange } />
                </label>
            </div>
            <div className="large-12 cell">
                <label>Maximum Speed (in kmph)s
                    <input type="number" name="maxSpeed" placeholder="" value= { applicationForm.maxSpeed } onChange={ handleChange } />
                </label>
            </div>
            <div className="large-12 cell">
                <label>Maximum Height attainable (in metres)
                    <input type="number" name="maxHeightAttainable" placeholder="" value= { applicationForm.maxHeightAttainable } onChange={ handleChange } />
                </label>
            </div>
            <div className="large-12 cell">
                <label>Maximum height of operations required (in metres)
                    <input type="number" name="maxHeightOfOperation" placeholder="" value= { applicationForm.maxHeightOfOperation } onChange={ handleChange } />    
                </label>
            </div>
        </div>
        )
}

DroneSpec.defaultProps = {
    applicationForm : {
        rpaOption : "",
        regionOfOperation: "",
        purposeOfOperation: "",
        engineType: "",
        motorPower: "",
        engineCount: "",
        fuelCapacity: "",
        propellerDetails: "",
        dimension_l: "",
        dimension_b: "",
        dimension_h: "",
        maxEndurance: "",
        maxRange: "",
        maxSpeed: "",
        maxHeightAttainable: "",
        maxHeightOfOperation:"",
        handleChange: {}
    }
}
export default DroneSpec;