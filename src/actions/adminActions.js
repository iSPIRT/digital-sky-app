import { adminService } from '../services/adminService';

export const LOAD_APPLICATIONS_REQUEST = 'LOAD_APPLICATIONS_REQUEST'
export const LOAD_APPLICATIONS_SUCCESS = 'LOAD_APPLICATIONS_SUCCESS'
export const LOAD_APPLICATIONS_FAILURE = 'LOAD_APPLICATIONS_FAILURE'

export const APPROVE_APPLICATION_REQUEST = 'APPROVE_APPLICATION_REQUEST'
export const APPROVE_APPLICATION_SUCCESS = 'APPROVE_APPLICATION_SUCCESS'
export const APPROVE_APPLICATION_FAILURE = 'APPROVE_APPLICATION_FAILURE'


export const loadApplicationsAction = (applicationType) => {

    return dispatch => {
        dispatch(request());
        adminService.loadApplications(applicationType)
                    .then(
                        applications => {
                            dispatch(success(applicationType, applications));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: LOAD_APPLICATIONS_REQUEST } }
    function success(applicationType, applications) { return { type: LOAD_APPLICATIONS_SUCCESS, applicationType, applications } }
    function failure(errors) { return { type: LOAD_APPLICATIONS_FAILURE, errors } }
}

export const approveApplicationsAction = (applicationType, applicationId, applicationApproval) => {

    return dispatch => {
        dispatch(request());
        adminService.approveApplication(applicationType, applicationId, applicationApproval )
                    .then(
                        updatedApplication => {
                            dispatch(success(applicationType, updatedApplication));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: APPROVE_APPLICATION_REQUEST } }
    function success(applicationType, updatedApplication) { return { type: APPROVE_APPLICATION_SUCCESS, applicationType, updatedApplication } }
    function failure(errors) { return { type: APPROVE_APPLICATION_FAILURE, errors } }
}
