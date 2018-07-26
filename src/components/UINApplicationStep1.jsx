import React from 'react';
import UINOrganizationDocuments from './UINOrganizationDocuments';
import FooterApplicationForm from './FooterApplicationForm';
import FormErrors from './FormErrors';

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
        const { applicationForm, errors } = nextProps;
        const {submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (applicationForm.id !== 0)){
            this.props.nextStep();
        }
        this.setState({formErrors: []});
        this.setState({applicationForm: nextProps.applicationForm});
    }

    handleChange(event) {
        const { name, value, type } = event.target;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { applicationForm } = this.state;
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
        formData.append("securityProgramDoc", this.state.securityProgramDoc)
        formData.append("insuranceDoc", this.state.insuranceDoc)
        formData.append("landOwnerPermissionDoc", this.state.landOwnerPermissionDoc)
        formData.append("sopDoc", this.state.sopDoc)
        formData.append("uaopApplicationForm", JSON.stringify(this.state.applicationForm))
        console.log(formData);
        this.props.updateApplication(this.props.applicationForm.id, formData);
    }
    
    render() {
      
        const { saving, saved, errors, applicationForm, step, goBack} = this.props;

        const { formErrors, submitted, importPermissionDoc, panCardDoc, securityClearanceDoc, dotPermissionDoc, etaDoc } = this.state;

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
                                        <span>{ importPermissionDoc && importPermissionDoc.name }</span>
                                    </label>
                                    <label htmlFor="importPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="importPermissionDoc" name="importPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <UINOrganizationDocuments applicationForm = { applicationForm }/>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of PanCard 
                                        <span>{ panCardDoc && panCardDoc.name }</span>
                                    </label>
                                    <label htmlFor="panCardDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="panCardDoc" name="panCardDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of security clearance from MHA or self-attested copies of at least two out of three valid identity proofs viz. Passport, Driving License or Aadhar Card (in case of individual/Indian remote pilot
                                        <span>{ securityClearanceDoc && securityClearanceDoc.name }</span>
                                    </label>
                                    <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of Permission/ license from WPC Wing, Department of Telecommunication for usage of licensed frequencies used in RPA. (as applicable)
                                        <span>{ dotPermissionDoc && dotPermissionDoc.name }</span>
                                    </label>
                                    <label htmlFor="dotPermissionDoc" className="button button-file-upload">Upload File</label>
                                    <input type="file" id="dotPermissionDoc" name="dotPermissionDoc" className="show-for-sr" onChange={ this.handleChange }/>
                                </div>
                            </div>
                            <div className="large-12 cell">
                                <div className="help-wrap">
                                    <label>Copy of ETA from WPC Wing, Department of Telecommunication for RPA operating in de-licensed frequency band(s) (as applicable)
                                        <span>{ etaDoc && etaDoc.name }</span>
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
                    <FooterApplicationForm step= { step } saving= { saving} goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default UINApplicationStep1;