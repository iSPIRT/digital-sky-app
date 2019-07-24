import React from 'react';

import FormErrors from '../components/FormErrors';

import view from '../img/view.svg';
import accept from '../img/accept.png';
import reject from '../img/reject.png';
import moment from 'moment';
import { LOCAL_DRONE_ACQUISITION_APPLICATION } from '../constants/applicationType';
import { IMPORT_DRONE_APPLICATION } from '../constants/applicationType';
import { UAOP_APPLICATION_APPLICATION } from '../constants/applicationType';
import { UIN_APPLICATION } from '../constants/applicationType';
import { FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';
import AlertModal from "./AlertModal";
import SearchByModal from "./SearchByModal";
require('ol/ol.css');

class Applications extends React.Component {

    applicationStatusClass(status) {
        let cssClass = 'application';
        if (status === 'APPROVED') {
            cssClass = 'application status-accepted';
        } else if (status === 'REJECTED') {
            cssClass = 'application status-declined';
        } else if (status === 'SUBMITTED') {
            cssClass = 'application status-submitted';
        }
        return cssClass;
    }

    filterCompletedApplications(applications) {
        let completedApplications = [];
        const now = moment();
        applications.map((application) => {
            const endDateTime = moment(application.endDateTime, "DD-MM-YYYY HH:mm:ss");
            if (now.isAfter(endDateTime) && application.status.trim() === "SUBMITTED") {
                completedApplications.push(application)
            }
        });
        return completedApplications;
    }

    filterRejectedApplications(applications) {
        let rejectedApplications = [];
        applications.map((application) => {
            if (application.status.trim() === "REJECTED") {
                rejectedApplications.push(application)
            }
        });
        return rejectedApplications;
    }

    filterPendingApplications(applications) {
        let pendingApplications = [];
        const now = moment();
        applications.map((application) => {
            const endDateTime = moment(application.endDateTime, "DD-MM-YYYY HH:mm:ss");
            if (now.isBefore(endDateTime) && application.status.trim() === "SUBMITTED") {
                pendingApplications.push(application)
            }
        });
        return pendingApplications;
    }

    filterApprovedApplications(applications) {
        let approvedApplications = [];
        applications.map((application) => {
            if (application.status.trim() === "APPROVED" || application.status.trim() === "APPROVEDBYATC" || application.status.trim() === "APPROVEDBYAFMLU") {
                approvedApplications.push(application)
            }
        });
        return approvedApplications;
    }
    filterApplicationsBasedOnSearch(applications,searchContent){
        let approvedApplications = [];
        let isValid = true;
        let rel=new RegExp();
        try {
             rel= new RegExp("\S*"+searchContent.toUpperCase()+"+\S*")
        } catch(e) {
            isValid = false;
        }
        if(isValid){
            applications.map((application) => {
                if (rel.test(application[this.props.searchBy])) {
                    approvedApplications.push(application)
                }
            });
        }
        return approvedApplications;
    }

    renderTableHeader() {
        let header = ['Call Sign', 'RPA Type','Purpose', 'Launch Point',  'Start Date', 'Start Time', 'End Date', 'End Time', 'Altitude (ft.)', 'FIC No', 'ADC No', 'Endurance (minutes)', 'Additional Info']
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
    }

    renderDecisionButtons(currentStatusTab,application){
        const endDateTime = moment(application.endDateTime, "DD-MM-YYYY HH:mm:ss");
        if (moment().isBefore(endDateTime) && application.status.trim() === "SUBMITTED") {
            return(
                <div>
                    <td>
                        <a onClick={(e) =>  this.props.handleOpenModal("Accept",application,e)}><img className="small-button" src={accept} alt="accept"/></a> </td>
                    <td>
                        <a onClick={(e) =>  this.props.handleOpenModal("Reject",application,e)}><img className="small-button" src={reject} alt="reject"/></a></td>
                </div>
            )
        }
    }
    renderTableData(filteredApplications,currentStatusTab) {
        return filteredApplications.map((application) => {
            const {id,uin, adcNumber, ficNumber, flightPurpose, maxAltitude, approverComments, startDateTime, endDateTime, droneType, maxEndurance, flyArea} = application;
            const endDateTimeObj = moment(endDateTime, "DD-MM-YYYY HH:mm:ss");
            const startDateTimeObj = moment(startDateTime, "DD-MM-YYYY HH:mm:ss");
            const endDate = endDateTimeObj.format('DD-MM-YYYY');
            const endTime = endDateTimeObj.format('HH:mm');
            const startDate = startDateTimeObj.format('DD-MM-YYYY');
            const startTime = startDateTimeObj.format('HH:mm');
            const additionalInfo=(approverComments && approverComments.length>0)?approverComments:"Info";

            return(
                <tr key={id}>
                    <td>{uin}</td>
                    <td>{droneType}</td>
                    <td>{flightPurpose}</td>
                    <td><a
                        onClick={() => this.props.handleOpenMapView(id)}>{flyArea ? flyArea[0].latitude.toFixed(3) + ", " + flyArea[0].longitude.toFixed(3) : " "}</a>
                    </td>
                    <td>{startDate}</td>
                    <td>{startTime}</td>
                    <td>{endDate}</td>
                    <td>{endTime}</td>
                    <td>{maxAltitude}</td>
                    <td>{ficNumber}</td>
                    <td>{adcNumber}</td>
                    <td>{maxEndurance}</td>
                    <td><a onClick={()=> this.props.loadAdditionalInfo(id)}>{additionalInfo}</a></td>
                    {this.renderDecisionButtons(currentStatusTab,application)}
                </tr>
            )
        });
    }

    renderAquisitionData(applications){
        return applications.map((application) =>
            <div className={this.applicationStatusClass(application.status)}>
                <div className="details">
                    <div className="wrap">
                        <h3>{application.applicant}</h3>
                        <p>{application.submittedDate}</p>
                        <p>ID: {application.id}</p>
                    </div>
                </div>
                <div className="go-to-location">
                    <a onClick={(e) => this.props.applicationSelected(application.id)} className="button"><img
                        src={view} alt="view"/></a>
                </div>
            </div>
        );
    }
    render() {
        const {applications, currentStatusTab, showApplicationStatusTabs} = this.props;
        if (!applications) return null;
        if (applications.length < 1) return <p> No Applications to Show </p>;
        const sortedapplications=applications.sort(function(a, b){
            const a_date_time = moment(a.startDateTime, "DD-MM-YYYY HH:mm:ss");
            const b_date_time = moment(b.startDateTime, "DD-MM-YYYY HH:mm:ss");
            return a_date_time>b_date_time ? -1 : a_date_time<b_date_time ? 1 : 0;
        });
        let filteredApplications = sortedapplications;
        if (showApplicationStatusTabs) {
            if (currentStatusTab == 3) {
                filteredApplications = this.filterCompletedApplications(applications);
            } else if (currentStatusTab == 2) {
                filteredApplications = this.filterRejectedApplications(applications);
            } else if (currentStatusTab == 1) {
                filteredApplications = this.filterApprovedApplications(applications);
            } else if (currentStatusTab == 0) {
                filteredApplications = this.filterPendingApplications(applications)
            } else if (currentStatusTab == 4) {
                filteredApplications = this.filterApplicationsBasedOnSearch(applications,this.props.searchContent,this.props.searchBy)
            }
        }

        if (showApplicationStatusTabs) {
            return (
                <div>
                    <table id='application-table'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData(filteredApplications,currentStatusTab)}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return(
                <div className="page-dashboard">
                    <section id="all-applications-admin">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <div className="applications">
                                        {this.renderAquisitionData(filteredApplications)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        this.cssClassMenu = this.cssClassMenu.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleConfirmDecision = this.handleConfirmDecision.bind(this);
        this.handleOpenSearchModal = this.handleOpenSearchModal.bind(this);
        this.handleCloseSearchModal = this.handleCloseSearchModal.bind(this);
        this.handleChangeSearchBy = this.handleChangeSearchBy.bind(this);

        this.state={
            showApplicationStatusTabs:false,
            currentStatusTab:0,
            modalTitle:"Decide On",
            applicationType:" ",
            modalShow: false,
            currentSelectedApplication:"",
            searchContent:"",
            event:{},
            searchModalShow:false,
            searchBy:"Call Sign"
        }
    }

    applicationTypeSelected(applicationType){
        this.setState({applicationType:applicationType})
        if(applicationType==="flyDronePermissionApplication"){
            this.setState({showApplicationStatusTabs:true});
        }
        else {
            this.setState({showApplicationStatusTabs:false});
        }
        this.props.applicationTypeSelected(applicationType);
    }

    handleOpenModal(title,application,event){

        this.setState({ modalTitle: title });
        this.setState({ modalShow: true });
        this.setState({ currentSelectedApplication: application });
        this.setState({ event: event });
    }
    handleConfirmDecision(title){
        if(title==="Accept"){
            this.handleAccept(this.state.currentSelectedApplication,this.state.event)
        }else if(title==="Reject"){
            this.handleReject(this.state.currentSelectedApplication,this.state.event)
        }
        this.handleCloseModal()
    }
    handleChangeSearchBy(value){
        this.setState({searchBy:value})
        this.handleCloseSearchModal()
    }
    handleCloseModal(){
        this.setState({ modalShow: false });
    }

    handleCloseSearchModal(){
        this.setState({ searchModalShow: false });
    }
    handleOpenSearchModal(){
        this.setState({ searchModalShow: true });
    }
    applicationSelected(applicationId){
        this.props.applicationSelected(applicationId);
    }

    handleAccept(application,event){

        const isAdmin= JSON.parse(localStorage.getItem('isAdmin'));
        const isAtcAdmin= JSON.parse(localStorage.getItem('isAtcAdmin'));
        const isAfmluAdmin= JSON.parse(localStorage.getItem('isAfmluAdmin'));

        if(application.status === 'SUBMITTED') {
            if(isAdmin) {
                this.props.updateApplicationStatus('APPROVED', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
            }
            else if(isAtcAdmin) {
                this.props.updateApplicationStatusAtc('APPROVEDBYATC', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
            }
        }
        else if(application.status === 'APPROVEDBYATC' && isAfmluAdmin) {
            this.updateApplicationStatusAfmlu('APPROVEDBYAFMLU', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
        }

    }

    handleReject(application,event){

        const isAdmin= JSON.parse(localStorage.getItem('isAdmin'));
        const isAtcAdmin= JSON.parse(localStorage.getItem('isAtcAdmin'));
        const isAfmluAdmin= JSON.parse(localStorage.getItem('isAfmluAdmin'));

        if(application.status === 'SUBMITTED') {
            if(isAdmin) {
                this.props.updateApplicationStatus('REJECTED', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
            }
            else if(isAtcAdmin) {
                this.props.updateApplicationStatusAtc('REJECTEDBYATC', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
            }
        }
        else if(application.status === 'APPROVEDBYATC' && isAfmluAdmin) {
            this.updateApplicationStatusAfmlu('REJECTEDBYAFMLU', event,application.id,FLY_DRONE_PERMISSION_APPLICATION)
        }

    }

    cssClassMenu(applicationType){
        const {selectedApplicationType} = this.props;
        return selectedApplicationType === applicationType ? 'operator active' : 'operator';
    }

    handleChange(){
        this.setState({currentStatusTab:4});
        this.setState({searchContent:this.refs.search.value});
    }
    handleTabChange(event,tabNo){
        this.setState({currentStatusTab:tabNo});
        let i, tablinks;
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active";
    }
    render() {
        const {applications} = this.props;
        const {errors} = this.props;
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
                    <div>
                            <div className="application-status-nav">
                                <li><a className="tablinks" onClick={(e) => this.handleTabChange(e,0) }><span>Pending Applications</span></a></li>
                                <li><a className="tablinks" onClick={(e) => this.handleTabChange(e,1)}><span>Accepted Applications</span></a></li>
                                <li><a className="tablinks" onClick={(e) => this.handleTabChange(e,2)}><span>Rejected Applications</span></a></li>
                                <li><a className="tablinks" onClick={(e) => this.handleTabChange(e,3)}><span>Completed Applications</span></a></li>
                                <input ref="search" type="text" placeholder={"Search..."} onChange={this.handleChange}/>
                                <a onClick={this.handleOpenSearchModal}><img src={view} alt="Search By"/></a>
                            </div>
                    </div>
                    }
                {
                    this.state.applicationType === FLY_DRONE_PERMISSION_APPLICATION &&
                    <AlertModal
                        show={this.state.modalShow}
                        onHide={this.handleCloseModal}
                        title={this.state.modalTitle}
                        handleConfirm={this.handleConfirmDecision}
                    />
                }
                {
                    this.state.applicationType === FLY_DRONE_PERMISSION_APPLICATION &&
                    <SearchByModal
                        onHide={this.handleCloseSearchModal}
                        show={this.state.searchModalShow}
                        handleChangeSearchBy={this.handleChangeSearchBy}
                    />
                }
                <div className="page-dashboard">
                    <section>
                        <FormErrors errors = {errors}/>
                        <div className="appl-style">
                            <Applications
                                showModal={this.state.modalShow}
                                onHide={this.handleCloseModal}
                                applications={applications}
                                searchBy={this.state.searchBy}
                                applicationSelected={this.applicationSelected}
                                currentStatusTab={this.state.currentStatusTab}
                                showApplicationStatusTabs={this.state.showApplicationStatusTabs}
                                handleAccept={this.handleAccept}
                                handleReject={this.handleReject}
                                searchContent={this.state.searchContent}
                                loadAdditionalInfo={this.props.loadAdditionalInfoPage}
                                handleOpenMapView={this.props.handleOpenMapView}
                                handleOpenModal={this.handleOpenModal}
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;