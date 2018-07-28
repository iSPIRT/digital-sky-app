import {
  SAVE_UIN_APPLICATION_REQUEST,
  SAVE_UIN_APPLICATION_REQUEST_SUCCESS,
  SAVE_UIN_APPLICATION_REQUEST_FAILURE,
  UIN_APPLICATION_FORM_LOADED,
  LOAD_UIN_APPLICATION_SUCCESS,
  LOAD_UIN_APPLICATION_FAILURE
} from "../actions/uinApplicationActions";

const initialState = {
  savingApplication: false,
  applicationForm: {},
  errors: []
};

export function uinApplications(state = initialState, action) {
  switch (action.type) {
    case UIN_APPLICATION_FORM_LOADED:
      return { ...state, errors: [] };
    case SAVE_UIN_APPLICATION_REQUEST:
      return { ...state, savingApplication: true, errors: [] };
    case SAVE_UIN_APPLICATION_REQUEST_SUCCESS:
      return {
        ...state,
        savingApplication: false,
        errors: [],
        applicationForm: action.payload
      };
    case SAVE_UIN_APPLICATION_REQUEST_FAILURE:
      return { ...state, savingApplication: false, errors: action.payload };
    case LOAD_UIN_APPLICATION_SUCCESS:
      return { ...state, applicationForm: action.payload };
    case LOAD_UIN_APPLICATION_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
