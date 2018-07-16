import React from 'react';

class DroneDetails extends React.Component {
  
    render() {

        let nationalityOptions = this.props.nationalityOptions.map(nationality => {
            return (<option value={nationality} key={nationality}> {nationality} </option>)
        });

        return(
            <div>
                <div className="large-12 cell">
                    <label>Name of Manufacturer
                        <input type="text" name="nameOfManufacturer" ref="nameOfManufacturer" />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Address of Manufacturer</label>
                    <input type="text" name="manufacturerAddressLine1" ref="manufacturerAddressLine1" placeholder="Address line 1"/>
                    <input type="text" name="manufacturerAddressLine2" ref="manufacturerAddressLine2" placeholder="Address line 2"/>
                    <input type="text" name="manufacturerAddressCity" ref="manufacturerAddressCity" placeholder="City"/>
                    <input type="text" name="manufacturerAddressState" ref="manufacturerAddressState" placeholder="State"/>
                    <input type="text" name="manufacturerCountry" ref="manufacturerCountry" placeholder="Country"/>
                    <input type="text" name="manufacturerPincode" ref="manufacturerPincode" placeholder="Pincode"/>
                </div>
                <div className="large-12 cell">
                    <label>Nationality of Manufacturer
                        <select name="nationalityOfManufacturer" ref="nationalityOfManufacturer">
                            {nationalityOptions}
                        </select>
                    </label>
                </div >
                <div className="large-12 cell">
                    <label>Model No.
                        <input type="text" name="modelNo" ref="modelNo" />
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Serial No.
                        <input type="text" name="serialNo" ref="serialNo" />
                    </label>
                </div>
                <div className="large-12 cell">
                <label>Date of Manufacture
                    <input type="date" name="dateOfManufacture" ref="dateOfManufacture" />
                </label>
                </div>
                <div className="large-12 cell">
                    <label>Year of Manufacture
                        <input type="text" name="yearOfManufature" ref="yearOfManufature" readOnly/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <fieldset>
                        <label>Wing type <br/>
                            <input type="radio" ref="wingType" name="wingType" value="Fixed"/>
                            <label htmlFor="Fixed">Fixed</label><br/>
                            <input type="radio" ref="wingType" name="wingType" value="Rotary"/>
                            <label htmlFor="Rotary">Rotary</label>
                        </label>
                    </fieldset>
                </div>
                <div className="large-12 cell">
                    <label className="checkbox">Is New
                        <input type="checkbox" defaultChecked name="isNew" ref="isNew" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum take-off weight
                        <input type="number" name="maxTakeOffWeight" ref="maxTakeOffWeight" min="10" max="100" step="5.0"/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Maximum height attainable
                        <input type="number" name="maxHeight" ref="maxHeight" min="10" max="100" step="10.0"/>
                    </label>
                </div>
                <div className="large-12 cell">
                    <label>Payload DroneDetails
                        <textarea name="payload" ref="payload" rows="3" />
                    </label>
                </div>
        </div>
        );
  }
}

export default DroneDetails;