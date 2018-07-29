import React from 'react';

const UINOrganizationDocuments = (props) => {

    const  { onChange, cinDoc, gstinDoc, applicationForm  } = props;

    return (
        <div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label> Copy of CIN document
                        <span>{ (cinDoc && cinDoc.name) || applicationForm.cinDocName }</span>
                    </label>
                    <label htmlFor="cinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="cinDoc" name="cinDoc" className="show-for-sr" onChange={ (e)=> onChange(e) }/>
                </div>
            </div>
            <div className="large-12 cell">
                <div className="help-wrap">
                    <label>Copy of GSTIN document
                        <span>{ (gstinDoc && gstinDoc.name) || applicationForm.gstinDocName }</span>
                    </label>
                    <label htmlFor="gstinDoc" className="button button-file-upload">Upload File</label>
                    <input type="file" id="gstinDoc" name="gstinDoc" className="show-for-sr" onChange={(e)=> onChange(e)}/>
                </div>
            </div>
        </div>
    )
}

export default UINOrganizationDocuments;