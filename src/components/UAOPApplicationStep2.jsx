import React from 'react';

import FormErrors from './FormErrors';

import back from '../img/back.svg';


class UAOPApplicationStep2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            application: {},
        };
    }

    componentWillReceiveProps(nextProps){
        const { application, errors } = nextProps;
        const {submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0)){
            this.props.nextStep();
        }
        this.setState({formErrors: []});
        this.setState({application: nextProps.application});
    }

    handleChange(event) {
        const { name, value, type } = event.target;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { application } = this.state;
            this.updateObjProp(application, value, name);
            this.setState({application: application});
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
        formData.append("paymentReceiptDoc", this.state.paymentReceiptDoc)
        formData.append("uaopApplicationForm", JSON.stringify(this.state.application))
        this.props.updateApplication(this.props.application.id, formData);
    }

    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, securityProgramDoc, insuranceDoc, landOwnerPermissionDoc, sopDoc, paymentReceiptDoc } = this.state;
        return (
            <div>
                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="uaopApplicationForm" onSubmit={this.handleSaveApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>UAOP Application</h2>
                                    <div className="form-steps">
                                        <ul>
                                            <li className="done step-1"><p>Step 1</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className="now step-2"><p>Step 2</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className="todo step-3"><p>Step 3</p>
                                                <div className="circle"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Security Program Document
                                            <p>{securityProgramDoc && securityProgramDoc.name}</p>
                                        </label>
                                        <label htmlFor="securityProgramDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="securityProgramDoc" name="securityProgramDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Insurance Document
                                            <p>{insuranceDoc && insuranceDoc.name}</p>
                                        </label>
                                        <label htmlFor="insuranceDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="insuranceDoc" name="insuranceDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Land Owner Permission Document
                                            <p>{landOwnerPermissionDoc && landOwnerPermissionDoc.name}</p>
                                        </label>
                                        <label htmlFor="landOwnerPermissionDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="landOwnerPermissionDoc" name="landOwnerPermissionDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Standard Operating Procedure Document
                                            <p>{sopDoc && sopDoc.name}</p>
                                        </label>
                                        <label htmlFor="sopDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="sopDoc" name="sopDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Bharat Kosh receipt Document
                                            <p>{paymentReceiptDoc && paymentReceiptDoc.name}</p>
                                        </label>
                                        <label htmlFor="paymentReceiptDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="paymentReceiptDoc" name="paymentReceiptDoc" className="show-for-sr" accept=".pdf" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-12 cell">
                                    <button type="submit" className="button" name="button">Save & Continue</button>
                                    {
                                       savingApplication && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div className="large-12 cell">
                                    <br/>
                                    <a className="back" onClick={this.props.previousStep}>
                                        <img src={back} alt="back"/> Go back to previous step
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UAOPApplicationStep2;