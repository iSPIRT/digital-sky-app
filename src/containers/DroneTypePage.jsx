import React from 'react';
import { connect } from 'react-redux'

import DroneTypeForm from '../components/DroneTypeForm';

import { loadMetaDataAction } from '../actions/metaDataActions';
import { createDroneTypeAction, updateDroneTypeAction} from '../actions/droneTypeActions';

import queryString from 'query-string';

class DroneTypePage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(loadMetaDataAction());
        const droneTypeId = queryString.parse(this.props.location.search).id;
        this.state = {
            droneTypeId: droneTypeId
        }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }

    create(droneTypeFormData) {
        this.props.dispatch(createDroneTypeAction(droneTypeFormData));
    }

    update(droneTypeFormData, id) {
        this.props.dispatch(updateDroneTypeAction(droneTypeFormData, id));
    }

    render() {
       
        const { errors, droneTypes, saving, saved, droneType} = this.props;
        const { droneTypeId } = this.state;
        return <DroneTypeForm droneTypes = {droneTypes} 
                errors = {errors} 
                selectedDroneTypeId = {droneTypeId}
                create = {this.create}
                update = {this.update}
                saving = {saving}
                saved = {saved}
                savedDroneType = {droneType}
            />
    }
}   

function mapStateToProps(state) {
     const { errors, droneTypes } =  state.metaData;
     const { saving, saved, droneType } = state.droneType;
     return {
        errors,
        droneTypes,
        saving,
        saved,
        droneType
     };
}

export default connect(
  mapStateToProps
)(DroneTypePage)