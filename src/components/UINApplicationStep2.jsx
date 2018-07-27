import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import DroneSpec from './DroneSpec';

class UINApplicationStep2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            applicationForm : {
                droneCategoryType : "",
                regionOfOperation: "",
                purposeOfOperation: "",
                engineType: "",
                enginePower: "",
                engineCount: "",
                fuelCapacity: "",
                propellerDetails: "",
                dimensions: {
                    length: "",
                    breadth: "",
                    height: ""
                },
                maxEndurance: "",
                maxRange: "",
                maxSpeed: "",
                maxHeightAttainable: "",
                maxHeightOfOperation:"",
            }
        };
    }

    componentWillReceiveProps(nextProps){
       // const { applicationForm, errors } = nextProps;
       // const {submitted } = this.state;
        // if (submitted && ( !errors || errors.length === 0)  &&  (applicationForm.id !== 0)){
        //     this.props.nextStep();
        // }
        this.setState({formErrors: []});
        this.setState({applicationForm: nextProps.applicationForm});
    }

    handleChange(event) {
        const { name, type } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { applicationForm } = this.state;
            this.updateObjProp(applicationForm, value, name);
            this.setState({applicationForm: applicationForm});
        }
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');
        
        !rest.length
            ? obj[head]= value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSaveApplication(event) {
        event.preventDefault();
        this.setState({submitted: true});

        const formData = new FormData();
        formData.append("opManualDoc", this.state.opManualDoc)
        formData.append("maintenanceGuidelinesDoc", this.state.maintenanceGuidelinesDoc)
        formData.append("uinApplication", JSON.stringify(this.state.applicationForm))
       
        this.props.updateForm(formData, this.props.applicationForm.id);
    }

    render() {
    
        const { nationalityOptions, saving, goBack, step} = this.props
        const { opManualDoc, maintenanceGuidelinesDoc, applicationForm } = this.state;
        return (
            <div className="page-form">
                {/* <FormErrors errors = {errors}/>
                <FormErrors errors = {formErrors}/> */}
                <form name="uinApplicationForm" onSubmit={this.handleSaveApplication}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <DroneSpec name="droneSpec" nationalityOptions={ nationalityOptions } applicationForm = { applicationForm } onChange= { this.handleChange }/>
                            </div>
                            {/* <div className="large-12 cell">
                                <label> Select applicable
                                    <select multiple onChange={ this.handleChange }>
                                        <option value="hasGNSS">GNSS (GPS) for horizontal and vertical position fixing</option>
                                        <option value="hasAutonomousFlightTerminationSystem">Autonomous Flight Termination System or Return Home (RH) option</option>
                                        <option value="hasFlashingAntiCollisionStrobeLights">Flashing anti-collision strobe lights</option>
                                        <option value="hasRFID_GSM_SIMCard">RFID and GSM SIM Card/ NPNT compliant for APP based real time tracking (except for Nano and Micro category)</option>
                                        <option value="hasFlightController">Flight Controller with flight data logging capability</option>
                                    </select>
                                </label>
                            </div> */}
                            <div className="large-12 cell">
                                <label>Enter previous UIN, if applicable
                                    <input type="text" name="previousUIN" placeholder="previous UIN" value= { applicationForm.previousUIN } onChange={ this.handleChange }/>
                                </label>
                            </div>
                            <div className="help-wrap">
                                <label>Copy of Remotely Piloted Aircraft Flight Manual/Manufacturer’s Operating Manual (as applicable)
                                    <span>{ opManualDoc && opManualDoc.name }</span>
                                </label>
                                <label htmlFor="opManualDoc" className="button button-file-upload">Upload File</label>
                                <input type="file" id="opManualDoc" name="opManualDoc" className="show-for-sr" onChange={ this.handleChange }/>
                            </div>
                            <div className="help-wrap">
                                <label>Copy of Manufacturer’s Maintenance guidelines (as applicable)
                                    <span>{ maintenanceGuidelinesDoc && maintenanceGuidelinesDoc.name }</span>
                                </label>
                                <label htmlFor="maintenanceGuidelinesDoc" className="button button-file-upload">Upload File</label>
                                <input type="file" id="maintenanceGuidelinesDoc" name="maintenanceGuidelinesDoc" className="show-for-sr" onChange={ this.handleChange }/>
                            </div>
                            <div className="help-wrap">
                                <label>History of incidents/accidents (if any) along with nature and extent of damage sustained by the RPA and details of any repairs carried out </label>
                                <textarea name="incidentHistory" rows="3" value= { applicationForm.incidentHistory } onChange={ this.handleChange }/>
                            </div>
                        </div>
                    </div>
                    <FooterApplicationForm step= { step } saving= { saving } goBack= { goBack }/>
                </form>
            </div>  
        );
    }
}   

export default UINApplicationStep2;