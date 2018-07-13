import { userService } from '../services/userService';

export const PILOT_PROFILE_FORM_LOADED = 'PILOT_PROFILE__FORM_LOADED'
export const SAVE_PILOT_PROFILE_REQUEST = 'SAVE_PILOT_PROFILE_REQUEST'
export const SAVE_PILOT_PROFILE_SUCCESS = 'SAVE_PILOT_PROFILE_SUCCESS'
export const SAVE_PILOT_PROFILE_FAILURE = 'SAVE_PILOT_PROFILE_FAILURE'
export const LOAD_PILOT_PROFILE_SUCCESS = 'LOAD_PILOT_PROFILE_SUCCESS'
export const LOAD_PILOT_PROFILE_FAILURE = 'LOAD_PILOT_PROFILE_FAILURE'

export const createPilotProfileAction = (pilotProfile) => {

    return dispatch => {
        dispatch(request());
        userService.createPilotProfile(pilotProfile)
                    .then(
                        data => {
                            dispatch(success(pilotProfile));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: SAVE_PILOT_PROFILE_REQUEST } }
    function success(pilotProfile) { return { type: SAVE_PILOT_PROFILE_SUCCESS, pilotProfile } }
    function failure(errors) { return { type: SAVE_PILOT_PROFILE_FAILURE, errors } }
}

export const updatePilotProfileAction = (pilotProfileId, pilotProfile) => {

    return dispatch => {
        dispatch(request());
        userService.updatePilotProfile(pilotProfileId, pilotProfile)
                    .then(
                        data => {
                            dispatch(success(pilotProfile));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: SAVE_PILOT_PROFILE_REQUEST } }
    function success(pilotProfile) { return { type: SAVE_PILOT_PROFILE_SUCCESS, pilotProfile } }
    function failure(errors) { return { type: SAVE_PILOT_PROFILE_FAILURE, errors } }
}

export const loadPilotProfile = (pilotProfileId) => {
    return dispatch => {
        userService.loadPilotProfile(pilotProfileId)
                    .then(
                        pilotProfile => {
                            dispatch(success(pilotProfile));
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };
    function success(pilotProfile) { return { type: LOAD_PILOT_PROFILE_SUCCESS, pilotProfile } }
    function failure(errors) { return { type: LOAD_PILOT_PROFILE_FAILURE, errors } }
}

export const pilotProfileFormLoaded = () => {
    return { type: PILOT_PROFILE_FORM_LOADED}
}


