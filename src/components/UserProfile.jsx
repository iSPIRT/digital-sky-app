import React from 'react';

import { Link } from 'react-router-dom'

import pilot from '../img/pilot.svg';
import operator from '../img/operator.svg';


class UserProfile extends React.Component {
  render() {
    const { pilotProfileId, individualOperatorProfileId, organizationOperatorProfileId } = this.props;
    const operatorProfileExist = (individualOperatorProfileId> 0) || (organizationOperatorProfileId > 0);
    return (
        <div id="apply-for-block">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="large-12 cell">
                        <h2>Profile</h2>

                        <div className="apply-for-wrap" data-equalizer>
                            <Link to="/pilotProfile">
                                <div className="apply-for apply-for-pilot" data-equalizer-watch>
                                    <div className="icon">
                                        <img src={pilot} alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="wrap">
                                            <p className="title">Pilot Profile</p>
                                            <p className="info">{ ( pilotProfileId && pilotProfileId > 0) ? 'View/Edit Pilot Profile' : 'Setup your pilot profile' }</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            { !operatorProfileExist ?

                                (
                                    <div><Link to="/individualOperatorProfile">
                                        <div className="apply-for apply-for-operator" data-equalizer-watch>
                                            <div className="icon">
                                                <img src={operator} alt="operator"/>
                                            </div>
                                            <div className="details">
                                                <div className="wrap">
                                                    <p className="title">Individual Operator Profile</p>
                                                    <p className="info">Setup your operator profile as an individual</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/organizationOperatorProfile">
                                        <div className="apply-for apply-for-manufacturer" data-equalizer-watch>
                                            <div className="icon">
                                                <img src={operator} alt="operator"/>
                                            </div>
                                            <div className="details">
                                                <div className="wrap">
                                                    <p className="title">Operator Profile</p>
                                                        <p className="info">Setup operator profile as organization representative</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link></div>
                                ) : (
                                    individualOperatorProfileId > 0 ?
                                    (
                                        <Link to="/individualOperatorProfile">
                                            <div className="apply-for apply-for-operator" data-equalizer-watch>
                                                <div className="icon">
                                                    <img src={operator} alt="operator"/>
                                                </div>
                                                <div className="details">
                                                    <div className="wrap">
                                                        <p className="title">Operator Profile</p>
                                                        <p className="info">View/Edit Operator Profile</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ):
                                    (
                                        <Link to="/organizationOperatorProfile">
                                            <div className="apply-for apply-for-manufacturer" data-equalizer-watch>
                                                <div className="icon">
                                                    <img src={operator} alt="operator"/>
                                                </div>
                                                <div className="details">
                                                    <div className="wrap">
                                                        <p className="title">Operator Profile</p>
                                                            <p className="info">View/Edit Operator Profile</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )

                                )

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default UserProfile;