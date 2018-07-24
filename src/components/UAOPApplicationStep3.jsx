import React from 'react';

import FormErrors from '../components/FormErrors';

import back from '../img/back.svg';

class UAOPApplicationStep3 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmitApplication = this.handleSubmitApplication.bind(this);
        this.state = {
            submitted: false,
            application: this.props.application,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({application: nextProps.application});
    }

    handleSubmitApplication(event) {
        event.preventDefault();
        this.setState({submitted: true});

        const {application} = this.state;
        application.status='SUBMITTED';
        this.setState({application});

        const formData = new FormData();
        formData.append("uaopApplicationForm", JSON.stringify(this.state.application))

        this.props.updateApplication(this.props.application.id, formData);
    }


    render() {
        const { savingApplication, errors} = this.props;
        const { formErrors, submitted, application } = this.state;
        return (
            <div id="application-preview">
                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="uaopApplicationForm" onSubmit={this.handleSubmitApplication}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>UAOP Application</h2>
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
                                <div className="large-12 cell">
                                    <div className="question">
                                        <h6>Name:</h6>
                                        <p>{application.name}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Designation:</h6>
                                        <p>{application.designation}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Security Program Document:</h6>
                                        <p>{application.securityProgramDocName}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Insurance Document:</h6>
                                        <p>{application.insuranceDocName}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Standard Operating Procedure Document:</h6>
                                        <p>{application.sopDocName}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Land Owner Permission Document:</h6>
                                        <p>{application.landOwnerPermissionDocName}</p>
                                    </div>
                                </div>
                                { application.status === 'DRAFT' &&
                                    <div className="large-12 cell">
                                        <a className="back" onClick={this.props.previousStep}>
                                            <img src={back} alt="back"/> Go back to previous step
                                        </a>
                                        <button type="submit" className="button" name="button">Submit Application</button>

                                        {
                                           savingApplication && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                    </div>
                                }
                                { submitted &&  application.status && application.status !== 'DRAFT' &&
                                    <div className="large-12 cell">
                                        <p> Successfully Saved Application <br/></p>
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

export default UAOPApplicationStep3;