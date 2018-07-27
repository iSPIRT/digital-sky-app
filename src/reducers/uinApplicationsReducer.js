import { SAVE_UIN_APPLICATION_REQUEST } from "../actions/uinApplicationActions";
import { SAVE_UIN_APPLICATION_REQUEST_SUCCESS } from "../actions/uinApplicationActions";
import { SAVE_UIN_APPLICATION_REQUEST_FAILURE } from "../actions/uinApplicationActions";

const initialState = {
  savingApplication: false,
  applicationForm: {},
  errors: []
};

export function uinApplications(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
