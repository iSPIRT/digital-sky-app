import {
  SAVE_IMPORTDRONE_APPLICATION_REQUEST,
  SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS,
  SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE,
  IMPORTDRONE_APPLICATION_FORM_LOADED,
  LOAD_IMPORTDRONE_APPLICATION_SUCCESS,
  LOAD_IMPORTDRONE_APPLICATION_FAILURE
} from "../actions/importDroneApplicationActions";

const initialState = {
  currentApplicationForm: {},
  saving: false,
  saved: false,
  errors: null
};

export function importDroneApplications(state = initialState, action) {
  switch (action.type) {
    case IMPORTDRONE_APPLICATION_FORM_LOADED:
      return { ...state, errors: [] };
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
    case LOAD_IMPORTDRONE_APPLICATION_SUCCESS:
      return { ...state, currentApplicationForm: action.payload };
    case LOAD_IMPORTDRONE_APPLICATION_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
