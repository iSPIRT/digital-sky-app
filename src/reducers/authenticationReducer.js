import { LOGIN_REQUEST } from '../actions/loginActions';
import { LOGIN_SUCCESS } from '../actions/loginActions';
import { LOGIN_FAILURE } from '../actions/loginActions';


const initialState = { loggedIn: false, loginActionInProgress: false, errors: [] };

export function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
          return { loggedIn:false, loginActionInProgress: true, errors: []};
        case LOGIN_SUCCESS:
          return { loggedIn:true, loginActionInProgress: false, errors: []};
        case LOGIN_FAILURE:
          return { loggedIn:false, loginActionInProgress: false, errors: action.errors};
        default:
          return state
    }
}