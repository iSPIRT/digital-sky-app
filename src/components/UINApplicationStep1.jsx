import React from 'react';
import UINOrganizationDocuments from './UINOrganizationDocuments';
import FooterApplicationForm from './FooterApplicationForm';

class UINApplicationStep1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            applicationForm: {},
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        }
    }

    handleChange(event) {
        const { name, value, type } = event.target;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { applicationForm } = this.props;
            this.updateObjProp(applicationForm, value, name);
            this.setState({applicationForm: applicationForm});
        }
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSaveApplication(event) {
        event.preventDefault();
        this.setState({submitted: true});

        const formData = new FormData();
        if(this.state.importPermissionDoc !== undefined) {
            formData.append("importPermissionDoc", this.state.importPermissionDoc);
        }
         if(this.state.panCardDoc !== undefined) {
            formData.append("panCardDoc", this.state.panCardDoc);
        }
        if(this.state.securityClearanceDoc !== undefined) {
            formData.append("securityClearanceDoc", this.state.securityClearanceDoc);
        }
        if(this.state.dotPermissionDoc !== undefined) {
            formData.append("dotPermissionDoc", this.state.dotPermissionDoc);
        }
        if(this.state.etaDoc !== undefined) {
            formData.append("etaDoc", this.state.etaDoc);
        }
        if(this.state.cinDoc !== undefined) {
            formData.append("cinDoc", this.state.cinDoc);
        }
        if(this.state.gstinDoc !== undefined) {
            formData.append("gstinDoc", this.state.gstinDoc);
        }

        formData.append("uinApplication", JSON.stringify(this.state.applicationForm))
        console.log(formData);

        if(this.props.applicationForm.id !== undefined ){
            this.props.updateForm(formData, this.props.applicationForm.id);
        } else{
            this.props.createForm(formData);
        }
    }
    
    render() {
      
        const { savingApplication,  applicationForm, step, goBack} = this.props;

        const {  importPermissionDoc, panCardDoc, securityClearanceDoc, dotPermissionDoc, etaDoc, cinDoc, gstinDoc } = this.state;

        return (
            <div>
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="uinApplicationForm" onSubmit={ this.handleSaveApplication }>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of import permission / filled proforma for information of local acquisition
                                        <span>{ (importPermissionDoc && importPermissionDoc.name) || applicationForm.importPermissionDocName }</span>
                                    </label>
                                    <label htmlFor="importPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="importPermissionDoc" name="importPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <UINOrganizationDocuments applicationForm = { applicationForm } onChange= { this.handleChange } cinDoc = { cinDoc} gstinDoc = { gstinDoc } />
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of PanCard 
                                        <span>{ (panCardDoc && panCardDoc.name) || applicationForm.panCardDocName }</span>
                                    </label>
                                    <label htmlFor="panCardDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="panCardDoc" name="panCardDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of security clearance from MHA or self-attested copies of at least two out of three valid identity proofs viz. Passport, Driving License or Aadhar Card (in case of individual/Indian remote pilot
                                        <span>{ (securityClearanceDoc && securityClearanceDoc.name) || applicationForm.securityClearanceDocName }</span>
                                    </label>
                                    <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of Permission/ license from WPC Wing, Department of Telecommunication for usage of licensed frequencies used in RPA. (as applicable)
                                        <span>{ (dotPermissionDoc && dotPermissionDoc.name) ||  applicationForm.dotPermissionDocName}</span>
                                    </label>
                                    <label htmlFor="dotPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="dotPermissionDoc" name="dotPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of ETA from WPC Wing, Department of Telecommunication for RPA operating in de-licensed frequency band(s) (as applicable)
                                        <span>{ (etaDoc && etaDoc.name) || applicationForm.etaDocName }</span>
                                    </label>
                                    <label htmlFor="etaDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="etaDoc" name="etaDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <label>Details of fees paid
                                    <input type="text" name="feeDetails" placeholder="Details of Fees" value= { applicationForm.feeDetails } onChange={ this.handleChange }/>
                                </label>
                            </div>

                        </div>
                    </div>
                    <FooterApplicationForm step= { step } savingApplication= { savingApplication} goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default UINApplicationStep1;