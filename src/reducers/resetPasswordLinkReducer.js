import { RESET_PASSWORD_FORM_LOADED } from '../actions/resetPasswordActions';
import { SEND_RESET_PASSWORD_LINK_REQUEST } from '../actions/resetPasswordActions';
import { SEND_RESET_PASSWORD_LINK_SUCCESS } from '../actions/resetPasswordActions';
import { SEND_RESET_PASSWORD_LINK_FAILURE } from '../actions/resetPasswordActions';

const initialState = { sendingResetPasswordLink: false, sentResetPasswordLink:false, errors:[] };

export function resetPasswordLink(state = initialState, action) {
    switch (action.type) {
        case RESET_PASSWORD_FORM_LOADED:
          return { ...state, errors:[]};
        case SEND_RESET_PASSWORD_LINK_REQUEST:
          return { sendingResetPasswordLink: true, sentResetPasswordLink: false, errors:[]};
        case SEND_RESET_PASSWORD_LINK_SUCCESS:
          return { sendingResetPasswordLink:false, sentResetPasswordLink: true, errors:[] };
        case SEND_RESET_PASSWORD_LINK_FAILURE:
          return { sendingResetPasswordLink:false, sentResetPasswordLink: false, errors: action.errors };
        default:
          return state
    }
}
