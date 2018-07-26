import React from 'react';

const UINOrganizationDocuments = (props) => {

    const  { handleChange, cinDoc, gstinDoc  } = props;

    return (
        <div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label> Copy of CIN document
                        <span>{ cinDoc && cinDoc.name }</span>
                    </label>
                    <label htmlFor="cinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="cinDoc" name="cinDoc" className="show-for-sr" onChange={ handleChange }/>
                </div>
            </div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label>Copy of GSTIN document
                        <span>{ gstinDoc && gstinDoc.name }</span>
                    </label>
                    <label htmlFor="gstinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="gstinDoc" name="gstinDoc" className="show-for-sr" onChange={ handleChange }/>
                </div>
            </div>
        </div>
    )
}
UINOrganizationDocuments.defaultProps = {
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
        maxHeightOfOperation:""
    },
    cinDoc: "", 
    gstinDoc: "",
    handleChange: {}
}
export default UINOrganizationDocuments;