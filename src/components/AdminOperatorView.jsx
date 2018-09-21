import React from 'react';

import FormErrors from './FormErrors';

import { INDIVIDUAL_OPERATOR_TYPE, ORGANIZATION_OPERATOR_TYPE } from "../constants/operatorType";

class AdminOperatorView extends React.Component {

    render() {
        const { operatorProfile, errors } = this.props;

        if(operatorProfile.empty) return <div/>;

        const profile = operatorProfile.profile;

        return (
            <div className="view-application">
                <div id="application-preview">
                    <div className="page-form">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <h2>Operator Profile</h2>
                                </div>
                                 <FormErrors errors = {errors}/>
                                {   operatorProfile.type === INDIVIDUAL_OPERATOR_TYPE &&
                                    <div className="large-12 cell">
                                        <div className="question">
                                            <h6>Operator Type:</h6>
                                            <p>INDIVIDUAL</p>
                                        </div>
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
                                    </div>
                                }
                                {   operatorProfile.type === ORGANIZATION_OPERATOR_TYPE &&
                                    <div className="large-12 cell">
                                        <div className="question">
                                            <h6>Operator Type:</h6>
                                            <p>ORGANIZATION</p>
                                        </div>
                                        <div className="question">
                                            <h6>Name:</h6>
                                            <p>{profile.name}</p>
                                        </div>
                                        <div className="question">
                                            <h6>Email:</h6>
                                            <p>{profile.email}</p>
                                        </div>
                                        <div className="question">
                                            <h6>Contact:</h6>
                                            <p>{profile.mobileNumber}</p>
                                            <p>{profile.contactNumber}</p>
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
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminOperatorView;