import { uaopApplicationService } from "../services/uaopApplicationService";

export const UAOP_APPLICATION_FORM_LOADED = "UAOP_APPLICATION_FORM_LOADED";
export const SAVE_UAOP_APPLICATION_REQUEST = "SAVE_UAOP_APPLICATION_REQUEST";
export const SAVE_UAOP_APPLICATION_SUCCESS = "SAVE_UAOP_APPLICATION_SUCCESS";
export const SAVE_UAOP_APPLICATION_FAILURE = "SAVE_UAOP_APPLICATION_FAILURE";
export const LOAD_UAOP_APPLICATION_SUCCESS = "LOAD_UAOP_APPLICATION_SUCCESS";
export const LOAD_UAOP_APPLICATION_FAILURE = "LOAD_UAOP_APPLICATION_FAILURE";

export const createApplicationAction = applicationFormData => {
  return dispatch => {
    dispatch(request());
    uaopApplicationService.createApplication(applicationFormData).then(
      savedApplication => {
        dispatch(success(savedApplication));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_UAOP_APPLICATION_REQUEST };
  }
  function success(application) {
    return { type: SAVE_UAOP_APPLICATION_SUCCESS, application };
  }
  function failure(errors) {
    return { type: SAVE_UAOP_APPLICATION_FAILURE, errors };
  }
};

export const updateApplicationAction = (applicationId, applicationFormData) => {
  return dispatch => {
    dispatch(request());
    uaopApplicationService
      .updateApplication(applicationId, applicationFormData)
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
    return { type: SAVE_UAOP_APPLICATION_REQUEST };
  }
  function success(application) {
    return { type: SAVE_UAOP_APPLICATION_SUCCESS, application };
  }
  function failure(errors) {
    return { type: SAVE_UAOP_APPLICATION_FAILURE, errors };
  }
};

export const loadApplicationAction = applicationId => {
  return dispatch => {
    uaopApplicationService.loadApplication(applicationId).then(
      loadedApplication => {
        dispatch(success(loadedApplication));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function success(application) {
    return { type: LOAD_UAOP_APPLICATION_SUCCESS, application };
  }
  function failure(errors) {
    return { type: LOAD_UAOP_APPLICATION_FAILURE, errors };
  }
};

export const applicationFormLoadedAction = () => {
  return { type: UAOP_APPLICATION_FORM_LOADED };
};
