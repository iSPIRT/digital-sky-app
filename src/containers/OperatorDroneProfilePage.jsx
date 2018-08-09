import React from 'react';
import imgLocation from '../img/temp/drone2.jpg';

import queryString from 'query-string';
import { userService } from '../services/userService';

class OperatorDroneProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {operatorDroneProfile: null};
        const queryParams = queryString.parse(this.props.location.search);
        const operatorDroneId = queryParams.id;
        if( operatorDroneId ){
            userService.loadDrone(operatorDroneId).then(
                drone => {
                  this.setState({operatorDroneProfile: drone});
                },
                errors => {
                  this.setState({errors: errors});
                });
        }
    }

    render(){

        const {operatorDroneProfile} = this.state;

        if(!operatorDroneProfile) return null;

        return (
            <div id="drone-profile">
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                        <div class="large-12 cell">
                            <div class="drone-image">
                                <img src={imgLocation} alt="" />
                            </div>
                            <h2> {operatorDroneProfile.droneType.modelName}</h2>
                            <div class="drone-meta">
                                <p><strong>Model Number:</strong> {operatorDroneProfile.droneType.modelNo}</p>
                                <p><strong>Date of registration:</strong> {operatorDroneProfile.droneType.dateOfRegistration}</p>
                                <p><strong>UIN Number:</strong> {operatorDroneProfile.droneType.UINNo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperatorDroneProfilePage;