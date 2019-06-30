import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import { history } from '../store/configureStore';

import AdminDashboard from '../components/AdminDashboard';

import AdminDashboardForAtcAfmlu from '../components/AdminDashboardForAtcAfmlu';

import { LOCAL_DRONE_ACQUISITION_APPLICATION, FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';

import {
    approveApplicationsAction, approveApplicationsByAfmluAction,
    approveApplicationsByAtcAction,
    loadApplicationsAction, viewPilotProfile
} from '../actions/adminActions';
import { checkAdminAction } from '../actions/loginActions';
import { loadUserAirspaceCategoriesByHeightAction} from '../actions/userAirspaceCategoryActions';
import {loadOperatorProfile} from "../actions/operatorProfileActions";

class AdminDashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        this.applicationSelectedByAtcAfmlu = this.applicationSelectedByAtcAfmlu.bind(this);
        this.loadAirspaceCategoriesByHeight = this.loadAirspaceCategoriesByHeight.bind(this);
        this.updateApplicationStatus = this.updateApplicationStatus.bind(this);
        this.updateApplicationStatusAtc = this.updateApplicationStatusAtc.bind(this);
        this.updateApplicationStatusAfmlu = this.updateApplicationStatusAfmlu.bind(this);
        this.handleOpenMapView = this.handleOpenMapView.bind(this);
        this.loadAdditionalInfoPage = this.loadAdditionalInfoPage.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        this.state = {
            selectedApplicationType: queryParams.type ? queryParams.type: LOCAL_DRONE_ACQUISITION_APPLICATION,
            isAdmin:JSON.parse(localStorage.getItem('isAdmin')),
            isAtcAdmin:JSON.parse(localStorage.getItem('isAtcAdmin')),
            isAfmluAdmin:JSON.parse(localStorage.getItem('isAfmluAdmin')),
            isViewerAdmin:JSON.parse(localStorage.getItem('isViewerAdmin')),
            isATCViewerAdmin:JSON.parse(localStorage.getItem('isATCViewerAdmin')),
            isAFMLUViewerAdmin:JSON.parse(localStorage.getItem('isAFMLUViewerAdmin')),
            isAdminCheck:false
        };
        this.props.dispatch(checkAdminAction(localStorage.getItem('accessToken')));
        if(this.state.isAdmin || this.state.isViewerAdmin)
            this.props.dispatch(loadApplicationsAction(LOCAL_DRONE_ACQUISITION_APPLICATION,"admin"));
        else if(this.state.isAtcAdmin || this.state.isATCViewerAdmin )
            this.props.dispatch(loadApplicationsAction(FLY_DRONE_PERMISSION_APPLICATION,"atcAdmin"));
        else if(this.state.isAfmluAdmin || this.state.isAFMLUViewerAdmin)
            this.props.dispatch(loadApplicationsAction(FLY_DRONE_PERMISSION_APPLICATION,"afmluAdmin"));
    }

    applicationTypeSelected(applicationType){
        this.setState({selectedApplicationType: applicationType})
        this.props.dispatch(loadApplicationsAction(applicationType));
    }

    loadAirspaceCategoriesByHeight(application) {
        return this.props.dispatch(loadUserAirspaceCategoriesByHeightAction(application));
    }

    applicationSelected(applicationId){
        const {selectedApplicationType} = this.state;
        history.push("/admin/application?type="+selectedApplicationType+"&id="+applicationId);
    }

    applicationSelectedByAtcAfmlu(applicationId){
        const {selectedApplicationType} = this.state;
        history.push("/admin/application?type="+FLY_DRONE_PERMISSION_APPLICATION+"&id="+applicationId);
    }

    loadAdditionalInfoPage(applicationId){
        const applications = this.props.adminApplications[FLY_DRONE_PERMISSION_APPLICATION];
        const currentApplication =  applications.find( application => application.id === applicationId );
        this.props.dispatch(loadOperatorProfile("individualOperator", currentApplication.operatorId));
        this.props.dispatch(viewPilotProfile(currentApplication.pilotId));
        history.push("/additionalInfo?type="+FLY_DRONE_PERMISSION_APPLICATION+"&id="+applicationId);
    }

    handleOpenMapView(applicationId){
        const applications = this.props.adminApplications[FLY_DRONE_PERMISSION_APPLICATION];
        const currentApplication =  applications.find( application => application.id === applicationId );
        this.props.dispatch(loadUserAirspaceCategoriesByHeightAction(currentApplication));
        history.push("/mapView?type="+FLY_DRONE_PERMISSION_APPLICATION+"&id="+applicationId);
    }

    updateApplicationStatus(status, event,id,applicationType){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId:id,
            status
        };

        this.props.dispatch(approveApplicationsAction(applicationType,id, approveRequestBody));
    }

    updateApplicationStatusAtc(status, event,id,applicationType){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: id,
            status
        };

        this.props.dispatch(approveApplicationsByAtcAction(applicationType,id, approveRequestBody));
    }

    updateApplicationStatusAfmlu(status, event,id,applicationType){
        event.preventDefault();

        const approveRequestBody = {
            applicationFormId: id,
            status
        };

        this.props.dispatch(approveApplicationsByAfmluAction(applicationType,id, approveRequestBody));
    }

    componentWillReceiveProps(){
        if(this.props.adminCheck)
            this.setState({isAdminCheck:true})
        else
            this.setState({isAdminCheck:false})
    }

    componentWillUnmount() {
        this.state.adminApplications=null
    }

    render() {
        const {selectedApplicationType,isAdmin,isAtcAdmin,isAfmluAdmin,isAdminCheck,isViewerAdmin,isATCViewerAdmin,isAFMLUViewerAdmin} = this.state;
        const { errors } = this.props.adminApplications;
        const airspaceCategories = this.props.airspaceCategories;
        const applications = this.props.adminApplications[selectedApplicationType];

        if(isAdminCheck){            
            if(isAdmin || isViewerAdmin)
            return <AdminDashboard
                    selectedApplicationType={selectedApplicationType}
                    applications={applications}
                    airspaceCategories={airspaceCategories}
                    errors={errors}
                    loadAdditionalInfoPage={this.loadAdditionalInfoPage}
                    applicationTypeSelected={this.applicationTypeSelected}
                    applicationSelected={this.applicationSelected}
                    loadAirspaceCategories={this.loadAirspaceCategoriesByHeight}
                    updateApplicationStatus={this.updateApplicationStatus}
                    updateApplicationStatusAtc={this.updateApplicationStatusAtc}
                    updateApplicationStatusAfmlu={this.updateApplicationStatusAfmlu}
                    handleOpenMapView={this.handleOpenMapView}
               />
            else if(isAtcAdmin || isAfmluAdmin || isATCViewerAdmin || isAFMLUViewerAdmin){
                return <AdminDashboardForAtcAfmlu
                selectedApplicationType={FLY_DRONE_PERMISSION_APPLICATION}
                applications={this.props.adminApplications[FLY_DRONE_PERMISSION_APPLICATION]}
                errors={errors}
                airspaceCategories={airspaceCategories}
                loadAdditionalInfoPage={this.loadAdditionalInfoPage}
                applicationTypeSelected={this.applicationTypeSelected}
                loadAirspaceCategories={this.loadAirspaceCategoriesByHeight}
                updateApplicationStatus={this.updateApplicationStatus}
                updateApplicationStatusAtc={this.updateApplicationStatusAtc}
                updateApplicationStatusAfmlu={this.updateApplicationStatusAfmlu}
                handleOpenMapView={this.handleOpenMapView}
                />
            }        
        }
        else
            return null
    }
}

function mapStateToProps(state) {
     const { adminApplications } = state;
     const { adminCheck } = state.adminTest;
    const { airspaceCategories } = state.userAirspaceCategory;
     return {
         adminApplications,
         adminCheck,
         airspaceCategories
     };
}

export default connect(
  mapStateToProps
)(AdminDashboardPage)