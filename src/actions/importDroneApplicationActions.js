import { importDroneApplicationService } from "../services/importDroneApplicationService";

export const SAVE_IMPORTDRONE_APPLICATION_REQUEST =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST";
export const SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS";
export const SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE";
export const IMPORTDRONE_APPLICATION_FORM_LOADED =
  "IMPORTDRONE_APPLICATION_FORM_LOADED";
export const LOAD_IMPORTDRONE_APPLICATION_SUCCESS =
  "LOAD_IMPORTDRONE_APPLICATION_SUCCESS";
export const LOAD_IMPORTDRONE_APPLICATION_FAILURE =
  "LOAD_IMPORTDRONE_APPLICATION_FAILURE";

export const createImportDroneApplicationAction = applicationForm => {
  return dispatch => {
    dispatch(request());
    importDroneApplicationService.create(applicationForm).then(
      createdForm => {
        dispatch(success(createdForm));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const editImportDroneApplicationAction = (
  applicationFormData,
  applicationId
) => {
  return dispatch => {
    dispatch(request());
    importDroneApplicationService.edit(applicationFormData, applicationId).then(
      editedForm => {
        dispatch(success(editedForm));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const loadImportDroneApplicationAction = applicationId => {
  return dispatch => {
    importDroneApplicationService.load(applicationId).then(
      loadedApplication => {
        dispatch(successLoading(loadedApplication));
      },
      errors => {
        dispatch(failureLoading(errors));
      }
    );
  };
  function successLoading(application) {
    return {
      type: LOAD_IMPORTDRONE_APPLICATION_SUCCESS,
      payload: application
    };
  }
  function failureLoading(errors) {
    return {
      type: LOAD_IMPORTDRONE_APPLICATION_FAILURE,
      payload: errors
    };
  }
};

export const applicationFormLoadedAction = () => {
  return { type: IMPORTDRONE_APPLICATION_FORM_LOADED };
};

function request() {
  return { type: SAVE_IMPORTDRONE_APPLICATION_REQUEST };
}
function success(editedForm) {
  return {
    type: SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS,
    payload: editedForm
  };
}
function failure(errors) {
  return {
    type: SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE,
    payload: errors
  };
}
