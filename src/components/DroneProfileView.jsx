
import React from 'react';

import imgLocation from '../img/temp/drone2.jpg';

import queryString from 'query-string';

class DroneProfileView extends React.Component {

    constructor(props) {
        super(props);
        this.getRedirectLink = this.getRedirectLink.bind(this);
<<<<<<< HEAD
        
=======
        this.getOccurrenceReportLink = this.getOccurrenceReportLink.bind(this);

>>>>>>> upstream/master
        const queryParams = queryString.parse(this.props.location.search);
        const droneTypeId = queryParams.id;
        this.state= {droneTypeId : droneTypeId};

        if(this.props.droneTypes) {
            var currentDroneType = this.props.droneTypes.find(droneType => droneType.id == droneTypeId);
            if(currentDroneType) {
                this.state = {...{droneProfile: currentDroneType}};
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

<<<<<<< HEAD
=======
    getOccurrenceReportLink() {
        return "/occurrenceReport?droneId=" + this.state.operatorDroneId;;
    }

>>>>>>> upstream/master
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
<<<<<<< HEAD
=======
                        <div className="large-12 cell">
                            <a href= {this.getOccurrenceReportLink()} className="button button-accept">Occurrence Report</a>
                        </div>
>>>>>>> upstream/master
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default DroneProfileView;