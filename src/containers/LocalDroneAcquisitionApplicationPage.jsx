import React from 'react';
import { connect } from 'react-redux';

import LocalDroneAcquisitionApplicationStep1 from '../components/LocalDroneAcquisitionApplicationStep1';
import LocalDroneAcquisitionApplicationStep2 from '../components/LocalDroneAcquisitionApplicationStep2';
import LocalDroneAcquisitionApplicationReview from '../components/LocalDroneAcquisitionApplicationReview';
import FooterApplicationForm from '../components/FooterApplicationForm';
import HeaderApplicationForm from '../components/HeaderApplicationForm';
import Dashboard from '../components/Dashboard';

import { createLocalDroneAcquisitionApplicationAction } from '../actions/localDroneAcquisitionApplicationCreateActions';
import { editLocalDroneAcquisitionApplicationAction } from '../actions/localDroneAcquisitionApplicationEditActions';
import { formStepReduceAction } from '../actions/applicationFormStepActions';


class LocalDroneAcquisitionApplicationPage extends React.Component {
   
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeStep = this.removeStep.bind(this);
        this.state = {
            categoryOptions : ['EXISTING_UAOP_HOLDER','UAOP_APPLICANT','WITHOUT_UAOP'],
            modeOfAcquisitionOptions : ['LEASE', 'PURCHASE'],
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            formErrors:[]
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({saved: false});
        this.setState({formErrors: []});
    }

    removeStep(dispatch) {
        this.props.dispatch(formStepReduceAction());
    }

    handleSubmit(event) {
        event.preventDefault();
        var applicationFormRefs = {} ;
        var droneDetails = {} ;
        var acquisitionApplication;
        var action ;
        if( this.props.step === 1 ) {
            applicationFormRefs = this.refs.applicationStep1.refs;
            droneDetails = applicationFormRefs.droneDetails.refs;
            acquisitionApplication =  {...this.props.currentApplicationForm,
                applicant: applicationFormRefs.nameOfApplicant.value,
                applicantAddress: {
                    lineOne: applicationFormRefs.applicantAddressLine1.value,
                    lineTwo:  applicationFormRefs.applicantAddressLine2.value,
                    city: applicationFormRefs.applicantAddressCity.value,
                    state: applicationFormRefs.applicantAddressState.value,
                    country: applicationFormRefs.applicantAddressCountry.value,
                    pincode: applicationFormRefs.applicantAddressPincode.value
                },
                lastModifiedDate: Date.now(),
                //applicantEmail: this.refs.email.value,
                //applicantAddress:
                //applicantPhone: this.
                applicantNationality: applicationFormRefs.applicantNationality.value,
                applicantCategory: applicationFormRefs.applicantCategory.value,
                manufacturer: droneDetails.nameOfManufacturer.value,
                manufacturerAddress: {  
                    lineOne: droneDetails.manufacturerAddressLine1.value,
                    lineTwo:  droneDetails.manufacturerAddressLine2.value,
                    city: droneDetails.manufacturerAddressCity.value,
                    state: droneDetails.manufacturerAddressState.value,
                    country: droneDetails.manufacturerAddressCountry.value,
                    pincode: droneDetails.manufacturerAddressPincode.value
                },
                modelNo: droneDetails.modelNo.value,
                serialNo: droneDetails.serialNo.value,
                dateOfManufacture: droneDetails.dateOfManufacture.value,
                yearOfManufacture: new Date(droneDetails.dateOfManufacture.value).getFullYear(),
                fixedWing: (droneDetails.wingType.value === "Fixed" ? true : false),
                isNew: droneDetails.isNew.checked,
                maxTakeOffWeight: droneDetails.maxTakeOffWeight.value,
                maxHeightAttainable: droneDetails.maxHeight.value,
                payloadDetails: droneDetails.payload.value,
                status: "DRAFT"
            };
    }
    else if ( this.props.step === 2 ) {
        applicationFormRefs = this.refs.applicationStep2.refs;
        
        acquisitionApplication= {...this.props.currentApplicationForm,
            purposeOfOperation: applicationFormRefs.purpose.value,
            proposedBaseOfOperation: applicationFormRefs.baseOfOperation.value,
            acquisitionMode: applicationFormRefs.modeOfAcquisition.value,
            owner: applicationFormRefs.owner.value,
            ownerAddress: {  
                lineOne: applicationFormRefs.ownerAddressLine1.value,
                lineTwo:  applicationFormRefs.ownerAddressLine2.value,
                city: applicationFormRefs.ownerAddressCity.value,
                state: applicationFormRefs.ownerAddressState.value,
                country: applicationFormRefs.ownerAddressCountry.value,
                pincode: applicationFormRefs.ownerAddressPincode.value
            },
            //securityClearanceDoc: applicationFormRefs.securityClearanceDoc,
            status: "DRAFT",
            lastModifiedDate: Date.now(),
            //etaClearanceDoc: applicationFormRefs.etaClearanceDoc.value
        };
    }
    else if ( this.props.step === 3 ) {
        acquisitionApplication = {...this.props.currentApplicationForm,
            status: "SUBMITTED",
            submittedDate: Date.now(),
            lastModifiedDate: Date.now(),
        }
    }
        
        // const acquisitionApplication =  {
        //     submittedDate : "2018",
        //      status: "DRAFT"
        //     applicant : "Archana",
        //     applicantType : "INDIVIDUAL",
        //     status : "DRAFT",
            // applicantAddress : { 
            //     lineOne : "House no:23",
            //     lineTwo :  "Some Apartment",
            //     city : "Bangalore", 
            //     country : "India" 
            // },
            // applicantEmail : "archana@someorganisation.com",
            // applicantPhone : "8898009090",
            // applicantNationality : "Indian",
            // manufacturer : "Some Drone Manufacturer",
            // modelNo : "xyz",
            // serialNo : "111",
            // dateOfManufacture : "2008-02-12",
            // yearOfManufacture : "2008",
            // fixedWing : "true",
            // new : "true",
            // maxTakeOffWeight: "100.0",
            // maxHeightAttainable : "500",
            // payloadDetails : "None",
            //acquisitionMode : "LEASE",
            // purposeOfOperation : "Educational",
            // proposedBaseOfOperation : "Haryana"
        // }
    
        if( this.props.currentApplicationForm.id ) {
            action = editLocalDroneAcquisitionApplicationAction;
        }
        else {
            action = createLocalDroneAcquisitionApplicationAction;
        }
        this.props.dispatch(action(acquisitionApplication)); 
        }
    
