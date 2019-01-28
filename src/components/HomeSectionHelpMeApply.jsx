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
            showMicroDrone: false,
            showSmallDrone: false,
            showBuildingIndia: false,
            showImport:false,
            showAnswerOperator: false,
            showAnswerManufacturer: false
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
                    showMicroDrone: false,
                    showSmallDrone: false,
                    showBuildingIndia: false,
                    showImport:false
                });
            }
            else if(event.target.value === 'over'){
                this.setState({
                    showAnswerUnder: false,
                    showAnswerOver: true,
                    showAnswerPilot: false,
                    showAnswerOperator: false,
                    showAnswerManufacturer: false,
                    showMicroDrone: false,
                    showSmallDrone: false,
                    showBuildingIndia: false,
                    showImport:false
                });
            }
        }
        else if(event.target.name === 'selectLicenseType'){
            if(event.target.value==='manufacturer'){
                this.setState({
                    showSmallDrone: false,
                    showMicroDrone: false,
                    showOperatorAnswerImport: false,
                    showOperatorAnswerInIndia: false})
            }
            else if(event.target.value==='operator'){
                this.setState({
                    showMicroDrone: false,
                    showSmallDrone: false,
                    showBuildingIndia: false,
                    showImport: false})
            }
            else {
                this.setState({
                    showOperatorAnswerImport: false,
                    showOperatorAnswerInIndia: false,
                    showBuildingIndia: false,
                    showImport: false})
            }
            this.setState({
                showAnswerPilot: event.target.value==='pilot',
                showAnswerOperator: event.target.value==='operator',
                showAnswerManufacturer: event.target.value==='manufacturer'
            });
        }

        else if(event.target.name === 'selectAcquisitionTypeOperator'){
            this.setState({
                showOperatorAnswerInIndia: event.target.value==='in-india',
                showOperatorAnswerImport: event.target.value==='import'                
            });
        }
        else if(event.target.name === 'selectAcquisitionTypePilot'){
            this.setState({
                showMicroDrone: event.target.value==='micro',
                showSmallDrone: event.target.value==='small'                
            })
        }
        else if(event.target.name === 'selectAcquisitionTypeManufacturer'){
            this.setState({
                showBuildingIndia: event.target.value==='in-india',
                showImport: event.target.value==='import'                
            })
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
            showMicroDrone,
            showSmallDrone,
            showBuildingIndia,
            showOperatorAnswerImport,
            showOperatorAnswerInIndia,
            showImport
        } = this.state;

        return (
            <section id="help-me-apply">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-5 cell">
                            <h2>Help me apply</h2>
                        </div>
                        <div className="large-7 cell">
                            <p className={selected ? 'question selected' : 'question'}>My RPA is
                                <select className={selected ? 'drone_weight selected' : 'drone_weight'}  name="selectDroneWeight" onChange={this.handleChange}>
                                    <option disabled selected value="">Select</option>
                                    <option value="over">over</option>
                                    <option value="under">under</option>
                                </select>
                                250 grams.
                                {
                                !showAnswerUnder===true && <span className={selected ? '' : 'other-parts'} > I am a
                                    <select className="license_type" name="selectLicenseType" onChange={this.handleChange}>
                                      <option disabled selected value="">Select</option>
                                      <option value="pilot">Remote Pilot</option>
                                      <option value="operator">operator</option>
                                      <option value="manufacturer">manufacturer</option>
                                    </select>
                                    {(showAnswerPilot||showAnswerManufacturer||showAnswerOperator)&&<span>and</span>}
                                    {
                                        showAnswerOperator && <select className="acquisition_type" name="selectAcquisitionTypeOperator" onChange={this.handleChange}>
                                            <option disabled selected value="">Select</option>
                                            <option value="in-india">purchasing a RPA in India</option>
                                            <option value="import">imorting a RPA in India</option>
                                        </select>
                                    }
                                    {
                                        showAnswerPilot && <select className="acquisition_type" name="selectAcquisitionTypePilot" onChange={this.handleChange}>
                                            <option disabled selected value="">Select</option>
                                            <option value="micro">I'm flying a micro RPA</option>
                                            <option value="small">I'm flying a small or above RPA</option>
                                        </select>
                                    }
                                    {
                                        showAnswerManufacturer && <select className="acquisition_type" name="selectAcquisitionTypeManufacturer" onChange={this.handleChange}>
                                            <option disabled selected value="">Select</option>
                                            <option value="in-india">I'm building a RPA in India</option>
                                            <option value="import">I'm importing a RPA</option>
                                        </select>
                                    }
                                </span>
                                }
                            </p>
                            <div className="answer">
                                <p className={showAnswerUnder ? '' : 'under'} >
                                <strong>Answer:</strong>
                                Nano RPA are currently exempt from registration, import licenses as well as NPNT compliance. You can fly your RPA up to 50 ft and in enclosed premises, today! Please do not forget to read our <Link to="/dos-donts"><font color="FFFFFF">Do’s and Don'ts</font></Link></p>

                                <p className={showAnswerPilot ? '' : 'pilot'} >
                                As the Remote Pilot of a RPA, you must be well-versed with the CAR and the Do’s and Don’ts to understand what is required of you. You are primarily responsible for safe flight operations and please be aware of people, structures and entities in your flight plan that you could affect. Please register yourself, to get a Remote Pilot ID that will be required for permission to fly in NPNT complaint RPAs.<br></br>
                                </p>
                                <p className={showMicroDrone ? '' : 'pilot'} >
                                Do follow guidelines as per section 12 of the CAR, and avoid areas as per Section 13 of the CAR.<br></br>
                                </p>
                                <p className={showSmallDrone ? '' : 'pilot'} >
                                You are also required to get remote pilot training as per Section 9 of the CAR from an approved FTO.
                                </p>
                                <p className={showAnswerOperator ? '' : 'operator'} >
                                As an owner of a RPA, you must be well-versed with the CAR and the Do’s and Don’ts to understand what is required of you. Unless exempted by section 7.2 of the CAR, you will need a UAOP. Refer to Section 7 of the CAR for documentation required.<br></br>
                                </p>
                                <p className={showOperatorAnswerInIndia ? '' : 'operator'} >
                                Please ensure that the RPA you are purchasing is an NPNT compliant RPA. You will only be able to generate UINs for NPNT Compliant RPA.<br></br>
                                </p>
                                <p className={showOperatorAnswerImport ? '' : 'operator'} >
                                For imports, a clearance from DGFT is also required along with NPNT compliance. If the RPA is not a registered type in Digital Sky, you will also need to register as a manufacturer.<br></br>
                                </p>
                                <p className={showAnswerManufacturer ? '' : 'manufacturer'} >
                                As a manufacturer, you must be well-versed with the CAR & RPAS Guidance Manual to understand compliance requirements before selling your RPA. You will need an IT Act-compliant digital certificate to register yourself.<br></br>
                                </p>
                                <p className={showImport ? '' : 'manufacturer'} >
                                DGFT clearance is needed for importing RPAs.<br />
                                </p>
                                <p className={showBuildingIndia ? '' : 'manufacturer'} >
                                Any make of RPA you manufacture, assemble or import will need to be NPNT compliant. Digital copies of appropriate compliance certificates are needed to add your make of RPA. Once approved, your customers who are registered operators of your make of RPA, will be able to generate UINs.
                                </p>
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
