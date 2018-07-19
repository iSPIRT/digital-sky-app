import { RESET_PASSWORD_FORM_LOADED } from '../actions/resetPasswordActions';
import { RESET_PASSWORD_REQUEST } from '../actions/resetPasswordActions';
import { RESET_PASSWORD_SUCCESS } from '../actions/resetPasswordActions';
import { RESET_PASSWORD_FAILURE } from '../actions/resetPasswordActions';

const initialState = { resettingPassword: false, resetPasswordSuccess:false, errors:[] };

export function resetPassword(state = initialState, action) {
    switch (action.type) {
        case RESET_PASSWORD_FORM_LOADED:
          return { ...state, errors:[]};
        case RESET_PASSWORD_REQUEST:
          return { resettingPassword: true, resetPasswordSuccess: false, errors:[]};
        case RESET_PASSWORD_SUCCESS:
          return { resettingPassword:false, resetPasswordSuccess: true, errors:[] };
        case RESET_PASSWORD_FAILURE:
          return { resettingPassword:false, resetPasswordSuccess: false, errors: action.errors };
        default:
          return state
    }
}
