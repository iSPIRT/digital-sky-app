import { LOAD_USER_APPLICATIONS_REQUEST } from "../actions/userActions";
import { LOAD_USER_APPLICATIONS_SUCCESS } from "../actions/userActions";
import { LOAD_USER_APPLICATIONS_FAILURE } from "../actions/userActions";

const initialState = {  loadingApplications:false, applications: [], errors: [] };

export function userApplications(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_APPLICATIONS_REQUEST:
      return { ...state, loadingApplications: true, errors: [] };
    case LOAD_USER_APPLICATIONS_SUCCESS:
      return { ...state, loadingApplications: false, applications: action.applications };
    case LOAD_USER_APPLICATIONS_FAILURE:
      return { ...state, loadingApplications: false, errors: action.errors };
    default:
      return state;
  }
}
