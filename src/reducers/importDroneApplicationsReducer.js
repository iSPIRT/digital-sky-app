import {
  SAVE_IMPORTDRONE_APPLICATION_REQUEST,
  SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS,
  SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE
} from "../actions/importDroneApplicationActions";

const initialState = {
  currentApplicationForm: {},
  saving: false,
  saved: false,
  errors: null
};

export function importDroneApplications(state = initialState, action) {
  switch (action.type) {
    case SAVE_IMPORTDRONE_APPLICATION_REQUEST:
      return { ...state, saving: true, saved: false, errors: null };
    case SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        errors: null,
        currentApplicationForm: action.payload
      };
    case SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE:
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
