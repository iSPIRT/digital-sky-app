import React from 'react';

const DroneAcquisitionApplicationView = (props) => {

    const { applicationForm, type} = props;
    const isNew = applicationForm.isNew? "Yes": "No";
    const wingType = applicationForm.fixedWing? "Fixed": "Rotary";

    return(
        <div className="large-12 cell">
            <div className="question">
                <h6>Name of applicant in full:</h6>
                <p>{ applicationForm.applicant }</p>
            </div>
            <div className="question">
                <h6>Address of Applicant:</h6>
                    { applicationForm.applicantAddress ?
                    (<p>{ applicationForm.applicantAddress.lineOne }<br/>
                    { applicationForm.applicantAddress.lineTwo }<br/>
                    { applicationForm.applicantAddress.city } <br/>
                    { applicationForm.applicantAddress.state } <br/>
                    { applicationForm.applicantAddress.pincode }<br/>
                    { applicationForm.applicantAddress.country }
                    </p>) : <p> </p>
                    }
            </div>
            <div className="question">
                <h6>Nationality:</h6>
                <p>{applicationForm.applicantNationality}</p>  
            </div>
            <div className="question">
                <h6>Category:</h6>
                <p>{applicationForm.applicantCategory}</p>  
            </div>
            <div className="question">
                <h6>Name of Manufacturer:</h6>
                <p>{applicationForm.manufacturer}</p> 
            </div>
            <div className="question">
                <h6>Address of Manufacturer:</h6>
                { applicationForm.manufacturerAddress ?
                    (<p>{ applicationForm.manufacturerAddress.lineOne } <br/>
                    { applicationForm.manufacturerAddress.lineTwo } <br/>
                    { applicationForm.manufacturerAddress.city } <br/>
                    { applicationForm.manufacturerAddress.state }   <br/>
                    { applicationForm.manufacturerAddress.pincode } <br/>
                    { applicationForm.manufacturerAddress.country }<br/>
                    </p>) : <p> </p>
                }
            </div>
            <div className="question">
                <h6>Nationality of Manufacturer:</h6>
                <p>{ applicationForm.manufacturerNationality }</p> 
            </div >
            <div className="question">
                <h6>Model No:</h6>
                <p>{ applicationForm.modelNo }</p>
            </div>
            <div className="question">
                <h6>Sl No:</h6>
                <p>{ applicationForm.serialNo }</p>
            </div>
            <div className="question">
                <h6>Date of Manufacture:</h6>
                <p>{ applicationForm.dateOfManufacture }</p>
            </div>
            <div className="question">
                <h6>Year of Manufacture:</h6>
                <p>{ applicationForm.yearOfManufacture }</p>
            </div>
            <div className="question">
                <h6>Wing type:</h6>
                <p>{ wingType }</p>
            </div>
            <div className="question">
                <h6>Is New:</h6>
                <p>{ isNew }</p>
            </div>
            <div className="question">
                <h6>Maximum take-off weight:</h6>
                <p>{ applicationForm.maxTakeOffWeight }</p>
            </div>
            <div className="question">
                <h6>Maximum height attainable:</h6>
                <p>{ applicationForm.maxHeightAttainable }</p>
            </div>
            <div className="question">
                <h6>Payload DroneDetails:</h6>
                <p>{ applicationForm.payloadDetails }</p>
            </div>
            <div className="question">
                <h6>{ type === "importDrone" ? "Mode of import" : "Mode ofAcquisition" }</h6>
                <p>{ applicationForm.acquisitionMode }</p>
            </div>
            <div className="question">
                <h6>Name of Owner:</h6>
                <p>{ applicationForm.owner }</p>
            </div>
            <div className="question">
                <h6>Address of Owner:</h6>
                { applicationForm.ownerAddress ?
                    (<p>{ applicationForm.ownerAddress.lineOne } <br/>
                    { applicationForm.ownerAddress.lineTwo } <br/>
                    { applicationForm.ownerAddress.city } <br/>
                    { applicationForm.ownerAddress.state } <br/>   
                    { applicationForm.ownerAddress.pincode } <br/>
                    { applicationForm.ownerAddress.country }
                    </p>) : <p></p>
                }
            </div>
            <div className="question">
                <h6>Purpose of Operation of RPA:</h6>
                <p>{ applicationForm.purposeOfOperation }</p>
            </div>
            <div className="question">
                <h6>Proposed Base of Operation:</h6>
                <p>{ applicationForm.proposedBaseOfOperation }</p>
            </div>
                <div className="question">
                    <h6>Security Clearance Document: </h6>
                    <p> <a onClick={ this.downloadDocument }> { applicationForm.securityClearanceDoc } </a></p>
                </div>
        </div>
    )
}

export default DroneAcquisitionApplicationView;