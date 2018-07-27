import { LOAD_APPLICATIONS_REQUEST } from "../actions/adminActions";
import { LOAD_APPLICATIONS_SUCCESS } from "../actions/adminActions";
import { LOAD_APPLICATIONS_FAILURE } from "../actions/adminActions";
import { APPROVE_APPLICATION_REQUEST } from "../actions/adminActions";
import { APPROVE_APPLICATION_SUCCESS } from "../actions/adminActions";
import { APPROVE_APPLICATION_FAILURE } from "../actions/adminActions";

const initialState = {
  loadingApplications: false,
  approvingApplication: false,
  errors: []
};

export function adminApplications(state = initialState, action) {
  switch (action.type) {
    case LOAD_APPLICATIONS_REQUEST:
      return { ...state, loadingApplications: true, errors: [] };
    case LOAD_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loadingApplications: false,
        [action.applicationType]: action.applications
      };
    case LOAD_APPLICATIONS_FAILURE:
      return { ...state, loadingApplications: false, errors: action.errors };
    case APPROVE_APPLICATION_REQUEST:
      return { ...state, approvingApplication: true, errors: [] };
    case APPROVE_APPLICATION_SUCCESS:
      const { updatedApplication } = action;
      const applications = state[action.applicationType];
      const indexOfUpdatedApplication = applications.findIndex(
        application => application.id === updatedApplication.id
      );
      const updatedApplications = [
        ...applications.slice(0, indexOfUpdatedApplication),
        updatedApplication,
        ...applications.slice(indexOfUpdatedApplication + 1)
      ];
      return {
        ...state,
        approvingApplication: false,
        [action.applicationType]: updatedApplications
      };
    case APPROVE_APPLICATION_FAILURE:
      return { ...state, approvingApplication: false, errors: action.errors };
    default:
      return state;
  }
}
