import { REGISTER_FORM_LOADED } from '../actions/registrationActions';
import { REGISTER_REQUEST } from '../actions/registrationActions';
import { REGISTER_SUCCESS } from '../actions/registrationActions';
import { REGISTER_FAILURE } from '../actions/registrationActions';

const initialState = { registering: false, registered:false, errors:[] };

export function registration(state = initialState, action) {
    switch (action.type) {
        case REGISTER_FORM_LOADED:
          return { ...state, errors:[]};
        case REGISTER_REQUEST:
          return { registering: true, registered: false, errors:[]};
        case REGISTER_SUCCESS:
          return { registering:false, registered: true, errors:[] };
        case REGISTER_FAILURE:
          return { registering:false, registered: false, errors: action.errors };
        default:
          return state
    }
}
