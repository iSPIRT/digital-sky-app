import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import FooterApplicationReviewDeclaration from './FooterApplicationReviewDeclaration';
import FormErrors from './FormErrors';

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
        
        const { saving, saved, errors, application, goBack} = this.props;
        const isNew = application.isNew? "Yes": "No";
        const wingType = application.fixedWing? "Fixed": "Rotary";
        const { formErrors, submitted } = this.state;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="uinApplicationForm" onSubmit={ this.handleSubmit }>
                    <div id="application-preview">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <div className="question">
                                        <h6>Copy of import permission / filled proforma for information of local acquisition </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.importPermissionDocName)}>{application.importPermissionDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of CIN  </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.cinDocName)}>{application.cinDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of GSTIN  </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.gstinDocName)}>{application.gstinDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of PanCard  </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.panCardDocName)}>{application.panCardDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of security clearance from MHA or self-attested copies of at least two out of three valid identity proofs viz. Passport, Driving License or Aadhar Card </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.securityClearanceDocName)}>{application.securityClearanceDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of Permission/ license from WPC Wing, Department of Telecommunication for usage of licensed frequencies used in RPA. (as applicable) </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.dotPermissionDocName)}>{application.dotPermissionDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Copy of ETA from WPC Wing, Department of Telecommunication for RPA operating in de-licensed frequency band(s) (as applicable) </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.etaDocName)}>{application.etaDocName}</a>
                                    </div>
                                    <div className="question">
                                        <h6>Details of fees paid </h6>
                                        <p> { application.feeDetails } </p>
                                    </div>
                                    <div className="question">
                                        <h6>Name of Manufacturer:</h6>
                                        <p>{application.manufacturer}</p> 
                                    </div>
                                    <div className="question">
                                        <h6>Address of Manufacturer:</h6>
                                        { application.manufacturerAddress ?
                                            (<p>{ application.manufacturerAddress.lineOne } <br/>
                                            { application.manufacturerAddress.lineTwo } <br/>
                                            { application.manufacturerAddress.city } <br/>
                                            { application.manufacturerAddress.state }   <br/>
                                            { application.manufacturerAddress.pincode } <br/>
                                            { application.manufacturerAddress.country }<br/>
                                            </p>) : <p> </p>
                                        }
                                    </div>
                                    <div className="question">
                                        <h6>Nationality of Manufacturer:</h6>
                                        <p>{ application.manufacturerNationality }</p> 
                                    </div >
                                    <div className="question">
                                        <h6>Model No:</h6>
                                        <p>{ application.modelNo }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Sl No:</h6>
                                        <p>{ application.serialNo }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Date of Manufacture:</h6>
                                        <p>{ application.dateOfManufacture }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Year of Manufacture:</h6>
                                        <p>{ application.yearOfManufacture }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Wing type:</h6>
                                        <p>{ wingType }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Is New:</h6>
                                        <p>{ isNew }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Maximum take-off weight (including Payload) in kgs:</h6>
                                        <p>{ application.maxTakeOffWeight }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Maximum height attainable in metres:</h6>
                                        <p>{ application.maxHeightAttainable }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Details of compatible payload:</h6>
                                        <p>{ application.payloadDetails }</p>
                                    </div>
                                    <div className="question">
                                        <h6>Category of RPA: </h6>
                                        <p>{ application.rpaCategory }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Place & region of operation as per AAI FIR: </h6>
                                        <p>{ application.regionOfOperation }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Purpose of operation:</h6>
                                        <p>{ application.purposeOfOperation }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Engine/Motor Type: </h6>
                                        <p>{ application.engineType }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Engine/Motor Power Rating in (kW): </h6>
                                        <p>{ application.motorPower } </p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>No of Engines/Motors: </h6>
                                        <p>{ application.engineCount }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Total fuel capacity (kg)/Battery capacity (mAh): </h6>
                                        <p>{ application.fuelCapacity }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Propeller details: </h6>
                                        <p>{ application.propellerDetails }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Overall dimensions (l x b x h):</h6>
                                        <p>{ application.dimension_l } x { application.dimension_b } x { application.dimension_h }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Maximum Endurance (in minutes):</h6>
                                        <p>{ application.maxEndurance }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Maximum Range (in metres):</h6>
                                        <p>{ application.maxRange }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Maximum Speed (in kmph)s:</h6>
                                        <p>{ application.maxSpeed }</p>
                                    </div>
                                    <div className="large-12 cell">
                                        <h6>Maximum height of operations required (in metres): </h6>
                                        <p>{ application.maxHeightOfOperation }</p>
                                    </div> 
                                    <div className="large-12 cell">
                                        <h6>Enter previous UIN, if applicable : </h6>
                                        <p>{ application.previousUIN }</p>
                                    </div>
                                    <div className="help-wrap">
                                        <h6>Copy of Remotely Piloted Aircraft Flight Manual/Manufacturer’s Operating Manual (as applicable): </h6>
                                        <a onClick={(e) =>  this.downloadDocument(application.opManualDocName)}>{application.opManualDocName}</a>
                                    </div>
                                    <div className="help-wrap">
                                        <h6>Copy of Manufacturer’s Maintenance guidelines (as applicable): </h6> 
                                        <a onClick={(e) =>  this.downloadDocument(application.maintenanceGuidelinesDocName)}>{application.maintenanceGuidelinesDocName}</a>
                                    </div>
                                    <div className="help-wrap">
                                        <h6>History of incidents/accidents (if any) along with nature and extent of damage sustained by the RPA and details of any repairs carried out: </h6>
                                        <p> { application.incidentHistory} </p>
                                    </div>
                                </div>
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