import { LOGIN_REQUEST } from '../actions/loginActions';
import { LOGIN_SUCCESS } from '../actions/loginActions';
import { LOGIN_FAILURE } from '../actions/loginActions';
import { LOGIN_FORM_LOADED } from '../actions/loginActions';
import { LOGOUT } from '../actions/loginActions';

let accessToken = localStorage.getItem('accessToken');

const initialState = accessToken ? { loggedIn: true, loggingIn: false, errors: [] } : { loggedIn: false, loggingIn: false, errors: [] };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FORM_LOADED:
          return { ...state, errors: []};
        case LOGIN_REQUEST:
          return { loggedIn:false, loggingIn: true, errors: []};
        case LOGIN_SUCCESS:
          return { loggedIn:true, loggingIn: false, errors: []};
        case LOGIN_FAILURE:
          return { loggedIn:false, loggingIn: false, errors: action.errors};
        case LOGOUT:
          return { loggedIn:false, loggingIn: false, errors: []};
        default:
          return state
    }
}