import React from 'react';

import { Link } from 'react-router-dom'

class HomeSectionHelpMeApply extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: false,
            showAnswerUnder: false,
            showAnswerOver: false,
            showAnswerPilot: false,
            showAnswerOperator: false,
            showAnswerManufacturer: false,
            showAnswerInIndia: false,
            showAnswerImport: false
        };
    }

    handleChange(event){
        if(event.target.name === 'selectDroneWeight'){
            this.setState({selected: true});
            if(event.target.value === 'under'){
                this.setState({
                    showAnswerUnder: true,
                    showAnswerOver: false,
                    showAnswerPilot: false,
                    showAnswerOperator: false,
                    showAnswerManufacturer: false,
                    showAnswerInIndia: false,
                    showAnswerImport: false
                });
            }
            else if(event.target.value === 'over'){
                this.setState({
                    showAnswerUnder: false,
                    showAnswerOver: true,
                    showAnswerPilot: false,
                    showAnswerOperator: false,
                    showAnswerManufacturer: false,
                    showAnswerInIndia: false,
                    showAnswerImport: false
                });
            }
        }
        else if(event.target.name === 'selectLicenseType'){
            this.setState({
                showAnswerPilot: event.target.value==='pilot',
                showAnswerOperator: event.target.value==='operator',
                showAnswerManufacturer: event.target.value==='manufacturer'
            });
        }

        else if(event.target.name === 'selectAcquisitionType'){
            this.setState({
                showAnswerInIndia: event.target.value==='in-india',
                showAnswerImport: event.target.value==='import'
            });
        }
    }

    render() {
        const {
            selected,
            showAnswerUnder,
            showAnswerOver,
            showAnswerPilot,
            showAnswerOperator,
            showAnswerManufacturer,
            showAnswerInIndia,
            showAnswerImport
        } = this.state;

        return (
            <section id="help-me-apply">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div class="large-5 cell">
                            <h2>Help me apply</h2>
                        </div>
                        <div className="large-7 cell">
                            <p className={selected ? 'question selected' : 'question'}>My drone is
                                <select className={selected ? 'drone_weight selected' : 'drone_weight'}  name="selectDroneWeight" onChange={this.handleChange}>
                                    <option disabled selected value="">Select</option>
                                    <option value="over">over</option>
                                    <option value="under">under</option>
                                </select>
                                250 grams.
                                <span className={selected ? '' : 'other-parts'} >I want to apply to become a
                                    <select className="license_type" name="selectLicenseType" onChange={this.handleChange}>
                                      <option disabled selected value="">Select</option>
                                      <option value="pilot">pilot</option>
                                      <option value="operator">operator</option>
                                      <option value="manufacturer">manufacturer</option>
                                    </select>
                                    and I’m
                                    <select className="acquisition_type" name="selectAcquisitionType" onChange={this.handleChange}>
                                      <option disabled selected value="">Select</option>
                                      <option value="in-india">purchasing a drone in India</option>
                                      <option value="import">imorting a drone in India</option>
                                    </select>
                                </span>
                            </p>
                            <div className="answer">
                                <p className={showAnswerUnder ? '' : 'under'} ><strong>Answer:</strong> Congratulations! You don’t need to apply because your
                                    drone is under 250 grams.</p>
                                <p className={showAnswerOver ? '' : 'over'} ><strong>Answer:</strong> First you need to create an account here on DroneStack.</p>

                                <p className={showAnswerPilot ? '' : 'pilot'} >Once you have registered, you have to apply to become a <strong>pilot</strong>
                                    through your dashboard. When you apply to become a pilot, you have to upload your training
                                    certificate and fill in details for security clearance. These details will go to verifying
                                    authority.</p>
                                <p className={showAnswerOperator ? '' : 'operator'} >Once you have registered, you have to apply to become a
                                    <strong>operator</strong> through your dashboard. When you apply to become a operator, some text
                                    and fill in details for security clearance. These details will go to verifying authority.</p>
                                <p className={showAnswerManufacturer ? '' : 'manufacturer'} >Once you have registered, you have to apply to become a
                                    <strong>manufacturer</strong> through your dashboard. When you apply to become a manufacturer,
                                    you have to .... These details will go to verifying authority.</p>

                                <p className={showAnswerInIndia ? '' : 'in-india'} ><strong>You are purchasing drone in India.</strong> Once you have your license,
                                    you can apply for “Acquisition of drone” in your dashboard. After aquisition, you can apply for
                                    a unique identification number (UIN) for your drone.</p>
                                <p className={showAnswerImport ? '' : 'import'} ><strong>You are importing drone in India.</strong> Once you have your license, you
                                    can apply for “Acquisition of drone” in your dashboard. After aquisition, you can apply for a
                                    unique identification number (UIN) for your drone.</p>

                                <Link to="/register" className={selected ? 'button button-light-clean show' : 'button button-light-clean'} >Register</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
    );
  }
}

export default HomeSectionHelpMeApply;