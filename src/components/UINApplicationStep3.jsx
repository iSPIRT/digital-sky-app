import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FooterApplicationReviewDeclaration from './FooterApplicationReviewDeclaration';
//import FormErrors from './FormErrors';
import UINApplicationView from './UINApplicationView';

class UINApplicationStep3 extends React.Component {

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
        
        var applicationForm = {...this.props.applicationForm,
            status: "SUBMITTED"
        }
        this.setState({applicationForm : this.props.applicationForm });

        var formData = new FormData();
        formData.append("uinApplication", JSON.stringify(applicationForm)) ;
        this.props.updateApplication(formData, this.props.applicationForm.id );
    }

    downloadDocument(documentName){
        this.props.downloadDocument(documentName);
    }

    render() {
        
        const { saving, applicationForm, previousStep, step} = this.props;
        const { submitted } = this.state;
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
                    { (!applicationForm.status || applicationForm.status === 'DRAFT' ) &&
                        <div className="large-12 cell"> 
                            <FooterApplicationReviewDeclaration applicant = { applicationForm.applicant } type="uin"/>
                            <FooterApplicationForm  step= { step } saving={ saving } previousStep= { previousStep }/>
                        </div>
                    }
                </form>
            </div>  
        );
    }
}

export default UINApplicationStep3;