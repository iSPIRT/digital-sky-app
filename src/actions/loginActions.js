import { userService } from '../services/userService';

export const LOGIN_FORM_LOADED = 'LOGIN_FORM_LOADED'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginAction = (credentials) => {

    return dispatch => {
        dispatch(request());
        userService.login(credentials)
                    .then(
                        user => {
                            dispatch(success());
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request()  { return { type: LOGIN_REQUEST} }
    function success() { return { type: LOGIN_SUCCESS } }
    function failure(errors) { return { type: LOGIN_FAILURE, errors } }
}

export const logoutAction = () => {
    userService.logout();
    return { type: LOGOUT}
}

export const loginFormLoaded = () => {
    return { type: LOGIN_FORM_LOADED}
}
