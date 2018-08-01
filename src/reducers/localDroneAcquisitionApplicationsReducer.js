import {
  SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST,
  SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_SUCCESS,
  SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_FAILURE,
  LOCALDRONEACQUISITION_APPLICATION_FORM_LOADED,
  LOAD_LOCALDRONEACQUISITION_APPLICATION_SUCCESS,
  LOAD_LOCALDRONEACQUISITION_APPLICATION_FAILURE
} from "../actions/localDroneAcquisitionApplicationActions";

const initialState = {
  currentApplicationForm: {},
  saving: false,
  saved: false,
  errors: null
};

export function localDroneAcquisitionApplications(
  state = initialState,
  action
) {
  switch (action.type) {
    case LOCALDRONEACQUISITION_APPLICATION_FORM_LOADED:
      return { ...state, errors: [], currentApplicationForm: {} };
    case SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST:
      return { ...state, saving: true, saved: false, errors: null };
    case SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        errors: null,
        currentApplicationForm: action.payload
      };
    case SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_FAILURE:
      return {
        ...state,
        saving: false,
        saved: false,
        errors:
          (action.payload ? action.payload : "") +
          (action.payload.errors ? "   " + action.payload.errors : "")
      };
    case LOAD_LOCALDRONEACQUISITION_APPLICATION_SUCCESS:
      return { ...state, currentApplicationForm: action.payload };
    case LOAD_LOCALDRONEACQUISITION_APPLICATION_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
