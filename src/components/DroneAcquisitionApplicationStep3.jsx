import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FooterApplicationReviewDeclaration from './FooterApplicationReviewDeclaration';
import DroneAcquisitionApplicationView from './DroneAcquisitionApplicationView';
import HeaderApplicationForm from './HeaderApplicationForm';

class DroneAcquisitionApplicationStep3 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.downloadDocument = this.downloadDocument.bind(this);
        this.state = {
            submitted: false,
            formErrors:[]
        };
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});

        var acquisitionApplication = {...this.props.applicationForm,
            status: "SUBMITTED"
        }
        this.setState({applicationForm : this.props.applicationForm});
        var formData = new FormData();
        formData.append("droneAcquisitionForm", JSON.stringify(acquisitionApplication)) ;
        this.props.updateApplication(formData, this.props.applicationForm.id )
    }

    downloadDocument(documentName) {
        this.props.downloadDocument(documentName)
    }

    render() {
        
        const { saving, applicationForm, previousStep, applicationType, step, headerText } = this.props;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={ this.handleSubmit }>
                    <div id="application-preview">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <HeaderApplicationForm headerText= { headerText } step= { step } applicationStatus = { applicationForm.status } /> 
                                <DroneAcquisitionApplicationView applicationForm = { applicationForm } type= { applicationType } downloadDocument = { this.downloadDocument } />
                                { (!applicationForm.status || applicationForm.status === 'DRAFT' ) &&
                                    <React.Fragment>
                                    <div className="large-12 cell"> 
                                        <FooterApplicationReviewDeclaration applicant = { applicationForm.applicant } type= { applicationType }/>
                                        
                                    </div>
                                    <div className="large-12 cell"> 
                                        <FooterApplicationForm  step= { step } saving={ saving } previousStep= { previousStep }/>
                                    </div>
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>  
        );
    }
}

export default DroneAcquisitionApplicationStep3;