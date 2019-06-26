import React from 'react';

import FormErrors from '../components/FormErrors';

import view from '../img/view.svg';
import accpet from '../img/accept.png';
import reject from '../img/reject.png';
import moment from 'moment';
import { LOCAL_DRONE_ACQUISITION_APPLICATION } from '../constants/applicationType';
import { IMPORT_DRONE_APPLICATION } from '../constants/applicationType';
import { UAOP_APPLICATION_APPLICATION } from '../constants/applicationType';
import { UIN_APPLICATION } from '../constants/applicationType';
import { FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';
import Modal from "@bit/react-bootstrap.react-bootstrap.modal";

class Applications extends React.Component {

    applicationStatusClass(status) {
        let cssClass = 'application';
        if(status ===  'APPROVED'){
            cssClass = 'application status-accepted';
        } else if (status ===  'REJECTED'){
            cssClass = 'application status-declined';
        }
        return cssClass;
    }

    filterCompletedApplications(applications){
        let completedApplications=[];
        const now =moment();
        applications.map((application)=>{
            const endDateTime=moment(application.endDateTime,"DD-MM-YYYY HH:mm:ss");
            if(now.isAfter(endDateTime) && application.status.trim()==="SUBMITTED"){
                completedApplications.push(application)
            }
        });
        return completedApplications;
    }

    filterRejectedApplications(applications){
        let rejectedApplications=[];
        applications.map((application)=>{
            if(application.status.trim()==="REJECTED"){
                rejectedApplications.push(application)
            }
        });
        return rejectedApplications;
    }
    filterPendingApplications(applications){
        let pendingApplications=[];
        const now =moment();
        applications.map((application)=>{
            const endDateTime=moment(application.endDateTime,"DD-MM-YYYY HH:mm:ss");
            if(now.isBefore(endDateTime) && application.status.trim()==="SUBMITTED"){
                pendingApplications.push(application)
            }
        });
        return pendingApplications;
    }
    filterApprovedApplications(applications){
        let approvedApplications=[];
        applications.map((application)=>{
            if(application.status.trim()==="APPROVED" || application.status.trim()==="APPROVEDBYATC" || application.status.trim()==="APPROVEDBYAFMLU"){
                approvedApplications.push(application)
            }
        });
        return approvedApplications;
    }
    renderTableHeader() {
        let header = ['UIN','Date of Submission','Start Date','Start Time','End Date','End Time','ADC','FIC','RPA Type','Endurance (minutes)','Max Altitude (ft.)','Launch Point','Purpose','Additional Info']
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }
    renderTableData(filteredApplications) {
        return filteredApplications.map((application) =>
        {
            const { id,submittedDate,adcNumber,ficNumber,flightPurpose,maxAltitude,approverComments,startDateTime,endDateTime,droneType,maxEndurance,flyArea}=application;
            const endDateTimeObj=moment(endDateTime,"DD-MM-YYYY HH:mm:ss");
            const startDateTimeObj=moment(startDateTime,"DD-MM-YYYY HH:mm:ss");
            const endDate=endDateTimeObj.date()+"-"+endDateTimeObj.month()+"-"+endDateTimeObj.year();
            const endTime=endDateTimeObj.hour()+":"+endDateTimeObj.minute();
            const startDate=startDateTimeObj.date()+"-"+startDateTimeObj.month()+"-"+startDateTimeObj.year();
            const startTime=startDateTimeObj.hour()+":"+startDateTimeObj.minute()

            return(
                <tr key={id} onClick={(e) => this.props.applicationSelected(application.id)}>
                    <td> </td>
                    <td>{submittedDate}</td>
                    <td>{startDate}</td>
                    <td>{startTime}</td>
                    <td>{endDate}</td>
                    <td>{endTime}</td>
                    <td>{adcNumber}</td>
                    <td>{ficNumber}</td>
                    <td>{droneType}</td>
                    <td>{maxEndurance}</td>
                    <td>{maxAltitude}</td>
                    <td><a onClick={() => this.setState({ modalShow: true })}>{flyArea?flyArea[0].latitude.toFixed(3)+", "+flyArea[0].longitude.toFixed(3):" "}</a></td>
                    <td>{flightPurpose}</td>
                    <td>{approverComments}</td>
                    <td>
                        <a  ><img className="small-button" src={accpet} alt="accept"/></a>
                    </td>
                    <td>
                        <a  ><img className="small-button" src={reject} alt="reject"/></a>
                    </td>
                </tr>
            )
        });
    }
    render() {
        const {applications,currentStatusTab,showApplicationStatusTabs} = this.props;
        if(!applications) return null;
        if(applications.length < 1) return <p> No Applications to Show </p>;
        let filteredApplications = applications;
        if(showApplicationStatusTabs) {
            if (currentStatusTab == 3) {
                filteredApplications = this.filterCompletedApplications(applications);
            } else if (currentStatusTab == 2) {
                filteredApplications = this.filterRejectedApplications(applications);
            } else if (currentStatusTab == 1) {
                filteredApplications = this.filterApprovedApplications(applications);
            } else if (currentStatusTab == 0) {
                filteredApplications = this.filterPendingApplications(applications)
            }
        }


        return(
            <div>
                <table id='application-table'>
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData(filteredApplications)}
                    </tbody>
                </table>
            </div>
        );
   }
}
class VerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    crossOrigin="anonymous"
                />
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Launch Point
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="question">
                        <div ref="mapContainer" className="map"> </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        this.cssClassMenu = this.cssClassMenu.bind(this);
        this.state={
            showApplicationStatusTabs:false,
            currentStatusTab:0,
            modalShow: false
        }
    }

    applicationTypeSelected(applicationType){
        if(applicationType=="flyDronePermissionApplication"){
            this.setState({showApplicationStatusTabs:true});
        }
        else {
            this.setState({showApplicationStatusTabs:false});
        }
        this.props.applicationTypeSelected(applicationType);
    }

    applicationSelected(applicationId){
        this.props.applicationSelected(applicationId);
    }

    cssClassMenu(applicationType){
        const {selectedApplicationType} = this.props;
        return selectedApplicationType === applicationType ? 'operator active' : 'operator';
    }

    render() {
        const {applications} = this.props;
        const {errors} = this.props;
        let modalClose = () => this.setState({ modalShow: false });
        return (
            <div>
                <div className="admin-header">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <ul className="menu">
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(LOCAL_DRONE_ACQUISITION_APPLICATION)} className={this.cssClassMenu(LOCAL_DRONE_ACQUISITION_APPLICATION)}><span>Local RPA Acquisition Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(IMPORT_DRONE_APPLICATION)} className={this.cssClassMenu(IMPORT_DRONE_APPLICATION)}><span>Import RPA Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(UAOP_APPLICATION_APPLICATION)} className={this.cssClassMenu(UAOP_APPLICATION_APPLICATION)}><span>UAOP Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(UIN_APPLICATION)} className={this.cssClassMenu(UIN_APPLICATION)}><span>UIN Applications</span></a></li>
                                    <li><a onClick={(e) =>  this.applicationTypeSelected(FLY_DRONE_PERMISSION_APPLICATION)} className={this.cssClassMenu(FLY_DRONE_PERMISSION_APPLICATION)}><span>Permission Applications</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showApplicationStatusTabs &&
                            <div className="application-status-nav">
                                <li><a onClick={(e) =>  this.setState({currentStatusTab:0})}><span>Pending Applications</span></a></li>
                                <li><a onClick={(e) =>  this.setState({currentStatusTab:1})}><span>Accepted Applications</span></a></li>
                                <li><a onClick={(e) =>  this.setState({currentStatusTab:2})}><span>Rejected Applications</span></a></li>
                                <li><a onClick={(e) =>  this.setState({currentStatusTab:3})}><span>Past Applications</span></a></li>
                                <input type="text" placeholder="Search.."/>

                                <a  ><img src={view} alt="view"/></a>
                            </div>
                    }

                <a onClick={() => this.setState({ modalShow: true })}>
                    Launch vertically centered modal
                </a>
                <div>
                    <VerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                    />
                </div>
                <div className="page-dashboard">
                    <section>
                        <FormErrors errors = {errors}/>
                        <div>
                            <Applications applications={applications} applicationSelected={this.applicationSelected} currentStatusTab={this.state.currentStatusTab} showApplicationStatusTabs={this.state.showApplicationStatusTabs}/>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;