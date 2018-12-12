import React from 'react';

import { connect } from 'react-redux'

import queryString from 'query-string'

import { history } from '../store/configureStore';

import AdminDashboard from '../components/AdminDashboard';

import { LOCAL_DRONE_ACQUISITION_APPLICATION } from '../constants/applicationType';

import { loadApplicationsAction } from '../actions/adminActions';
import { checkAdminAction } from '../actions/loginActions';

class AdminDashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.applicationTypeSelected = this.applicationTypeSelected.bind(this);
        this.applicationSelected = this.applicationSelected.bind(this);
        const queryParams = queryString.parse(this.props.location.search);
        this.state = {
            selectedApplicationType: queryParams.type ? queryParams.type: LOCAL_DRONE_ACQUISITION_APPLICATION,
            isAdmin:false
        };
        this.props.dispatch(checkAdminAction(localStorage.getItem('accessToken')));
        this.props.dispatch(loadApplicationsAction(LOCAL_DRONE_ACQUISITION_APPLICATION));
    }

    applicationTypeSelected(applicationType){
        this.setState({selectedApplicationType: applicationType})
        this.props.dispatch(loadApplicationsAction(applicationType));
    }

    applicationSelected(applicationId){
        const {selectedApplicationType} = this.state;
        history.push("/admin/application?type="+selectedApplicationType+"&id="+applicationId);
    }

    componentWillReceiveProps(){
        if(this.props.adminCheck)
            this.setState({isAdmin:true})
        else
            this.setState({isAdmin:false})
    }

    render() {
        const {selectedApplicationType,isAdmin} = this.state;
        const { errors } = this.props.adminApplications;
        const applications = this.props.adminApplications[selectedApplicationType];
        if(isAdmin)
            return <AdminDashboard
                    selectedApplicationType={selectedApplicationType}
                    applications={applications}
                    errors={errors}
                    applicationTypeSelected={this.applicationTypeSelected}
                    applicationSelected={this.applicationSelected}
               />
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