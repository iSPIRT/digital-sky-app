import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FooterApplicationReviewDeclaration from './FooterApplicationReviewDeclaration';
//import FormErrors from './FormErrors';
import DroneAcquisitionApplicationView from './DroneAcquisitionApplicationView';

class DroneAcquisitionApplicationReview extends React.Component {

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
        var acquisitionApplication = {...this.props.applicationForm,
            status: "SUBMITTED"
        }
        event.preventDefault();

        var formData = new FormData();
        formData.append("droneAcquisitionForm", JSON.stringify(acquisitionApplication)) ;
        this.props.updateForm(formData, this.props.applicationForm.id )
    }

    downloadDocument() {
        this.props.downloadDocument(this.props.applicationForm.id,"securityClearanceDocument")
    }

    render() {
        
        const { saving, applicationForm, goBack, applicationType} = this.props;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={ this.handleSubmit }>
                    <div id="application-preview">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <DroneAcquisitionApplicationView applicationForm = { applicationForm } type= { applicationType } />
                            </div>
                        </div>
                    </div>
                    <FooterApplicationReviewDeclaration applicant = { applicationForm.applicant } type= { applicationType }/>
                    <FooterApplicationForm  step= { this.props.step } saving={ saving } goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default DroneAcquisitionApplicationReview;