    render() {
        const { saving, errors, currentApplicationForm, step } = this.props;
        const { formErrors } = this.state;

        return (
            <div className="page-form">
                { errors && errors.length > 0 && <p>{errors.toString()}</p> }
                { formErrors && formErrors.length > 0 && <p>{formErrors.toString()}</p> }
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <HeaderApplicationForm applicationType="Acquiring Local Drones" step= { step }/>   
                        {(() => {
                            switch(step) {
                                case 1: 
                                    return(<LocalDroneAcquisitionApplicationStep1 name="applicationStep1" ref="applicationStep1"
                                        categoryOptions={ this.state.categoryOptions } 
                                        modeOfAcquisitionOptions={ this.state.modeOfAcquisitionOptions } 
                                        nationalityOptions={ this.state.nationalityOptions }
                                        saving={ saving } errors={ errors } applicationForm={ currentApplicationForm }/>);
                                case 2:
                                    return(<LocalDroneAcquisitionApplicationStep2 name="applicationStep2" ref="applicationStep2"
                                        categoryOptions={ this.state.categoryOptions } 
                                        modeOfAcquisitionOptions={ this.state.modeOfAcquisitionOptions } 
                                        nationalityOptions={ this.state.nationalityOptions }
                                        saving={ saving } errors={ errors } applicationForm={ currentApplicationForm }/>);
                                case 3:
                                    return(<LocalDroneAcquisitionApplicationReview name="applicationReview" applicationForm={ currentApplicationForm }/>);  
                                case 4: return(<Dashboard />)
                                default: 
                                    return(<LocalDroneAcquisitionApplicationStep1 name="applicationStep1" ref="applicationStep1" categoryOptions={ this.state.categoryOptions } 
                                        modeOfAcquisitionOptions={ this.state.modeOfAcquisitionOptions } 
                                        nationalityOptions={ this.state.nationalityOptions }
                                        saving={ saving } errors={ errors } />);
                            }
                        })()}
                    <FooterApplicationForm goBack={ this.removeStep }  step= { step }/>
                </form>
            </div>  
        );
    }
}

function mapStateToProps(state) {
    const { saving, saved, errors, currentApplicationForm } = state.saveLocalDroneAcquisitionApplication;
    const { step } = state.formStepChange
    return {
       saving,
       saved,
       errors,
       currentApplicationForm,
       step
    };
}

export default connect(
 mapStateToProps
)(LocalDroneAcquisitionApplicationPage)
