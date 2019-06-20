import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import { history } from '../store/configureStore';

import AdminDashboard from '../components/AdminDashboard';

import AdminDashboardForAtcAfmlu from '../components/AdminDashboardForAtcAfmlu';

import { LOCAL_DRONE_ACQUISITION_APPLICATION, FLY_DRONE_PERMISSION_APPLICATION } from '../constants/applicationType';

import { loadApplicationsAction } from '../actions/adminActions';
import { checkAdminAction } from '../actions/loginActions';

class AdminDashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        this.applicationSelectedByAtcAfmlu = this.applicationSelectedByAtcAfmlu.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        this.state = {
            selectedApplicationType: queryParams.type ? queryParams.type: LOCAL_DRONE_ACQUISITION_APPLICATION,
            isAdmin:JSON.parse(localStorage.getItem('isAdmin')),
            isAtcAdmin:JSON.parse(localStorage.getItem('isAtcAdmin')),
            isAfmluAdmin:JSON.parse(localStorage.getItem('isAfmluAdmin')),
            isViewerAdmin:JSON.parse(localStorage.getItem('isViewerAdmin')),
            isAdminCheck:false
        };
        this.props.dispatch(checkAdminAction(localStorage.getItem('accessToken')));
        if(this.state.isAdmin || this.state.isViewerAdmin)
            this.props.dispatch(loadApplicationsAction(LOCAL_DRONE_ACQUISITION_APPLICATION,"admin"));
        else if(this.state.isAtcAdmin)
            this.props.dispatch(loadApplicationsAction(FLY_DRONE_PERMISSION_APPLICATION,"atcAdmin"));
        else if(this.state.isAfmluAdmin)
            this.props.dispatch(loadApplicationsAction(FLY_DRONE_PERMISSION_APPLICATION,"afmluAdmin"));
    }

    applicationTypeSelected(applicationType){
        this.setState({selectedApplicationType: applicationType})
        this.props.dispatch(loadApplicationsAction(applicationType));
    }

    applicationSelected(applicationId){
        const {selectedApplicationType} = this.state;
        history.push("/admin/application?type="+selectedApplicationType+"&id="+applicationId);
    }

    applicationSelectedByAtcAfmlu(applicationId){
        const {selectedApplicationType} = this.state;
        history.push("/admin/application?type="+FLY_DRONE_PERMISSION_APPLICATION+"&id="+applicationId);
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
        const {selectedApplicationType,isAdmin,isAtcAdmin,isAfmluAdmin,isAdminCheck,isViewerAdmin} = this.state;
        const { errors } = this.props.adminApplications;
        const applications = this.props.adminApplications[selectedApplicationType];
        if(isAdminCheck){            
            if(isAdmin || isViewerAdmin)
            return <AdminDashboard
                    selectedApplicationType={selectedApplicationType}
                    applications={applications}
                    errors={errors}
                    applicationTypeSelected={this.applicationTypeSelected}
                    applicationSelected={this.applicationSelected}
               />
            else if(isAtcAdmin || isAfmluAdmin){
                return <AdminDashboardForAtcAfmlu
                selectedApplicationType={FLY_DRONE_PERMISSION_APPLICATION}
                applications={this.props.adminApplications[FLY_DRONE_PERMISSION_APPLICATION]}
                errors={errors}
                applicationSelected={this.applicationSelected}
                applicationSelected={this.applicationSelectedByAtcAfmlu}
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
     return {
        adminApplications,
        adminCheck
     };
}

export default connect(
  mapStateToProps
)(AdminDashboardPage)