import React from 'react';
import DroneDetails from './DroneDetails';
import FooterApplicationForm from './FooterApplicationForm';
//import FormErrors from './FormErrors';

class DroneAcquisitionApplicationStep1 extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            applicationForm: {
                applicantAddress:
                    {
                        lineOne: '',
                        lineTwo: '',
                        city: '',
                        state: '',
                        country: '',
                        pinCode: ''
                    },
                manufacturerAddress:
                    {
                        lineOne: '',
                        lineTwo: '',
                        city: '',
                        state: '',
                        country: '',
                        pinCode: ''
                    }
                
            }
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
        event.preventDefault();
        var applicationString = JSON.stringify(this.state.applicationForm);

        if( this.props.applicationForm.id ) {
            var formData = new FormData();
            formData.append("droneAcquisitionForm", applicationString) ;
            this.props.updateForm(formData, this.props.applicationForm.id )
        }
        else {
            this.props.createForm(applicationString);
        }
    }
   
    render() {
        // const categoryOptions = this.props.categoryOptions.map(category => {
        //     return (<option value={category} key={category}> {category} </option>);
        // });

        const nationalityOptions = this.props.nationalityOptions.map(nationality => {
            return (<option value={nationality} key={nationality}> {nationality} </option>);
        });

        const { saving, applicationForm, step, goBack} = this.props;
       // const { formErrors, submitted } = this.state;

        return (
            <div>
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="localDroneAcquisitionApplicationForm" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>Name of Applicant
                                    <input type="text" name="applicant" ref="applicant" placeholder="Full Name" defaultValue= { applicationForm.applicant } onChange= { this.handleChange }/>
                                </label>
                            </div>
                            {/* <div className="large-12 cell">
                                <label>Address of Applicant
                                    <input type="text" name="applicantAddress.lineOne" ref="applicantAddress.lineOne"  placeholder="Address Line1" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.lineOne } onChange= { this.handleChange }/>
                                    <input type="text" name="applicantAddress.lineTwo" ref="applicantAddress.lineTwo" placeholder=" Address Line2" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.lineTwo } onChange= { this.handleChange }/>
                                    <input type="text" name="applicantAddress.city" ref="applicantAddress.city" placeholder="City" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.city } onChange= { this.handleChange }/>
                                    <input type="text" name="applicantAddress.state" ref="applicantAddress.state" placeholder="State" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.state } onChange= { this.handleChange } />
                                    <input type="text" name="applicantAddress.country" ref="applicantAddress.country" placeholder="Country" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.country } onChange= { this.handleChange } />
                                    <input type="text" name="applicantAddress.pincode" ref="applicantAddress.pincode" placeholder="Pincode" defaultValue= { applicationForm.applicantAddress && applicationForm.applicantAddress.pincode } onChange= { this.handleChange } />
                                </label>
                            </div> */}
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