import React from 'react';
import FooterApplicationForm from './FooterApplicationForm';
import DroneSpecForm from './DroneSpecForm';
import FormErrors from './FormErrors';
import {  validateForm } from '../helpers/formValidationHelpers';

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
                droneType: {
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
            },
            fieldErrors: {}
        };
    }

    componentWillReceiveProps(nextProps){
        const { errors } = nextProps;
        const { submitted } = this.state;
        this.setState({
            formErrors: []
        });

        if (submitted && ( !errors || errors.length === 0)  &&  (nextProps.applicationForm.id !== 0)){
            this.props.nextStep();
        }
        if(!nextProps.applicationForm.empty){
            this.setState({applicationForm: nextProps.applicationForm});
        }
    }

    handleChange(event) {
        const { name, type } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            const { applicationForm } = this.props;
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
        const fieldErrors = validateForm(event.target)
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }
        this.setState({submitted: true});

        const formData = new FormData();
        if(this.state.opManualDoc){
            formData.append("opManualDoc", this.state.opManualDoc)
        }
        if(this.state.maintenanceGuidelinesDoc) {
            formData.append("maintenanceGuidelinesDoc", this.state.maintenanceGuidelinesDoc);
        }
        formData.append("uinApplication", JSON.stringify(this.state.applicationForm))
        this.props.updateApplication(formData, this.props.applicationForm.id);
    }

    render() {
        
        const { saving, previousStep, step, applicationForm, droneTypes, selectedDroneTypeId, operatorDroneId, errors, deviceIds} = this.props;
        const { opManualDoc, maintenanceGuidelinesDoc } = this.state;
        const isReadOnly = true;
        
        if(applicationForm.uniqueDeviceId && !deviceIds.find(id => String(id) === String(applicationForm.uniqueDeviceId))) {
            deviceIds.push(applicationForm.uniqueDeviceId);
        }

        let deviceIdSelectOptions = deviceIds.map(option => {
            return (<option value={ option } key={ option }> { option } </option>)
        });
            
        return (
            <div className="page-form">
                <FormErrors errors = {errors}/>
                <form name="uinApplicationForm" onSubmit={this.handleSaveApplication}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>UniqueDevice Id
                                <select name="uniqueDeviceId" value={ applicationForm.uniqueDeviceId }  onChange={ this.handleChange } >
                                    { (!applicationForm.uniqueDeviceId) && <option default key="-1" value="-1">Select</option> }
                                    { deviceIdSelectOptions }
                                </select>
                                </label>
                            </div>
                            <DroneSpecForm name="droneSpec"
                                         application = { applicationForm }
                                         droneTypes = { droneTypes }
                                         selectedDroneTypeId =  { selectedDroneTypeId }
                                         operatorDroneId = { operatorDroneId }
                                         isReadOnly = { isReadOnly }
                                         onChange= { this.handleChange }
                                         updateDroneDetails= { this.updateDroneDetails }
                                         droneTypeDisabled = "true"
                            />
                            <div className="large-12 cell">
                                <label>Enter previous UIN, if applicable
                                    <input type="text" name="previousUIN" placeholder="previous UIN" value= { applicationForm.previousUIN } onChange={ this.handleChange }/>
                                </label>
                            </div>
                            <div className="help-wrap">
                                <label>Copy of Remotely Piloted Aircraft Flight Manual/Manufacturer’s Operating Manual (as applicable)
                                    <p>{ (opManualDoc && opManualDoc.name)   || applicationForm.opManualDocName }</p>
                                </label>
                                <label htmlFor="opManualDoc" className="button button-file-upload">Upload File</label>
                                <input type="file" id="opManualDoc" name="opManualDoc" className="show-for-sr" onChange={ this.handleChange } accept=".pdf"/>
                            </div>
                            <div className="help-wrap">
                                <label>Copy of Manufacturer’s Maintenance guidelines (as applicable)
                                    <p>{ (maintenanceGuidelinesDoc && maintenanceGuidelinesDoc.name) || applicationForm.maintenanceGuidelinesDocName}</p>
                                </label>
                                <label htmlFor="maintenanceGuidelinesDoc" className="button button-file-upload">Upload File</label>
                                <input type="file" id="maintenanceGuidelinesDoc" name="maintenanceGuidelinesDoc" className="show-for-sr" onChange={ this.handleChange } accept=".pdf"/>
                            </div>
                            <div className="help-wrap">
                                <label>History of incidents/accidents (if any) along with nature and extent of damage sustained by the RPA and details of any repairs carried out </label>
                                <textarea name="incidentHistory" rows="3" value= { applicationForm.incidentHistory } onChange={ this.handleChange }/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <FooterApplicationForm step= { step } saving= { saving } previousStep= { previousStep }/>
                </form>
            </div>  
        );
    }
}   

export default UINApplicationStep2;