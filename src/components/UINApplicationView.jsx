import React from 'react';
import { Link } from 'react-router-dom';
import { userDetails } from "../helpers/userDetailsHelper";

const UINApplicationView = (props) => {

    const { application, downloadDocument } = props;
    let user = userDetails();

    return(
       
          <div className="large-12 cell">
            { user.isAdmin && 
                    <div className="question">
                        <h6>Operator Id:</h6>
                        <p>
                            <Link to={ "/admin/operator?profileId="+application.operatorId+"&profileType="+application.applicantType } >
                                {application.operatorId}
                            </Link>
                        </p>
                    </div>
            }
                <div className="question">
                    <h6>Model Name:</h6>
                    <p>{ application.modelName }</p>
                </div>
                <div className="question">
                    <h6>Model No:</h6>
                    <p>{ application.modelNo }</p>
                </div>
                <div className="question">
                    <h6>Sl No:</h6>
                    <p>{ application.serialNo }</p>
                </div>
                <div className="question">
                    <h6>Device Unique Id:</h6>
                    <p>{ application.uniqueDeviceId }</p>
                </div>
                <div className="question">
                    <h6>Date of Manufacture:</h6>
                    <p>{ application.dateOfManufacture }</p>
                </div>
                <div className="question">
                    <h6>Copy of import permission / filled proforma for information of local acquisition: </h6>
                    <a onClick={(e) =>  downloadDocument(application.importPermissionDocName)}>{application.importPermissionDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of CIN:  </h6>
                    <a onClick={(e) =>  downloadDocument(application.cinDocName)}>{application.cinDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of GSTIN:  </h6>
                    <a onClick={(e) =>  downloadDocument(application.gstinDocName)}>{application.gstinDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of PanCard:  </h6>
                    <a onClick={(e) =>  downloadDocument(application.panCardDocName)}>{application.panCardDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of security clearance from MHA or self-attested copies of at least two out of three valid identity proofs viz. Passport, Driving License or Aadhar Card: </h6>
                    <a onClick={(e) =>  downloadDocument(application.securityClearanceDocName)}>{application.securityClearanceDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of Permission/ license from WPC Wing, Department of Telecommunication for usage of licensed frequencies used in RPA. (as applicable): </h6>
                    <a onClick={(e) =>  downloadDocument(application.dotPermissionDocName)}>{application.dotPermissionDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of ETA from WPC Wing, Department of Telecommunication for RPA operating in de-licensed frequency band(s) (as applicable): </h6>
                    <a onClick={(e) =>  downloadDocument(application.etaDocName)}>{application.etaDocName}</a>
                </div>
                <div className="question">
                    <h6>Details of fees paid: </h6>
                    <p> { application.feeDetails } </p>
                </div>
                <div className="question">
                    <h6>Name of Manufacturer:</h6>
                    <p>{ application.manufacturer }</p> 
                </div>
                <div className="question">
                    <h6>Address of Manufacturer:</h6>
                    { application.manufacturerAddress ?
                        (<p>{ application.manufacturerAddress.lineOne } <br/>
                        { application.manufacturerAddress.lineTwo } <br/>
                        { application.manufacturerAddress.city } <br/>
                        { application.manufacturerAddress.state }   <br/>
                        { application.manufacturerAddress.pincode } <br/>
                        { application.manufacturerAddress.country }<br/>
                        </p>) : <p> </p>
                    }
                </div>
                <div className="question">
                    <h6>Nationality of Manufacturer:</h6>
                    <p>{ application.manufacturerNationality }</p> 
                </div >
                <div className="question">
                    <h6>Wing type:</h6>
                    <p>{ application.wingType }</p>
                </div>
                <div className="question">
                    <h6>Is New:</h6>
                    <p>{ application.isNew ? "True": "False"}</p>
                </div>
                <div className="question">
                    <h6>Maximum take-off weight (including Payload) in kgs:</h6>
                    <p>{ application.maxTakeOffWeight }</p>
                </div>
                <div className="question">
                    <h6>Maximum height attainable in metres:</h6>
                    <p>{ application.maxHeightAttainable }</p>
                </div>
                <div className="question">
                    <h6>Details of compatible payload:</h6>
                    <p>{ application.compatiblePayload }</p>
                </div>
                <div className="question">
                    <h6>Drone Category: </h6>
                    <p>{ application.droneCategoryType }</p>
                </div>
                <div className="question">
                    <h6>Place & region of operation as per AAI FIR: </h6>
                    <p>{ application.proposedBaseOfOperation }</p>
                </div>
                <div className="question">
                    <h6>Purpose of operation:</h6>
                    <p>{ application.purposeOfOperation }</p>
                </div>
                <div className="question">
                    <h6>Engine/Motor Type: </h6>
                    <p>{ application.engineType }</p>
                </div>
                <div className="question">
                    <h6>Engine/Motor Power Rating in (kW): </h6>
                    <p>{ application.enginePower } </p>
                </div>
                <div className="question">
                    <h6>No of Engines/Motors: </h6>
                    <p>{ application.engineCount }</p>
                </div>
                <div className="question">
                    <h6>Total fuel capacity (kg)/Battery capacity (mAh): </h6>
                    <p>{ application.fuelCapacity }</p>
                </div>
                <div className="question">
                    <h6>Propeller details: </h6>
                    <p>{ application.propellerDetails }</p>
                </div>
                <div className="question">
                    <h6>Overall dimensions (l x b x h):</h6>
                    <p>{ application.dimensions.length } x { application.dimensions.breadth } x { application.dimensions.height }</p>
                </div>
                <div className="question">
                    <h6>Maximum Endurance (in minutes):</h6>
                    <p>{ application.maxEndurance }</p>
                </div>
                <div className="question">
                    <h6>Maximum Range (in metres):</h6>
                    <p>{ application.maxRange }</p>
                </div>
                <div className="question">
                    <h6>Maximum Speed (in kmph)s:</h6>
                    <p>{ application.maxSpeed }</p>
                </div>
                <div className="question">
                    <h6>Maximum height of operations required (in metres): </h6>
                    <p>{ application.maxHeightOfOperation }</p>
                </div> 
                <div className="question">
                    <h6>Enter previous UIN, if applicable : </h6>
                    <p>{ application.previousUIN }</p>
                </div>
                <div className="question">
                    <h6>Copy of Remotely Piloted Aircraft Flight Manual/Manufacturer’s Operating Manual (as applicable): </h6>
                    <a onClick={(e) =>  downloadDocument(application.opManualDocName)}>{application.opManualDocName}</a>
                </div>
                <div className="question">
                    <h6>Copy of Manufacturer’s Maintenance guidelines (as applicable): </h6> 
                    <a onClick={(e) =>  downloadDocument(application.maintenanceGuidelinesDocName)}>{application.maintenanceGuidelinesDocName}</a>
                </div>
                <div className="question">
                    <h6>History of incidents/accidents (if any) along with nature and extent of damage sustained by the RPA and details of any repairs carried out: </h6>
                    <p> { application.incidentHistory } </p>
                </div>
            </div>
    )
}

export default UINApplicationView;