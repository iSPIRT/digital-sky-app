import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom'

class OccurrenceReport extends React.Component {

    constructor(props) {
        super(props);
        this.list = this.list.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            occurrenceReport: {}
        };
    }

    handleChange(event) {
        const { name, value} = event.target;
        const { occurrenceReport } = this.state;
        this.updateObjProp(occurrenceReport, value, name);
        this.setState({occurrenceReport: occurrenceReport});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSubmit(event) {
        event.preventDefault();
        const fieldErrors = validateForm(event.target)
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }
        this.setState({fieldErrors:{}});
        this.setState({submitted: true});
        var occurrenceReport = Object.assign({}, this.state.occurrenceReport);
        occurrenceReport.occurrenceTimestamp = occurrenceReport.occurrenceDate+ " "+occurrenceReport.occurrenceTime+":00";
        occurrenceReport.occurrenceDate = undefined;
        occurrenceReport.occurrenceTime = undefined;
        occurrenceReport.operatorDroneId = this.props.droneId;
        this.props.saveOccurrenceReport(occurrenceReport);
    }

    list(event) {
        if(event) event.preventDefault();
        this.props.list();
    }

    render() {

        const { errors, savedOccurrenceReports } = this.props;
        const { formErrors, occurrenceReport} = this.state;
        if(savedOccurrenceReports){
            this.props.list();
            return <div/>
        }

        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Create Occurrence Report</h2>
                        <p><Link to="#" onClick={this.list}>Back to List</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="occurrenceReportForm" onSubmit={this.handleSubmit}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <label>Occurrence Date
                                        <input type="text" placeholder="DD-MM-YYYY" name="occurrenceDate" onChange={this.handleChange} value={occurrenceReport.occurrenceDate} maxLength="10" className={decorateInputClass(this.state.fieldErrors['occurrenceDate'],[])} validate="required,date" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='occurrenceDate'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Occurrence Time
                                        <input type="text" placeholder="HH24:MM" name="occurrenceTime" onChange={this.handleChange} value={occurrenceReport.occurrenceTime} maxLength="10" className={decorateInputClass(this.state.fieldErrors['occurrenceTime'],[])} validate="required,time" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='occurrenceTime'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Place Of Occurrence
                                        <input type="text" placeholder="Place Of Occurrence" name="placeOfOccurrence" onChange={this.handleChange} value={occurrenceReport.placeOfOccurrence} maxLength="10" className={decorateInputClass(this.state.fieldErrors['placeOfOccurrence'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='placeOfOccurrence'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Latitude
                                        <input type="text" placeholder="Latitude" name="latitude" onChange={this.handleChange} value={occurrenceReport.latitude} maxLength="10" className={decorateInputClass(this.state.fieldErrors['latitude'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='latitude'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Longitude
                                        <input type="text" placeholder="Longitude" name="longitude" onChange={this.handleChange} value={occurrenceReport.longitude} maxLength="10" className={decorateInputClass(this.state.fieldErrors['longitude'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='longitude'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Phase Of Flight
                                        <input type="text" placeholder="Phase Of Flight" name="phaseOfFlight" onChange={this.handleChange} value={occurrenceReport.phaseOfFlight} maxLength="10" className={decorateInputClass(this.state.fieldErrors['phaseOfFlight'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='phaseOfFlight'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Type Of Operation
                                        <input type="text" placeholder="Type Of Operation" name="typeOfOperation" onChange={this.handleChange} value={occurrenceReport.typeOfOperation} maxLength="50" className={decorateInputClass(this.state.fieldErrors['typeOfOperation'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='typeOfOperation'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Color of Rpa
                                        <input type="text" placeholder="Color of Rpa" name="colorOfRpa" onChange={this.handleChange} value={occurrenceReport.colorOfRpa} maxLength="10" className={decorateInputClass(this.state.fieldErrors['colorOfRpa'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='colorOfRpa'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Rpa Damage Details
                                        <textarea name="rpaDamageDetails" rows="3" value= {occurrenceReport.rpaDamageDetails } onChange={ this.handleChange }/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Property Damage Details
                                        <textarea name="propertyDamageDetails" rows="3" value= {occurrenceReport.propertyDamageDetails } onChange={ this.handleChange }/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Details Of Injury
                                        <textarea name="detailsOfInjury" rows="3" value= {occurrenceReport.detailsOfInjury } onChange={ this.handleChange }/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Pilot Details
                                        <textarea name="pilotDetails" rows="3" value= {occurrenceReport.pilotDetails } onChange={ this.handleChange } validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='pilotDetails'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>UAOP Number
                                        <input type="text" placeholder="UAOP Number" name="uaopNUmber" onChange={this.handleChange} value={occurrenceReport.uaopNUmber} maxLength="200" className={decorateInputClass(this.state.fieldErrors['uaopNUmber'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='uaopNUmber'/>
                                    </label>
                                </div>

                                <div className="large-12 cell">
                                    <label>Occurrence Description
                                        <textarea name="occurrenceDescription" rows="3" value= {occurrenceReport.occurrenceDescription } onChange={ this.handleChange } validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})}/>
                                        <FieldError fieldErrors={this.state.fieldErrors} field='occurrenceDescription'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Was RPA Near Aircraft, If Yes Distance
                                        <input type="text" placeholder="Distance From Aircraft" name="distanceFromAircraft" onChange={this.handleChange} value={occurrenceReport.distanceFromAircraft} maxLength="20" />
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Was RPA Near Airport/Helipad, If Yes Distance
                                        <input type="text" placeholder="Distance From Airport/Helipad" name="distanceFromHelipad" onChange={this.handleChange} value={occurrenceReport.distanceFromHelipad} maxLength="20" />
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Was RPA Near Prohibited/Restricted Area , If Yes Specify
                                        <input type="text" name="proximityFromDangerZone" onChange={this.handleChange} value={occurrenceReport.proximityFromDangerZone} maxLength="20" />
                                    </label>
                                </div>

                                <div className="large-12 cell">
                                    <button type="submit" className="button" name="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default OccurrenceReport;