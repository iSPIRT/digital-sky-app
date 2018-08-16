import React from 'react';
import { connect } from 'react-redux'

import DroneProfileForm from '../components/DroneProfileForm';

import { loadMetaDataAction } from '../actions/metaDataActions';
import { createDroneProfileAction, updateDroneProfileAction} from '../actions/droneProfileActions';

import queryString from 'query-string';

class DroneProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch(loadMetaDataAction());
        const droneTypeId = queryString.parse(this.props.location.search).id;
        this.state = {
            nationalityOptions : ['Indian', 'Chinese', 'Korean'],
            droneTypeId: droneTypeId
        }
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }

    create(droneTypeFormData) {
        this.props.dispatch(createDroneProfileAction(droneTypeFormData));
    }

    update(droneTypeFormData, id) {
        this.props.dispatch(updateDroneProfileAction(droneTypeFormData, id));
    }

    render() {
       
        const { errors, droneTypes, saving, saved} = this.props;
        const { nationalityOptions, droneTypeId} = this.state;
        return <DroneProfileForm droneTypes = {droneTypes} 
                errors = {errors} 
                nationalityOptions = {nationalityOptions} 
                selectedDroneTypeId = {droneTypeId}
                create = {this.create}
                update = {this.update}
                saving = {saving}
                saved = {saved}
            />
    }
}   

function mapStateToProps(state) {
     const { errors, droneTypes } =  state.metaData;
     const { saving, saved } = state.droneProfile;
     return {
        errors,
        droneTypes,
        saving,
        saved
     };
}

export default connect(
  mapStateToProps
)(DroneProfilePage)