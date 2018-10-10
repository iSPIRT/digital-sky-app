import React from 'react';

const UINOrganizationDocuments = (props) => {

    const  { onChange, cinDoc, gstinDoc, applicationForm  } = props;

    return (
        <div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label> Copy of CIN document
                        <p>{ (cinDoc && cinDoc.name) || applicationForm.cinDocName }</p>
                    </label>
                    <label htmlFor="cinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="cinDoc" name="cinDoc" className="show-for-sr" onChange={ (e)=> onChange(e) } accept=".pdf"/>
                </div>
            </div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label>Copy of GSTIN document
                        <p>{ (gstinDoc && gstinDoc.name) || applicationForm.gstinDocName }</p>
                    </label>
                    <label htmlFor="gstinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="gstinDoc" name="gstinDoc" className="show-for-sr" onChange={(e)=> onChange(e)} accept=".pdf"/>
                </div>
            </div>
        </div>
    )
}

export default UINOrganizationDocuments;