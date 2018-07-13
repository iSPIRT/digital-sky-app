import { userService } from '../services/userService';

export const OPERATOR_PROFILE_FORM_LOADED = 'OPERATOR_PROFILE__FORM_LOADED'
export const SAVE_OPERATOR_PROFILE_REQUEST = 'SAVE_OPERATOR_PROFILE_REQUEST'
export const SAVE_OPERATOR_PROFILE_SUCCESS = 'SAVE_OPERATOR_PROFILE_SUCCESS'
export const SAVE_OPERATOR_PROFILE_FAILURE = 'SAVE_OPERATOR_PROFILE_FAILURE'
export const LOAD_OPERATOR_PROFILE_SUCCESS = 'LOAD_OPERATOR_PROFILE_SUCCESS'
export const LOAD_OPERATOR_PROFILE_FAILURE = 'LOAD_OPERATOR_PROFILE_FAILURE'

export const createOperatorProfileAction = (profileType, operatorProfile) => {

    return dispatch => {
        dispatch(request());
        userService.createOperatorProfile(profileType, operatorProfile)
                    .then(
                        data => {
                            dispatch(success(operatorProfile));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: SAVE_OPERATOR_PROFILE_REQUEST } }
    function success(operatorProfile) { return { type: SAVE_OPERATOR_PROFILE_SUCCESS, operatorProfile } }
    function failure(errors) { return { type: SAVE_OPERATOR_PROFILE_FAILURE, errors } }
}

export const updateOperatorProfileAction = (profileType, operatorProfileId, operatorProfile) => {

    return dispatch => {
        dispatch(request());
        userService.updateOperatorProfile(profileType, operatorProfileId, operatorProfile)
                    .then(
                        data => {
                            dispatch(success(operatorProfile));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: SAVE_OPERATOR_PROFILE_REQUEST } }
    function success(operatorProfile) { return { type: SAVE_OPERATOR_PROFILE_SUCCESS, operatorProfile } }
    function failure(errors) { return { type: SAVE_OPERATOR_PROFILE_FAILURE, errors } }
}

export const loadOperatorProfile = (profileType, operatorProfileId) => {
    return dispatch => {
        userService.loadOperatorProfile(profileType, operatorProfileId)
                    .then(
                        data => {
                            dispatch(success(data));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };
    function success(operatorProfile) { return { type: LOAD_OPERATOR_PROFILE_SUCCESS, operatorProfile } }
    function failure(errors) { return { type: LOAD_OPERATOR_PROFILE_FAILURE, errors } }
}

export const operatorProfileFormLoaded = () => {
    return { type: OPERATOR_PROFILE_FORM_LOADED}
}


