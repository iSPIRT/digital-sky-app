import { REGISTER_REQUEST } from '../actions/registrationActions';
import { REGISTER_SUCCESS } from '../actions/registrationActions';
import { REGISTER_FAILURE } from '../actions/registrationActions';

const initialState = { registering: false, registered:false, errors:[], user: {} };

export function registration(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
          return { registering: true, user: state.user};
        case REGISTER_SUCCESS:
          return { registering:false, registered: true, user: {} };
        case REGISTER_FAILURE:
          return { registering:false, registered: false, errors: action.errors, user: {} };
        default:
          return state
    }
}
