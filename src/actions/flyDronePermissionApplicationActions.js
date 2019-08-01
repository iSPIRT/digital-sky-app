import { flyDronePermissionApplicationService } from "../services/flyDronePermissionApplicationService";
import { history } from "../store/configureStore";

export const SAVE_FDP_APPLICATION_REQUEST = "SAVE_FDP_APPLICATION_REQUEST";
export const SAVE_FDP_APPLICATION_SUCCESS = "SAVE_FDP_APPLICATION_SUCCESS";
export const SAVE_FDP_APPLICATION_FAILURE = "SAVE_FDP_APPLICATION_FAILURE";
export const LOAD_FDP_APPLICATIONS_SUCCESS = "LOAD_FDP_APPLICATIONS_SUCCESS";
export const LOAD_FDP_APPLICATIONS_FAILURE = "LOAD_FDP_APPLICATIONS_FAILURE";
export const SUBMIT_FLIGHT_LOG_FOR_APPLICATION_SUCCESS = "SUBMIT_FLIGHT_LOG_FOR_APPLICATION_SUCCESS";
export const SUBMIT_FLIGHT_LOG_FOR_APPLICATION_FAILURE = "SUBMIT_FLIGHT_LOG_FOR_APPLICATION_FAILURE";

export const createApplicationAction = application => {
  return dispatch => {
    dispatch(request());
    flyDronePermissionApplicationService.createApplication(application).then(
      savedApplication => {
        dispatch(success(savedApplication));
        history.push(
          "/flyDronePermissionApplication?droneId=" +
            savedApplication.droneId +
            "&id=" +
            savedApplication.id
        );
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_FDP_APPLICATION_REQUEST };
  }
  function success(application) {
    return { type: SAVE_FDP_APPLICATION_SUCCESS, application };
  }
  function failure(errors) {
    return { type: SAVE_FDP_APPLICATION_FAILURE, errors };
  }
};

export const updateApplicationAction = (applicationId, application) => {
  return dispatch => {
    dispatch(request());
    flyDronePermissionApplicationService
      .updateApplication(applicationId, application)
      .then(
        savedApplication => {
          dispatch(success(savedApplication));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: SAVE_FDP_APPLICATION_REQUEST };
  }
  function success(application) {
    return { type: SAVE_FDP_APPLICATION_SUCCESS, application };
  }
  function failure(errors) {
    return { type: SAVE_FDP_APPLICATION_FAILURE, errors };
  }
};

export const loadApplicationsAction = droneId => {
  return dispatch => {
    flyDronePermissionApplicationService.loadApplications(droneId).then(
      applications => {
        dispatch(success(applications));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function success(applications) {
    return { type: LOAD_FDP_APPLICATIONS_SUCCESS, applications };
  }
  function failure(errors) {
    return { type: LOAD_FDP_APPLICATIONS_FAILURE, errors };
  }
};

export const submitFlightLogAction = (application,formData) =>{
  return dispatch =>{
    flyDronePermissionApplicationService.submitFlightLog(application,formData).then(
      ()=>{},
      errors=>{
        dispatch(failure(errors));
      }
    )
  };
  function failure(errors) {
    return { type: SUBMIT_FLIGHT_LOG_FOR_APPLICATION_FAILURE, errors };
  }
};