import {
  SAVE_FDP_APPLICATION_REQUEST,
  SUBMIT_FLIGHT_LOG_FOR_APPLICATION_FAILURE, SUBMIT_FLIGHT_LOG_FOR_APPLICATION_SUCCESS
} from "../actions/flyDronePermissionApplicationActions";
import { SAVE_FDP_APPLICATION_SUCCESS } from "../actions/flyDronePermissionApplicationActions";
import { SAVE_FDP_APPLICATION_FAILURE } from "../actions/flyDronePermissionApplicationActions";
import { LOAD_FDP_APPLICATIONS_SUCCESS } from "../actions/flyDronePermissionApplicationActions";
import { LOAD_FDP_APPLICATIONS_FAILURE } from "../actions/flyDronePermissionApplicationActions";

const initialState = {
  savingApplication: false,
  savedApplication: false,
  applications: [],
  errors: []
};

export function flyDronePermissionApplications(state = initialState, action) {
  switch (action.type) {
    case LOAD_FDP_APPLICATIONS_SUCCESS:
      return {
        ...state,
        applications: action.applications
      };
    case LOAD_FDP_APPLICATIONS_FAILURE:
      return { ...state, errors: action.errors };
    case SAVE_FDP_APPLICATION_REQUEST:
      return { ...state, savingApplication: true, errors: [] };
    case SAVE_FDP_APPLICATION_SUCCESS:
      const { application } = action;
      const currentApplications = state.applications;
      const indexOfUpdatedApplication = currentApplications.findIndex(
        a => a.id === application.id
      );
      const updatedApplications = [
        ...currentApplications.slice(0, indexOfUpdatedApplication),
        application,
        ...currentApplications.slice(indexOfUpdatedApplication + 1)
      ];
      return {
        errors: [],
        savingApplication: false,
        savedApplication: true,
        applications: updatedApplications
      };
    case SAVE_FDP_APPLICATION_FAILURE:
      return { ...state, savingApplication: false, errors: action.errors };
    case SUBMIT_FLIGHT_LOG_FOR_APPLICATION_SUCCESS:
      return {...state}
    case SUBMIT_FLIGHT_LOG_FOR_APPLICATION_FAILURE:
      return {...state, errors: action.errors }
    default:
      return state;
  }
}
