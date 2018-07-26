import React from 'react';
import DroneDetails from './DroneDetails';
import FooterApplicationForm from './FooterApplicationForm';
import FormErrors from './FormErrors';

class DroneAcquisitionApplicationStep1 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            applicationForm: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        }
    }

    handleChange(event) {
        var { name, value } = event.target;
        value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const { applicationForm } = this.props;
        this.updateObjProp(applicationForm, value, name);
        this.setState({applicationForm: applicationForm});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }
    
    handleSubmit(event) {
        var applicationFormRefs = this.refs;
        var droneDetails = applicationFormRefs.droneDetails.refs;
        var acquisitionApplication =  {...this.props.applicationForm,
            applicant: applicationFormRefs.nameOfApplicant.value,
            applicantAddress: {
                lineOne: applicationFormRefs.applicantAddressLine1.value,
                lineTwo:  applicationFormRefs.applicantAddressLine2.value,
                city: applicationFormRefs.applicantAddressCity.value,
                state: applicationFormRefs.applicantAddressState.value,
                country: applicationFormRefs.applicantAddressCountry.value,
                pincode: applicationFormRefs.applicantAddressPincode.value
            },
            //applicantEmail: this.refs.email.value,
            //applicantAddress:
            //applicantPhone: this.
            applicantNationality: applicationFormRefs.applicantNationality.value,
            //applicantCategory: applicationFormRefs.applicantCategory.value,
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
            wingType: (droneDetails.wingType.value),
            isNew: droneDetails.isNew.checked,
            maxTakeOffWeight: droneDetails.maxTakeOffWeight.value,
            maxHeightAttainable: droneDetails.maxHeight.value,
            payloadDetails: droneDetails.payload.value,
            status: "DRAFT"
        };

        event.preventDefault();

        if( this.props.applicationForm.id ) {
            var formData = new FormData();
            formData.append("droneAcquisitionForm", JSON.stringify(acquisitionApplication)) ;
            this.props.updateForm(formData, this.props.applicationForm.id )
        }
        else {
            this.props.createForm(JSON.stringify(acquisitionApplication));
        }
    }
   
    render() {
        // const categoryOptions = this.props.categoryOptions.map(category => {
        //     return (<option value={category} key={category}> {category} </option>);
        // });

        const nationalityOptions = this.props.nationalityOptions.map(nationality => {
            return (<option value={nationality} key={nationality}> {nationality} </option>);
        });

        const { saving, saved, errors, applicationForm, step, goBack} = this.props;
        const { formErrors, submitted } = this.state;

        return (
            <div>
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>Name of Applicant
                                    <input type="text" name="nameOfApplicant" ref="nameOfApplicant" placeholder="Full Name" defaultValue= { applicationForm.applicant }/>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Address of Applicant
                                    <input type="text" name="applicantAddressLine1" ref="applicantAddressLine1"  placeholder="Address Line1" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.lineOne : undefined}/>
                                    <input type="text" name="applicantAddressLine2" ref="applicantAddressLine2" placeholder=" Address Line2" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.lineTwo : undefined}/>
                                    <input type="text" name="applicantAddressCity" ref="applicantAddressCity" placeholder="City" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.city : undefined }/>
                                    <input type="text" name="applicantAddressState" ref="applicantAddressState" placeholder="State" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.state : undefined }/>
                                    <input type="text" name="applicantAddressCountry" ref="applicantAddressCountry" placeholder="Country" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.country : undefined}/>
                                    <input type="text" name="applicantAddressPincode" ref="applicantAddressPincode" placeholder="Pincode" defaultValue= { applicationForm.applicantAddress? applicationForm.applicantAddress.pincode : undefined} />
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Nationality
                                    <select name="applicantNationality" ref="applicantNationality" value={ applicationForm.applicantNationality } onChange={ this.handleChange } >
                                        { nationalityOptions }
                                    </select>
                                </label>
                            </div>
                            {/* <div className="large-12 cell">
                                <label>Category
                                    <select name="applicantCategory" ref="applicantCategory" value= { applicationForm.applicantCategory } disabled>{ categoryOptions }</select>
                                </label>
                            </div> */}
                            <div className="large-12 cell">
                                <DroneDetails name="droneDetails" ref="droneDetails" nationalityOptions={ this.props.nationalityOptions } details = { applicationForm } onChange= { this.handleChange }/>
                            </div>
                        </div>
                    </div>
                    <FooterApplicationForm step= { step } saving= { saving} goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}

export default DroneAcquisitionApplicationStep1;