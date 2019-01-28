import React from 'react';

import { Link } from 'react-router-dom'

class OccurrenceReportView extends React.Component {

    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
    }

    list(event) {
        event.preventDefault();
        this.props.list();
    }

    render() {

        const { occurrenceReport } = this.props;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Occurrence Report</h2>
                        <p><Link to="#" onClick={this.list}>Back to List</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <label>Occurrence Date and Time
                                    <p>{occurrenceReport.occurrenceTimestamp}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Place Of Occurrence
                                    <p>{occurrenceReport.placeOfOccurrence}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Latitude
                                    <p>{occurrenceReport.latitude}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Longitude
                                    <p>{occurrenceReport.longitude}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Phase Of Flight
                                    <p>{occurrenceReport.phaseOfFlight}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Type Of Operation
                                    <p>{occurrenceReport.typeOfOperation}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Color of Rpa
                                    <p>{occurrenceReport.colorOfRpa}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Rpa Damage Details
                                    <p>{occurrenceReport.rpaDamageDetails}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Property Damage Details
                                    <p>{occurrenceReport.propertyDamageDetails}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Details Of Injury
                                    <p>{occurrenceReport.detailsOfInjury}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>Remote Pilot Details
                                    <p>{occurrenceReport.pilotDetails}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>UAOP Number
                                    <p>{occurrenceReport.uaopNUmber}</p>
                                </label>
                            </div>

                            <div className="large-12 cell">
                                <label>Occurrence Description
                                    <p>{occurrenceReport.occurrenceDescription}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>RPA Distance From Aircraft
                                    <p>{occurrenceReport.distanceFromAircraft}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>RPA Distance From Airport/Helipad
                                    <p>{occurrenceReport.distanceFromHelipad}</p>
                                </label>
                            </div>
                            <div className="large-12 cell">
                                <label>RPA Near Prohibited/Restricted Area
                                    <p>{occurrenceReport.proximityFromDangerZone}</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OccurrenceReportView;