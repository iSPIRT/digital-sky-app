import React from 'react';

import FormErrors from '../components/FormErrors';

class UAOPApplication extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleSaveAndSubmitApplication = this.handleSaveAndSubmitApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            application: {},
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        this.setState({docs: {}});
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
        formData.append("securityClearanceDoc", this.state.securityClearanceDoc)
        formData.append("insuranceDoc", this.state.insuranceDoc)
        formData.append("landOwnerPermissionDoc", this.state.landOwnerPermissionDoc)
        formData.append("sopDoc", this.state.sopDoc)
        formData.append("uaopApplicationForm", JSON.stringify(this.state.application))
        console.log(formData);
        if(this.props.application.id !== 0 ){
            this.props.updateApplication(this.props.application.id, formData);
        } else{
            this.props.createApplication(formData);
        }
    }

    handleSaveAndSubmitApplication(event) {
        event.preventDefault();
        this.setState({submitted: true});

        const {application} = this.state;
        application.status='SUBMITTED';
        this.setState({application});

        const formData = new FormData();
        formData.append("securityClearanceDoc", this.state.securityClearanceDoc)
        formData.append("insuranceDoc", this.state.insuranceDoc)
        formData.append("landOwnerPermissionDoc", this.state.landOwnerPermissionDoc)
        formData.append("sopDoc", this.state.sopDoc)
        formData.append("uaopApplicationForm", JSON.stringify(this.state.application))
        console.log(formData);
        if(this.props.application.id !== 0 ){
            this.props.updateApplication(this.props.application.id, formData);
        } else{
            this.props.createApplication(formData);
        }
    }


    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, submitted, application, securityClearanceDoc, insuranceDoc, landOwnerPermissionDoc, sopDoc } = this.state;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>UAOP Application</h2>
                        { submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0) && <p> Successfully Saved Application <br/></p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="uaopApplicationForm" onSubmit={this.handleSaveApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">

                                <div className="large-12 cell">
                                    <label>Name
                                        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={application.name} maxLength="100" />
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Designation
                                        <input type="text" placeholder="Designation" name="designation" onChange={this.handleChange} value={application.designation} maxLength="20" />
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Security Clearance Document
                                            <span>{securityClearanceDoc && securityClearanceDoc.name}</span>
                                        </label>
                                        <label htmlFor="securityClearanceDoc" className="button button-file-upload">Upload File</label>
                                        <input type="file" id="securityClearanceDoc" name="securityClearanceDoc" className="show-for-sr" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Insurance Document
                                            <span>{insuranceDoc && insuranceDoc.name}</span>
                                        </label>
                                         <label htmlFor="insuranceDoc" className="button button-file-upload">Upload File</label>
                                         <input type="file" id="insuranceDoc" name="insuranceDoc" className="show-for-sr" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Land Owner Permission Document
                                            <span>{landOwnerPermissionDoc && landOwnerPermissionDoc.name}</span>
                                        </label>
                                         <label htmlFor="landOwnerPermissionDoc" className="button button-file-upload">Upload File</label>
                                         <input type="file" id="landOwnerPermissionDoc" name="landOwnerPermissionDoc" className="show-for-sr" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="large-12 cell">
                                    <div className="help-wrap">
                                        <label>Standard Operating Procedure Document
                                            <span>{sopDoc && sopDoc.name}</span>
                                        </label>
                                         <label htmlFor="sopDoc" className="button button-file-upload">Upload File</label>
                                         <input type="file" id="sopDoc" name="sopDoc" className="show-for-sr" onChange={this.handleChange}/>
                                    </div>
                                </div>

                                <div className="large-6 cell">

                                    { submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0) && <p> Successfully Saved Application <br/></p>}

                                    <button type="submit" className="button" name="button">{ application.id !== 0 ? 'Update' : 'Save' }</button>

                                    {
                                       savingApplication && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div className="large-6 cell">

                                    { submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0) && <p> Successfully Saved Application <br/></p>}

                                    { application.id !== 0 &&  <button className="button" name="button" onClick={this.handleSaveAndSubmitApplication}> Save and Submit</button> }

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UAOPApplication;