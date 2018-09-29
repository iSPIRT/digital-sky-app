import React from 'react';

import DroneSpecForm from './DroneSpecForm';

import { validateField, validateForm } from '../helpers/formValidationHelpers';

class DroneProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.updateDroneSpec = this.updateDroneSpec.bind(this);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.validateField = this.validateField.bind(this);
        this.state = {
            submitted : false,
            selectedDroneType: {
                manufacturerAddress: {
                    lineOne: '',
                    lineTwo: '',
                    city: '',
                    state: '',
                    country: '',
                    pinCode: ''
                },
                dimensions : {
                    length : 0,
                    breadth: 0,
                    height : 0
                }
            },
            fieldErrors : {}
        }
    }

    componentWillReceiveProps(nextProps) {
       
        if(this.props.selectedDroneTypeId) {
            if(nextProps.droneTypes.length > 0) {
                var selectedDroneTypes=  nextProps.droneTypes.filter( droneType => droneType.id === Number(this.props.selectedDroneTypeId) );
                this.setState({selectedDroneType: selectedDroneTypes[0]});
            }
            return; 
        }

        if(this.props.savedDroneType && this.props.savedDroneType.id && this.props.savedDroneType.id >0 ) {
            this.setState({selectedDroneType: this.props.savedDroneType});
            return;
        }
    }

    validateField(target) {
        this.setState({fieldErrors: validateField(this.state.fieldErrors, target)})
    }

    handleChange(event) {
        const { name, type, value } = event.target; 
        var selectedDroneType = this.state.selectedDroneType;
        if( type === 'file'){
            this.setState({[name]: event.target.files[0]});
        } else {
            this.updateObjProp(selectedDroneType, value, name);
            this.setState({selectedDroneType: selectedDroneType});
        }
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');
        
        !rest.length
            ? obj[head]= value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    updateDroneSpec(droneDetails) {
        this.setState({selectedDroneType: droneDetails});
        if(this.props.updateDroneDetails) {
            this.props.updateDroneDetails(droneDetails);
        }
    }

    handleSaveApplication(event) {
        event.preventDefault();
        const fieldErrors = validateForm(event.target);
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }
        this.setState({submitted: true});

        const formData = new FormData();
        if(this.state.opManualDoc) {
            formData.append("opManualDoc", this.state.opManualDoc)
        }

        if(this.state.maintenanceGuidelinesDoc) {
            formData.append("maintenanceGuidelinesDoc", this.state.maintenanceGuidelinesDoc);
        }
        formData.append("droneType", JSON.stringify(this.state.selectedDroneType));

        if(this.props.selectedDroneTypeId !== undefined ) {
            this.props.update(formData, this.props.selectedDroneTypeId);
        } else {
            this.props.create(formData);
        }
    }

    render() {
        const { saving, droneTypes, selectedDroneTypeId, saved, errors} = this.props
        const { selectedDroneType, submitted, fieldErrors } = this.state;
 
        const isReadOnly = false;
       
        return (
            <div className="page-form">
                <form name="droneTypeProfileForm" onSubmit={this.handleSaveApplication}>
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <DroneSpecForm name="droneSpec" 
                                        droneTypes = { droneTypes }
                                        selectedDroneTypeId =  { selectedDroneTypeId }
                                        isReadOnly = { isReadOnly }
                                        onChange= { this.handleChange }  
                                        droneType = { selectedDroneType }
                                        updateDroneDetails= { this.updateDroneDetails } 
                                        fieldErrors = { fieldErrors }
                                        validateField =  { this.validateField }
                                />
                            </div>
                            <div className="large-6 cell">
                                { submitted && ( !errors || errors.length === 0)  &&  saved && <p> Successfully Saved Drone Profile <br/></p>}
                                    <button type="submit" className="button" name="button">Submit</button>
                                    {
                                       saving && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        )
    }
}

export default DroneProfileForm;