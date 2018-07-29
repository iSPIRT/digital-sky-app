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
        event.preventDefault();
        
        var acquisitionApplication = {...this.props.applicationForm,
            status: "SUBMITTED"
        }

        var formData = new FormData();
        formData.append("droneAcquisitionForm", JSON.stringify(acquisitionApplication)) ;
        console.log(formData);
        this.props.updateForm(formData, this.props.applicationForm.id )
    }

    downloadDocument(documentName) {
        this.props.downloadDocument(documentName)
    }

    render() {
        
        const { saving, applicationForm, goBack, applicationType, step } = this.props;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={ this.handleSubmit }>
                    <div id="application-preview">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <DroneAcquisitionApplicationView applicationForm = { applicationForm } type= { applicationType } downloadDocument = { this.downloadDocument } />
                            </div>
                        </div>
                    </div>
                    <FooterApplicationReviewDeclaration applicant = { applicationForm.applicant } type= { applicationType }/>
                    <FooterApplicationForm  step= { step } saving={ saving } goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default DroneAcquisitionApplicationReview;