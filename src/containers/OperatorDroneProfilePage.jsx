import React from 'react';

import { connect } from 'react-redux';

import imgLocation from '../img/temp/drone2.jpg';

import queryString from 'query-string';
import { userService } from '../services/userService';

class OperatorDroneProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.getRedirectLink = this.getRedirectLink.bind(this);
        
        const queryParams = queryString.parse(this.props.location.search);
        const operatorDroneId = queryParams.id;
        this.state= {operatorDroneId : operatorDroneId};

        if(this.props.drones) {
            var currentDrone = this.props.drones.find(drone => drone.id === operatorDroneId);
            if(currentDrone) {
                this.state = {...{operatorDroneProfile: currentDrone}};
            }
        }
    }

    componentWillMount() {
        if(this.state.operatorDroneProfile == undefined) {
            userService.loadDrone(this.state.operatorDroneId).then(
                currentDrone => {
                  this.setState({...{operatorDroneProfile: currentDrone}});
                },
                errors => {
                  this.setState({...{errors: errors}});   
                });
        } 
    }

    getRedirectLink() {
        var uinId = this.state.operatorDroneProfile.uinApplicationId;
        var url = "/uinApplication?operatorDroneId=" + this.state.operatorDroneId + "&selectedDroneTypeId=" + this.state.operatorDroneProfile.droneType.id;
        url += uinId ? "&id=" + uinId : "";
        return url;
    }

    render(){

        const {operatorDroneProfile} = this.state;

        if(!operatorDroneProfile) return null;

        return (
            <div id="drone-profile">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <div className="drone-image">
                               <img src={imgLocation} alt="" />
                            </div>
                            <h2> {operatorDroneProfile.droneType.modelName}</h2>
                            <div className="drone-meta">
                                <p><strong>Model Number:</strong> {operatorDroneProfile.droneType.modelNo}</p>
                                <p><strong>UIN Application Status:</strong> {operatorDroneProfile.operatorDroneStatus}</p>
                                <p><strong>Date of registration:</strong> {operatorDroneProfile.registeredDate}</p>
                                <p><strong>UIN Number:</strong> {operatorDroneProfile.UINNo}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="view-application-footer">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <a href= {this.getRedirectLink()} className="button button-accept">{operatorDroneProfile.operatorDroneStatus == "UIN_NOT_APPLIED" || operatorDroneProfile.operatorDroneStatus == "UIN_DRAFT" ? "Apply for UIN" : "View UIN"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { errors, drones } = state.userApplications;
    return {
       errors,
       drones
    };
}

export default connect(
 mapStateToProps
)(OperatorDroneProfilePage)

