import { userService } from '../services/userService';

export const REGISTER_FORM_LOADED = 'REGISTER_FORM_LOADED'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const registerUserAction = (user) => {

    return dispatch => {
        dispatch(request(user));
        userService.register(user)
                    .then(
                        user => {
                            dispatch(success());
                        },
                        errors => {
                            dispatch(failure(errors));
                        }
                    );

    };

    function request(user)  { return { type: REGISTER_REQUEST, user } }
    function success() { return { type: REGISTER_SUCCESS } }
    function failure(errors) { return { type: REGISTER_FAILURE, errors } }
}

export const registerFormLoaded = () => {
    return { type: REGISTER_FORM_LOADED}
}
