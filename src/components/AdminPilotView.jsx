import React from 'react';

import FormErrors from './FormErrors';

class AdminPilotView extends React.Component {

    render() {
        const profile = this.props.pilotProfile;
        const errors = this.props.errors;

        if(profile.empty) return <div/>;

        return (
            <div className="view-application">
                <div id="application-preview">
                    <div className="page-form">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>Pilot Profile</h2>
                                </div>
                                <FormErrors errors = {errors}/>
                                <div className="large-12 cell">
                                    <div className="question">
                                        <h6>Name:</h6>
                                        <p>{profile.name}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Email:</h6>
                                        <p>{profile.email}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Mobile:</h6>
                                        <p>{profile.mobileNumber}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Country:</h6>
                                        <p>{profile.country}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Address:</h6>
                                        <p>{profile.addressList[0].lineOne}</p>
                                        <p>{profile.addressList[0].lineTwo}</p>
                                        <p>{profile.addressList[0].city}</p>
                                        <p>{profile.addressList[0].state}</p>
                                        <p>{profile.addressList[0].country}</p>
                                        <p>{profile.addressList[0].pinCode}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Drone Category:</h6>
                                        <p>{profile.droneCategory}</p>
                                    </div>
                                    <div className="question">
                                        <h6>Training Certificate:</h6>
                                        <a onClick={(e) =>  this.props.downloadTrainingCertificate()}>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPilotView;