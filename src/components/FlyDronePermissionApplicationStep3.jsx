import React from 'react';

import FormErrors from './FormErrors';
import FlyDronePermissionApplicationView from './FlyDronePermissionApplicationView';

import { Link } from 'react-router-dom'

import back from '../img/back.svg';
import UncontrolledAlert from "@bit/reactstrap.reactstrap.uncontrolled-alert";

class FlyDronePermissionApplicationStep3 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmitApplication = this.handleSubmitApplication.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            submitted: false,
            file_uploaded:false,
            file_uploaded_success:false,
            application: this.props.application,
        };
    }

    componentWillReceiveProps(nextProps){
        const { file_uploaded } = this.state;

        this.setState({application: nextProps.application});
        if (file_uploaded && ( !nextProps.errors || nextProps.errors.length === 0) ){
            this.setState({file_uploaded_success: true});
        }
    }

    downloadDocument(documentName){
        this.props.downloadDocument(documentName);
    }

    handleSubmitApplication(event) {
        event.preventDefault();
        this.setState({submitted: true});

        const {application} = this.state;
        application.status='SUBMITTED';
        this.setState({application});

        this.props.updateApplication(this.props.application.id, application);
    }

    handleChange(event){
        const { type } = event.target;
        if( type === 'file'){
            const formData = new FormData();
            formData.append("flightLogDocument", event.target.files[0]);
            this.props.submitFlightLog(this.state.application,formData);
            this.setState({file_uploaded:true})
        }
    }


    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, submitted, application,file_uploaded_success } = this.state;
        return (
            <div id="application-preview">
                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="uaopApplicationForm" onSubmit={this.handleSubmitApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>Fly RPA Permission Application</h2>
                                    <p><Link to={'/flyDronePermissionApplications?droneId='+application.droneId}>Back To Applications</Link></p>
                                    <div className="form-steps">
                                        <ul>
                                            <li className="done step-1"><p>Step 1</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className="done step-2"><p>Step 2</p>
                                                <div className="circle"></div>
                                            </li>
                                            <li className={ ( submitted &&  application.status && application.status !== 'DRAFT') ?'done step-3' : 'now step-3'}><p>Step 3</p>
                                                <div className="circle"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <FlyDronePermissionApplicationView application={application} loadAirspaceCategories={this.props.loadAirspaceCategories} airspaceCategories={this.props.airspaceCategories} />
                                <div className="large-12 cell">
                                    { (application.status === 'APPROVED' || application.status === 'APPROVEDBYAFMLU') &&
                                        <div className="question">
                                            <h6>Permission Artifact:</h6>
                                            <a onClick={(e) =>  this.props.downloadDocument("permissionArtifact")}>Download</a>
                                        </div>
                                    }
                                </div>
                                <div className="large-12 cell">
                                    { (application.status === 'APPROVED' || application.status === 'APPROVEDBYAFMLU') &&
                                        <div className="question">
                                            <label>Upload your Flight log:</label>
                                            <label htmlFor="flightLogDocument" className="button button-file-upload">Upload File</label>
                                            <input type="file" id="flightLogDocument" name="flightLogDocument" className="show-for-sr" accept=".json,application/json" onChange={this.handleChange}/>
                                        </div>
                                    }
                                </div>
                                { application.status === 'DRAFT' &&
                                    <React.Fragment>
                                        <div className="large-12 cell">
                                            <button type="submit" className="button" name="button">Submit Application</button>
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
                                    </React.Fragment>
                                }
                                { submitted &&  application.status && application.status !== 'DRAFT' &&
                                    <div className="large-12 cell">
                                        <p> Successfully Saved Application <br/></p>
                                    </div>
                                }
                                {(application.status === 'APPROVED' || application.status === 'APPROVEDBYAFMLU') && file_uploaded_success &&
                                    <div className="success-alert">
                                        <link
                                            rel='stylesheet'
                                            href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'
                                        />
                                        <UncontrolledAlert color='info' fade={false}>
                                            File has been Successfully Uploaded
                                        </UncontrolledAlert>
                                    </div>
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FlyDronePermissionApplicationStep3;