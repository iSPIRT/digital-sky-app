import { userService } from '../services/userService';

export const RESET_PASSWORD_FORM_LOADED = 'RESET_PASSWORD_FORM_LOADED'
export const SEND_RESET_PASSWORD_LINK_REQUEST = 'SEND_RESET_PASSWORD_LINK_REQUEST'
export const SEND_RESET_PASSWORD_LINK_SUCCESS = 'SEND_RESET_PASSWORD_LINK_SUCCESS'
export const SEND_RESET_PASSWORD_LINK_FAILURE = 'SEND_RESET_PASSWORD_LINK_FAILURE'

export const sendResetPasswordLink = (email) => {

    return dispatch => {
        dispatch(request());
        userService.sendResetPasswordLink(email)
                    .then(
                        user => {
                            dispatch(success());
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: SEND_RESET_PASSWORD_LINK_REQUEST} }
    function success() { return { type: SEND_RESET_PASSWORD_LINK_SUCCESS } }
    function failure(errors) { return { type: SEND_RESET_PASSWORD_LINK_FAILURE, errors } }
}

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE'


export const resetPassword = (payload) => {

    return dispatch => {
        dispatch(request());
        userService.resetPassword(payload)
                    .then(
                        user => {
                            dispatch(success());
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: RESET_PASSWORD_REQUEST} }
    function success() { return { type: RESET_PASSWORD_SUCCESS } }
    function failure(errors) { return { type: RESET_PASSWORD_FAILURE, errors } }
}

export const resetPasswordFormLoaded = () => {
    return { type: RESET_PASSWORD_FORM_LOADED}
}



