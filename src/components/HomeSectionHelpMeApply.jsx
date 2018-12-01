import React from 'react';

import { Link } from 'react-router-dom';

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
                        <div className="large-5 cell">
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
                                {
                                !showAnswerUnder===true && <span className={selected ? '' : 'other-parts'} >I am a
                                    <select className="license_type" name="selectLicenseType" onChange={this.handleChange}>
                                      <option disabled selected value="">Select</option>
                                      <option value="pilot">pilot</option>
                                      <option value="operator">operator</option>
                                      <option value="manufacturer">manufacturer</option>
                                    </select>
                                    and
                                    <select className="acquisition_type" name="selectAcquisitionType" onChange={this.handleChange}>
                                      <option disabled selected value="">Select</option>
                                      <option value="in-india">purchasing a drone in India</option>
                                      <option value="import">imorting a drone in India</option>
                                    </select>
                                </span>
                                }
                            </p>
                            <div className="answer">
                                <p className={showAnswerUnder ? '' : 'under'} >
                                <strong>Answer:</strong>
                                Nano drones are currently exempt from registration, import licenses as well as NPNT compliance. You can fly your drone up to 50 ft and in enclosed premises, today! Please do not forget to read our <a href="http://dgca.gov.in/cars/RPAS-Do's%20and%20Don'ts.pdf" target="_blank"><font color="FFFFFF">Do’s and Dont's</font></a></p>
                                <p className={showAnswerOver ? '' : 'over'} ><strong>Answer:</strong> First you need to create an account here on DroneStack.</p>

                                <p className={showAnswerPilot ? '' : 'pilot'} >
                                As the pilot of a drone, you must be well-versed with the CAR and the Do’s and Don’ts to understand what is required of you. You are primarily responsible for safe flight operations and please be aware of people, structures and entities in your flight plan that you could affect. Please register yourself, to get a Pilot ID that will be required for permission to fly in NPNT complaint drones.<br></br>
                                Do follow guidelines as per section 12 of the CAR, and avoid areas as per Section 13 of the CAR. <br></br>
                                (I’m flying Small or above drone) You are also required to get remote pilot training as per Section 9 of the CAR from an approved FTO.
                                </p>
                                <p className={showAnswerOperator ? '' : 'operator'} >
                                As an owner of a drone, you must be well-versed with the CAR and the Do’s and Don’ts to understand what is required of you. Unless exempted by section 7.2 of the CAR, you will need a UAOP. Refer to Section 7 of the CAR for documentation required.<br></br>
                                Please ensure that the drone you are purchasing is an NPNT compliant drone. You will only be able to generate UINs for NPNT Compliant drone.<br></br>
                                (I’m importing a drone) For imports, a clearance from DGFT is also required along with NPNT compliance. If the drone is not a registered type in Digital Sky, you will also need to register as a manufacturer.<br></br>
                                After creation of your profile, please pay the fees on Bharat Kosh. Upload the payment receipt and necessary documentation. Your approval will take up to 7 days to process.
                                </p>
                                <p className={showAnswerManufacturer ? '' : 'manufacturer'} >
                                As a manufacturer, you must be well-versed with the CAR & RPAS Guidance Manual to understand compliance requirements before selling your drone. You will need an IT Act-compliant digital certificate to register yourself.<br></br>
                                (only for I’m importing a drone) DGFT clearance is needed for importing drones<br />
                                Any make of drone you manufacture, assemble or import will need to be NPNT compliant. Digital copies of appropriate compliance certificates are needed to add your make of drone. Once approved, your customers who are registered operators of your make of drone, will be able to generate UINs.
                                </p>

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
