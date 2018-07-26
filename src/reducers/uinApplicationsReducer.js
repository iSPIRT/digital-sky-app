import { SAVE_UIN_APPLICATION_REQUEST } from "../actions/uinApplicationActions";
import { SAVE_UIN_APPLICATION_REQUEST_SUCCESS } from "../actions/uinApplicationActions";
import { SAVE_UIN_APPLICATION_REQUEST_FAILURE } from "../actions/uinApplicationActions";

const initialState = {
  currentApplicationForm: {},
  saving: false,
  saved: false,
  errors: null
};

export function uinApplications(state = initialState, action) {
  switch (action.type) {
    case SAVE_UIN_APPLICATION_REQUEST:
      return { ...state, saving: true, saved: false, errors: null };
    case SAVE_UIN_APPLICATION_REQUEST_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        errors: null,
        currentApplicationForm: action.payload
      };
    case SAVE_UIN_APPLICATION_REQUEST_FAILURE:
      return {
        ...state,
        saving: false,
        saved: false,
        errors:
          (action.payload ? action.payload : "") +
          (action.payload.errors ? "   " + action.payload.errors : "")
      };
    default:
      return state;
  }
}
