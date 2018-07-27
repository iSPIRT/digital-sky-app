import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FooterApplicationReviewDeclaration from './FooterApplicationReviewDeclaration';
//import FormErrors from './FormErrors';
import UINApplicationView from './UINApplicationView';

class UINApplicationReview extends React.Component {

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
        var applicationForm = {...this.props.applicationForm,
            status: "SUBMITTED"
        }
        event.preventDefault();

        var formData = new FormData();
        formData.append("uinApplication", JSON.stringify(applicationForm)) ;
        this.props.updateForm(formData, this.props.applicationForm.id );
    }

    downloadDocument(documentName){
        this.props.downloadDocument(documentName);
    }

    render() {
        
        const { saving, applicationForm, goBack} = this.props;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="uinApplicationForm" onSubmit={ this.handleSubmit }>
                    <div id="application-preview">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <UINApplicationView application= { applicationForm } downloadDocument = { this.downloadDocument } />
                            </div>
                        </div>
                    </div>
                    <FooterApplicationReviewDeclaration applicant = { this.props.applicationForm.applicant } type="uin"/>
                    <FooterApplicationForm  step= { this.props.step } saving={ saving } goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default UINApplicationReview;